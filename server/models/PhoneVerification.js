const mongoose = require("mongoose");
const { Schema } = mongoose;

const phoneVerificationSchema = new Schema({
	mobile: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
	sid: {
		type: String,
		required: true,
	},
	valid: {
		type: Boolean,
		required: true,
	},
});

module.exports = mongoose.model("Verification", phoneVerificationSchema);
