var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");
const User = require("../models/User");
const Verification = require("../models/PhoneVerification");
var jwt = require("../config/jwt");
var auth = require("../middleware/auth");
var hash = require("../utils/hash");
var aws = require("../config/s3uploader");
const { v4: uuidv4 } = require("uuid");

var multer = require("multer");
const { profile } = require("console");
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, `${uuidv4()}.${file.originalname.split(".").pop()}`);
	},
});

var upload = multer({
	storage: storage,
	fileFilter: function (req, file, cb) {
		if (["png", "jpeg", "jpg", "webp", "pdf", "doc"].includes(file.originalname.split(".").pop())) {
			return cb(null, true);
		}
		return cb(null, false);
	},
	limits: { fileSize: 1048576 },
});

// POST /api/v1/user/mobile To send the OTP to user mobile
router.post("/mobile", async (req, res, next) => {
  const { mobile } = req.body.user
  const twilio = require("twilio")();
  try {
    const isMobileNumberAlreadyExist = await User.findOne({ mobile });
    if (isMobileNumberAlreadyExist) throw new Error("val-01");

    const { sid, to, status, dateCreated, dateUpdated, valid} = await twilio.verify.services(process.env.TWILIO_SERVICE_ID).verifications.create({
      to: '+91' + mobile,
      channel: 'sms'
		})

		const verification = await Verification.create({
			mobile: to,
			status,
			sid,
			valid
		})

		// Create session for new user
    req.session.sid = sid;
    res.json({to, status, dateCreated, dateUpdated})

  } catch (error) {
    console.log(error)
    next(error)
  }
});

//To verify the mobile OTP : POST
router.post("/mobile/verify", async (req, res, next) => {
	const { sid } = req.session;
  const { mobile, code } = req.body.user;
  const twilio = require("twilio")();
  try {
    const isMobileNumberAlreadyExist = await User.findOne({ mobile });
		if (isMobileNumberAlreadyExist) throw new Error("val-01");

		const isVerificationAvailable = await Verification.findOne({ sid });
		if (!isVerificationAvailable) throw new Error("invalid-02");

		const { to, status, valid } = await twilio.verify.services(process.env.TWILIO_SERVICE_ID).verificationChecks.create({
			to: mobile,
			code,
		});

		const verification = await Verification.findOneAndUpdate({ sid }, { status, valid });
    res.json({ to, status });
  } catch (error) {
    console.log(error);
    next(error)
  }
});

// POST /api/v1/user/register User registration after successfully mobile verification

router.post("/register", async (req, res, next) => {
	const { sid } = req.session;
	const { mobile, password, profileImage } = req.body.user;
	console.log(password);
	// let profileImage = null;
	try {
		const isMobileNumberAlreadyExist = await User.findOne({ mobile });
		if (isMobileNumberAlreadyExist) throw new Error("val-01"); // user already exist

		const { status, valid } = (await Verification.findOne({ sid, mobile })) || {};
		if (!valid || status !== "approved") throw new Error("auth-01"); // doesn't have sended a otp and doesn't have status of it
		if (profileImage) {
			// const buffer = fs.readFileSync(path.join(__dirname, `../../${file.path}`));

			const uploadParams = {
				Bucket: "blood-app",
				Key: file.filename,
				Body: profileImage,
			};

			const uploadStatus = await aws.uploader(aws, uploadParams);
			if (!uploadStatus) throw new Error("failed-01"); // Error on uploading
			profileImage = `https://blood-app.s3.ap-south-1.amazonaws.com/${file.filename}`;
		}
		const user = await User.create({ ...req.body.user, local: { password }, isVerified: valid, profileImage });
		const token = await jwt.generateToken({ userID: user.id });
		const deleteVerificationTrace = await Verification.findOneAndDelete({ sid });
		req.session.destroy();
		res.json({ user: profileInfo(user, token) });
	} catch (error) {
		console.log(error);
		next(error);
	}
	}
);

// POST /api/v1/user/login

router.post("/login", async (req, res, next) => {
	const { email, mobile, password } = req.body.user;
	try {
		const [user] = await User.find({}).or([{ email }, { mobile }]);
		console.log(user)
		if(!user) throw new Error("invalid-02") // user not found
		const passwordCheck = await user.verifyPassword(password);
		if (passwordCheck) {
			const token = await jwt.generateToken({ userID: user.id });
			res.json({ user: profileInfo(user, token) });
		} else {
			throw new Error("auth-03"); // password and username failed
		}
	} catch (error) {
		console.log(error)
		next(error);
	}
});

// PUT /api/v1/user/update

router.put("/update", auth.verifyUserLoggedIn, async (req, res, next) => {
	const token = req.headers.authorization;
	const { sid } = req.session;
	let { location, email, mobile, password } = req.body.user;
	const { userID } = req;
	try {
		const user = await User.findById(userID);
		if (!user) throw new Error("invalid-02"); // user not found
		if (mobile) {
			const { status, valid } = (await Verification.findOne({ sid, mobile })) || {};
			if (!valid || status !== "approved") throw new Error("auth-01"); // doesn't have sended a otp and doesn't have status of it
			const deleteVerificationTrace = await Verification.findOneAndDelete({ sid });
			req.session.destroy();
		}
		if (password) {
			password = await hash(password);
		}
		const updatedUser = await User.findByIdAndUpdate(userID, { location: location ?? user.location, email: email ?? user.email, mobile: mobile ?? user.mobile, local: { password: password ?? user.local?.password } }, { new: true });
		res.json({ user: profileInfo(updatedUser, token) });
	} catch (error) {
		console.log(error);
		next(error);
	}
})

// PUT /api/v1/user/update/profile - profile uploading

router.put("/update/profile", auth.verifyUserLoggedIn, upload.fields([{ name: "profileImage", maxCount: 1 }]), async (req, res, next) => {
	const token = req.headers.authorization;
	const { profileImage } = req.body.user;
	const { userID } = req;
	try {
		const user = await User.findById(userID);
		if (!user) throw new Error("invalid-02"); // user not found
		const updatedUser = await User.findByIdAndUpdate(userID, { profileImage }, { new: true });
		res.json({ user: profileInfo(updatedUser, token) });
	} catch (error) {
		console.log(error);
		next(error);
	}
});

router.get("/", auth.verifyUserLoggedIn, async (req, res, next) => {
	const token = req.headers.authorization;
	const { userID } = req;
	try {
		const user = await User.findById(userID);
		if (!user) throw new Error("invalid-02"); // user not found
		res.json({ user: profileInfo(user, token) });
	} catch (error) {
		console.log(error);
		next(error);
	}
});


function profileInfo(user, token) {
	const { firstName, lastName, middleName, email, mobile, bloodGroup, dob, profileImage, location } = user;
	return {
		fullName: `${firstName} ${lastName}`,
		email,
		mobile,
		bloodGroup,
		dob,
		profileImage,
		...location,
		token,
	};
}

module.exports = router;
