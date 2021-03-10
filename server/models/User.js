const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema(
	{
		firstName: { type: String, required: true, trim: true, minlength: 2 },
		lastName: { type: String, required: true, trim: true, minlength: 2 },
		middleName: { type: String, trim: true, minlength: 2 },
		email: { type: String, match: /@/ },
		mobile: { type: String, required: true, unique: true },
		bloodGroup: { type: String, required: true },
		dob: { type: String, required: true },
		requestAccepted: [{ type: Schema.Types.ObjectId, ref: "BloodRequest" }],
		profileImage: { type: String, default: null },
		location: {
			state: {
				type: String,
				required: true,
				lowercase: true,
			},
			city: {
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
		lastDonated: { type: String },
		accountType: { type: String, required: true, default: "user" },
	},
	{ timestamps: true }
);



userSchema.pre("save", async (next) => {
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