const express = require("express");
const router = express.Router();
const User = require("../models/User");
const BloodRequest = require("../models/BloodRequest");

// POST /api/v1/blood/create - Creating New Blood Request

router.post("/create", async (req, res, next) => {
	const { userID } = req;
	const { title, location, feed, images, requestedFor } = req.body.blood;
	try {
		const bloodRequest = await BloodRequest.create({ title, location, images, requestedFor });
		bloodRequest.feed.push(feed);
		await bloodRequest.save();
		const user = await User.findByIdAndUpdate(userID, { $push: { raisedRequests: bloodRequest.id } });
		res.json(bloodRequest);
	} catch (error) {
		console.log(error);
		next(error);
	}
});

// POST /api/v1/blood/:id/donate

router.post("/:id/donate", async (req, res, next) => {
	const { id } = req.params;
	const { userID } = req;
	try {
		const bloodRequest = await BloodRequest.findOne({ _id: id });
		if (!bloodRequest) throw new Error("val-04"); // invalid blood request
		console.log(id, userID);

		const user = await User.findOne({ _id: userID });
		if (!user) throw new Error("val-03"); // User not found

		const updateUser = await User.findByIdAndUpdate(userID, { $addToSet: { requestAccepted: id } });

		bloodRequest.donor.addToSet(userID);
		bloodRequest.save();
		res.send(bloodRequest);
	} catch (error) {
		console.log(error);
		next(error);
	}
});

// PUT /api/v1/blood/:id/update - To update images & feed

function bloodRequest() {}

module.exports = router;
