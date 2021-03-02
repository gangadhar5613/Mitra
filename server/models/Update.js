const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const updateSchema = new Schema({
    requestedUpdate:{type:String,required:true},
    requestedUser:{type:Schema.Types.ObjectId,ref:"User"},
    requestedEvent:{type:Schema.Types.ObjectId,ref:'BloodRequest'},

},{timestamps:true})

const Update = mongoose.model('Update',updateSchema);

module.exports = Update;