const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
    organizationName:{type:String,required:true},
    email:{type:String,required:true},
    mobile:{type:Number,required},
    address:{type:String,required:true},
    registeredDocument:{type:String,required:true},
    isOrganizatonVerified:{type:Boolean,default:false},
    fundRaisingEvents:[{type:Schema.Types.ObjectId,ref:'FundRaisingEvent'}],
    volunteers:[{type:Schema.Types.ObjectId,ref:'User'}],
    bloodRequestsRaised:[{type:Schema.Types.ObjectId,ref:'BloodRequest'}],
    organizationLogo:{type:String},
    pincode:{type:String},
    city:{type:String},
    state:{type:String}
    

},{timestamps:true})


const Organization = mongoose.model('Organization',organizationSchema)

module.exports = Organization