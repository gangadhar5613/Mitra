const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bloodRequestSchema = new Schema(
	{
		requestedBy: {
			user: {
				type: Schema.Types.ObjectId,
				ref: "User",
			},
			organization: {
				type: Schema.Types.ObjectId,
				ref: "Organization",
			},
		},
		title: { type: String, required: true },
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
		images: [{ type: String }],
		requestedFor: {
			bloodGroup: { type: String, required: true },
			requestedType: { type: String, required: true },
		},
		deadline: { type: String },
		donors: [{ type: Schema.Types.ObjectId, ref: "User" }],
		fulfilledDonor: [{ type: Schema.Types.ObjectId, ref: "User" }], // List all successful Donor
		updates: [{ type: Schema.Types.ObjectId, ref: "Update" }],
		isRequestedFulfilled: { type: Boolean, default: false },
		feed: [
			{
				message: { type: String, required: true, minlength: 10 },
				medicalReports: [{ type: String }],
			},
		],
		status: { type: String, required: true, default: "OPEN" },
		currentDonor: {   type: Schema.Types.ObjectId, ref: "User", default: null   }, // DONOR is accepted
	},
	{ timestamps: true }
);

const BloodRequest = mongoose.model('BloodRequest',bloodRequestSchema)

module.exports = BloodRequest