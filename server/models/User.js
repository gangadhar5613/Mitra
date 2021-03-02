const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    fullname:{type:String,required:true,trim:true,minlength:6},
    email:{type:String,required:true,match:/@/},
    mobile:{type:Number,required:true},
    bloodgroup:{type:String,required:true},
    dateofbirth:{type:String,required:true},
    acceptedRequests:[{type:Schema.Types.ObjectId,ref:'BloodRequest'}],
    profileImage:{type:String},
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
    raisedRequests:[{type:Schema.Types.ObjectId,ref:"BloodRequest"}],
    isMailVerified:{type:Boolean,default:false},
    isProfileVerified:{type:Boolean,default:false},
    fundsDonated:[{type:Schema.Types.ObjectId,ref:'Donation'}],
    address:{type:String},
    local: {
        password: {
            type: String,
            minlength: 6,
            trim: true,
        },
    },
},{timestamps:true})



userSchema.pre('save', async function(){
    try {
        if (this.local.password) {
            this.local.password = await bcrypt.hash(this.local.password, 12);
        }
    } catch (error) {
        next(error);
    }
})

userSchema.methods.verifyPassword = async function (password) {
    return await bcrypt.compare(password, this.local.password);
}


const User = mongoose.model('User',userSchema)

module.exports = User