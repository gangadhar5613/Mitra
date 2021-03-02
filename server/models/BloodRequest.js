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
    medicalReports:[{type:String}],
    requiredBloodGroup:{type:String},
    deadline:{type:String},
    acceptedUser:{type:Schema.Types.ObjectId},
    updates:[{type:Schema.Types.ObjectId,ref:"Update"}],
    isRequstedFulfilled:{type:Boolean,default:false}
   
},{timestamps:true})

const BloodRequest = mongoose.model('BloodRequest',bloodRequestSchema)

module.exports = BloodRequest