const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fundRaisingEventSchema = new Schema({
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
    requestedUser:{types:Schema.Types.ObjectId,ref:'User',required:true},
    requiredHospital:{type:String},
    medicalReports:[{type:String,required:true}],
    supporters:[{types:Schema.Types.ObjectId,ref:"User"}],
    amountRequired:{type:Number,required:true},
    amountRaised:{type:Number},
    description:{type:String},
    isEventFullFilled:{type:Boolean,default:false}
},{timestamps:true})

const FundRaisingEvent = mongoose.model('FundRaisingEvent',fundRaisingEventSchema)

module.exports = FundRaisingEvent