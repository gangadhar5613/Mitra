var express = require('express');
var router = express.Router();
const config = require('../modules/mobileVerification')
const twilio = require('twilio')(config.acountSID,config.authToken)
const { Client } = require('@googlemaps/google-maps-services-js');
const User = require('../models/User')

//To send the OTP to user mobile : POST
router.post('/mobile', function(req, res, next) {
    twilio.verify.services(config.serviceID).verifications.create({
        to:`${req.body.mobile}`,
        channel:"sms"
    }).then((data) => {
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
                status:"Your mobile verification is successfull"
            })
        }else{
            res.json({
                mobile:data.to,
                status:'Not a valid OTP'
            })
        }
    })
})


//To get the user location : POST

router.post('/location', async function(req,res,next){
    try {
        const client = new Client({});
        await client
             .reverseGeocode({
                 params: {
                     latlng: [req.body.location.lat, req.body.location.lng],
                     key: process.env.GOOGLE_API_KEY,
                 },
                 timeout: 1000,
             })
             .then( async (r) => {
                 res.json({
                     location:{
                         state:r.data.results[0].address_components[3].long_name,
                         district:r.data.results[0].address_components[2].long_name,
                         locality:r.data.results[0].address_components[1].long_name,
                         street:r.data.results[0].address_components[0].long_name,
                         country:r.data.results[0].address_components[4].long_name,
                         pincode:r.data.results[0].address_components[5].long_name,
                     }
                 })
             })
             .catch((e) => {
                 console.log(e);
             });
    } catch (error) {
        next(error)
    }

})


//User registration after successfull mobile verification : POST

router.post('/register', async function(req,res,next){

    try {
        const registeredUser = await User.create(req.body.user);
        res.json({
                user:registeredUser,
        })
    } catch (error) {
        next(error)
    }


})

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
