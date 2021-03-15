const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bloodRequestedFeedSchema = new Schema({
	message: { type: String, required: true, minlength: 10 },
	medicalReports: [{ type: String, required: true }],
});

const BloodRequestFeed = mongoose.model("BloodRequestFeed", bloodRequestedFeedSchema);
module.exports = BloodRequestFeed;
