const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema(
	{
		firstName: { type: String, required: true, trim: true, minlength: 2 },
		lastName: { type: String, required: true, trim: true, minlength: 2 },
		middleName: { type: String, trim: true, minlength: 1 },
		email: { type: String, match: /@/, unique: true },
		mobile: { type: String, required: true, unique: true },
		bloodGroup: { type: String, required: true },
		dob: { type: String, required: true },
		sendedDonateRequest: [{ type: Schema.Types.ObjectId, ref: "BloodRequest" }],
		profileImage: { type: String, default: null },
		location: {
			state: {
				type: String,
				required: true,
				lowercase: true,
			},
			district: {
				type: String,
				required: true,
				lowercase: true,
			},
			postOffice: {
				type: String,
				required: true,
				lowercase: true,
			},
			lat: {
				type: Number,
				required: true,
			},
			lng: {
				type: Number,
				required: true,
			},
			address: {
				type: String,
				required: true,
				lowercase: true,
				minlength: 10,
			},
			pincode: {
				type: String,
				required: true,
				lowercase: true,
			},
		},
		donated: [{ type: Schema.Types.ObjectId, ref: "BloodRequest" }], // List Used Successful Donated
		raisedRequests: [{ type: Schema.Types.ObjectId, ref: "BloodRequest" }],
		isVerified: { type: Boolean, default: false, required: true },
		isProfileVerified: { type: Boolean, default: false },
		fundsDonated: [{ type: Schema.Types.ObjectId, ref: "Donation" }],
		medicalReport: { type: String, required: true },
		local: {
			password: {
				type: String,
				minlength: 6,
				trim: true,
				required: true,
			},
		},
		lastDonated: { type: String, default: null },
		accountType: { type: String, required: true, default: "user" },
		currentlyDonating: { type: Schema.Types.ObjectId, ref: "BloodRequest", default: null },
	},
	{ timestamps: true }
);

userSchema.pre("save", async function (next) {
	console.log(this);
	try {
		if (this.local.password) {
			this.local.password = await bcrypt.hash(this.local.password, 12);
		}
	} catch (error) {
		next(error);
	}
});

userSchema.methods.verifyPassword = async function (password) {
  console.log(password, this.local.password)
	return await bcrypt.compare(password, this.local.password);
};


const User = mongoose.model('User',userSchema)

module.exports = User