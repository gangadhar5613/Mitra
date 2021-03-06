var express = require("express");
var router = express.Router();
const User = require("../models/User");

// POST /api/v1/user/mobile To send the OTP to user mobile
router.post("/mobile", async (req, res, next) => {
  const { mobile } = req.body.user
  const twilio = require("twilio")();
  try {
    const isMobileNumberAlreadyExist = await User.findOne({ mobile });
    if (isMobileNumberAlreadyExist) throw new Error("val-01");

    const { sid, to, status, dateCreated, dateUpdated} = await twilio.verify.services(process.env.TWILIO_SERVICE_ID).verifications.create({
      to: '+91' + mobile,
      channel: 'sms'
    })

    req.session.mobile = sid;

    res.json({
      to,
      status,
      dateCreated,
      dateUpdated,
      sid
    })

  } catch (error) {
    console.log(error)
    next(error)
  }
});

//To verify the mobile OTP : POST
router.post("/mobile/verify", async (req, res, next) => {
  console.log(req.session)
  const { mobile, code } = req.body.user;
  const twilio = require("twilio")();
  try {
    const isMobileNumberAlreadyExist = await User.findOne({ mobile });
    if (isMobileNumberAlreadyExist) throw new Error("val-01");

    const {to, status, valid} = await twilio.verify.services(process.env.TWILIO_SERVICE_ID).verificationChecks.create({
		to: "+91" + mobile,
		code,
	});

    res.json({ to, status, valid });

  } catch (error) {
    console.log(error);
    next(error)
  }
});

// User registration after successfully mobile verification : POST

router.post("/register", async function (req, res, next) {
  try {
    var express = require("express");
	var router = express.Router();
	const config = require("../modules/mobileVerification");
	const twilio = require("twilio")(config.acountSID, config.authToken);
	const User = require("../models/User");

	//To send the OTP to user mobile : POST
	router.post("/mobile", function (req, res, next) {
		twilio.verify
			.services(config.serviceID)
			.verifications.create({
				to: `${req.body.mobile}`,
				channel: "sms",
			})
			.then((data) => {
				res.json({
					mobile: data.to,
					status: data.status,
				});
			});
	});

	//To verify the mobile OTP : POST
	router.post("/mobile/verify", function (req, res, next) {
		twilio.verify
			.services(config.serviceID)
			.verificationChecks.create({
				to: `${req.body.mobile}`,
				code: `${req.body.code}`,
			})
			.then((data) => {
				if (data.valid) {
					res.json({
						mobile: data.to,
						status: "Your mobile verification is successfully",
					});
				} else {
					res.json({
						mobile: data.to,
						status: "Not a valid OTP",
					});
				}
			});
	});

	//User registration after successfully mobile verification : POST

	router.post("/register", async function (req, res, next) {
		try {
			const registeredUser = await User.create(req.body.user);
			res.json({
				user: registeredUser,
			});
		} catch (error) {
			next(error);
		}
	});

	//User login
	router.post("/login", async function (req, res, next) {
		try {
			const { email, password } = req.body;
			const user = await User.find({ email: email });
			const passwordCheck = await user.verifyPassword(password);
			if (passwordCheck) {
				res.json({
					user: user,
				});
			} else {
				res.json({
					message: "invalid email or password",
				});
			}
		} catch (error) {
			next(error);
		}
	});

	module.exports = router;

		const registeredUser = await User.create(req.body.user);
		res.json({
			user: registeredUser,
		});
	} catch (error) {
		next(error);
	}
});

//User login
router.post("/login", async function (req, res, next) {
	try {
		const { email, password } = req.body;
		const user = await User.find({ email: email });
		const passwordCheck = await user.verifyPassword(password);
		if (passwordCheck) {
			res.json({
				user: user,
			});
		} else {
			res.json({
				message: "invalid email or password",
			});
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
