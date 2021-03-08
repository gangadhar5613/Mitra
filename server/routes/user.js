var express = require("express");
var router = express.Router();
const User = require("../models/User");
const Verification = require("../models/PhoneVerification");
var jwt = require("../config/jwt");
var auth = require("../middleware/auth");
var hash = require("../utils/hash");
var multer = require("multer");
var upload = multer({
	dest: "uploads/",
	limits: { fileSize: 50 },
	fileFilter: (req, file, cb) => {
		console.log(file)
	},
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

		const {to, status, valid} = await twilio.verify.services(process.env.TWILIO_SERVICE_ID).verificationChecks.create({
			to: "+91" + mobile,
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
	const { mobile, password }  = req.body.user;
	try {
		const isMobileNumberAlreadyExist = await User.findOne({ mobile });

		if (isMobileNumberAlreadyExist) throw new Error("val-01"); // user already exist

		const { status, valid } = await Verification.findOne({ sid, mobile }) || {};
		if (!valid || status !== "approved") throw new Error("auth-01"); // doesn't have sended a otp and doesn't have status of it

		const user = await User.create({ ...req.body.user, local: { password }, isVerified: valid });
		const token = await jwt.generateToken({ userID: user.id });
		const deleteVerificationTrace = await Verification.findOneAndDelete({ sid });
		req.session.destroy();
		res.json({ user: profileInfo(user, token) });
	} catch (error) {
		console.log(error);
		next(error)
	}
})

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
