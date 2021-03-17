const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema(
	{
		donatedAmount: { type: Number, required: true },
		donatedUser: { type: String, ref: "User", required: true },
		donatedMode: {
			platform: { type: String, required: true },
			referenceNumber: { type: String, required: true },
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Donation", donationSchema);
