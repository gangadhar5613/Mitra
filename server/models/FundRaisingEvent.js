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
    eventRaisedBy:{types:Schema.Types.ObjectId,ref:'User',required:true},
    hospital:{
        address:{type:String,required:true},
        pincode:{type:String ,required:true},
        state:{type:String,required:true},
        city:{type:String,required:true},
        hospitalName:{type:String,required:true},
        hospitalContact:{type:Number,required:true}
    },
    medicalReports:[{type:String,required:true}],
    supporters:[{types:Schema.Types.ObjectId,ref:"User"}],
    amountRequired:{type:Number,required:true},
    amountRaised:{type:Number},
    description:{type:String,required:true,minlength:200,trim:true},
    isEventFullFilled:{type:Boolean,default:false},
    updates:[{type:Schema.Types.ObjectId,ref:"Update"}]
    
},{timestamps:true})

const FundRaisingEvent = mongoose.model('FundRaisingEvent',fundRaisingEventSchema)

module.exports = FundRaisingEvent