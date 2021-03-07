var express = require('express');
require('dotenv').config()
var router = express.Router();
const config = require('../modules/mobileVerification')
const twilio = require("twilio")(config.acountSID, config.authToken);
const User = require('../models/User')

//To send the OTP to user mobile : POST
router.post('/mobile', function(req, res, next) {
    console.log('hello')
    twilio.verify.services(config.serviceID).verifications.create({
        to:`+91${req.body.mobile}`,
        channel:"sms"
    }).then((data) => {
        console.log(data)
        res.json({
            mobile:data.to,
            status:data.status
        })
    })
});

//To verify the mobile OTP : POST
router.post('/mobile/verify',function(req,res,next){
    twilio.verify.services(config.serviceID).verificationChecks.create({
        to:`${req.body.mobile}`,
        code:`${req.body.code}`
    }).then((data) => {
        if(data.valid){
            res.json({
                mobile:data.to,
                verified:true,
                status:"Your mobile verification is successfull"
            })
        }else{
            res.json({
                mobile:data.to,
                verified:false,
                status:'Not a valid OTP'
            })
        }
    })
})

//User registration after successfull mobile verification : POST

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
router.post('/login',async function(req,res,next){
    try {
        const { email, password } = req.body
        const user = await User.find({email:email})
        const passwordCheck = await user.verifyPassword(password);
        if (passwordCheck) {
           res.json({
                user:user
           })
        } else {
          res.json({
              message:"invalid email or password"
          })
        }
    } catch (error) {
        next(error)
    }
})


module.exports = router;
