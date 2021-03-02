const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bloodRequestSchema = new Schema({
    requestedUser:{type:Schema.Types.ObjectId,ref:'User',required:true},
    title:{type:String,required:true},
    location: {
        state: {
            type: String,
        },
        city: {
            type: String,
        },
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        },
        address: {
            type: String,
        }
    },
    images:[{type:String}],
    medicalReports:[{type:String,required:true}],
    requestedFor:{
        bloodGroup:{type:String,required:true},
        requestedType:{type:String,required:true}
    },
    deadline:{type:String},
    acceptedDonor:[{type:Schema.Types.ObjectId,ref:"User"}],
    updates:[{type:Schema.Types.ObjectId,ref:"Update"}],
    isRequstedFulfilled:{type:Boolean,default:false},
    reopenRequests:[{
        reason:{type:String},
        medicalReports:{type:String}
    }]
   
},{timestamps:true})

const BloodRequest = mongoose.model('BloodRequest',bloodRequestSchema)

module.exports = BloodRequest