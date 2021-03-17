const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const updateSchema = new Schema(
	{
		requestedUpdate: { type: String, required: true },
		requestedUser: { type: Schema.Types.ObjectId, ref: "User" },
		event: { type: Schema.Types.ObjectId, ref: "BloodRequest" }, //have to give multiples reference BloodRequest & FundRaising Event
	},
	{ timestamps: true }
);

const Update = mongoose.model('Update',updateSchema);

module.exports = Update;