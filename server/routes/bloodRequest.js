const express = require("express");
const router = express.Router();
const User = require("../models/User");
const BloodRequest = require("../models/BloodRequest");
const BloodRequestFeed = require("../models/BloodRequestFeed");
var s3 = require("../config/s3uploader");
const { v4: uuidv4 } = require("uuid");

// POST /api/v1/blood/create - Creating New Blood Request

router.post("/create", async (req, res, next) => {
	const { userID } = req;
	const { title, location, images, requestedFor, feed } = req.body.blood;
	const imagesArr = [];
	const medicalReportsArr = [];

	try {
		const isRequestedTypeIsValid = ["Whole Blood", "Platelets", "AB Plasma", "Double Red Cell", "Cord Blood"].includes(requestedFor?.requestedType);
		if (!isRequestedTypeIsValid) throw new Error("invalid-06"); // invalid data passed
		const isRequestedBloodGroupIsValid = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "OH+"].includes(requestedFor?.bloodGroup);
		if (!isRequestedTypeIsValid) throw new Error("invalid-06"); // invalid data passed

		console.log(images, feed);
		if (images.length > 0) {
			for (const image of images) {
				if (["png", "jpg", "jpeg", "webp"].includes(image.type)) {
					const fileName = `${uuidv4()}.${image.type}`;
					const uploadParams = {
						Bucket: "blood-app",
						Key: fileName,
						Body: new Uint8Array(image.data),
					};

					const uploadStatus = await s3.uploader(uploadParams);
					if (!uploadStatus) throw new Error("failed-01"); // Error on uploading
					imagesArr.push(`https://blood-app.s3.ap-south-1.amazonaws.com/${fileName}`);
				}
			}
		}

		if (feed.medicalReports.length > 0) {
			for (const image of feed.medicalReports) {
				if (["png", "jpg", "jpeg", "webp"].includes(image.type)) {
					const fileName = `${uuidv4()}.${image.type}`;
					const uploadParams = {
						Bucket: "blood-app",
						Key: fileName,
						Body: new Uint8Array(image.data),
					};

					const uploadStatus = await s3.uploader(uploadParams);
					if (!uploadStatus) throw new Error("failed-01"); // Error on uploading
					medicalReportsArr.push(`https://blood-app.s3.ap-south-1.amazonaws.com/${fileName}`);
				}
			}
		}

		const bloodFeed = await BloodRequestFeed.create({ message: feed.message, medicalReports: medicalReportsArr });
		const bloodRequest = await BloodRequest.create({ title, location, images: imagesArr, requestedFor, status: "OPEN", feed: [bloodFeed.id] });
		const user = await User.findByIdAndUpdate(userID, { $push: { raisedRequests: bloodRequest.id } }, { useFindAndModify: true, new: true });
		res.json({ request: bloodRequest });
	} catch (error) {
		console.log(error);
		next(error);
	}
});

// POST /api/v1/blood/:id/donate - User Making Request for Donating

router.post("/:id/donate", async (req, res, next) => {
	const { id } = req.params;
	const { userID } = req;
	try {
		const bloodRequest = await BloodRequest.findOne({ _id: id });
		if (!bloodRequest) throw new Error("val-04"); // invalid blood request
		console.log(id, userID);

		const user = await User.findById(userID);
		if (!user) throw new Error("val-03"); // User not found

		const updateUser = await User.findByIdAndUpdate(userID, { $addToSet: { sendedDonateRequest: id } });

		bloodRequest.donors.addToSet(userID);
		bloodRequest.save();
		res.send(bloodRequest);
	} catch (error) {
		console.log(error);
		next(error);
	}
});

// POST /api/v1/blood/:bloodID/user/:donorID/partially - Accepting User As Donor (status: partially (not fulfilled))

router.post("/:bloodID/user/:donorID/partially", async (req, res, next) => {
	const { userID } = req;
	const { bloodID, donorID } = req.params;
	try {
		const bloodRequest = await BloodRequest.findById(bloodID);
		if (!bloodRequest) throw new Error("val-04"); // invalid blood request
		const owner = await User.findById(userID);
		const isOwnerOfBloodRequest = owner.raisedRequests.includes(bloodRequest.id);
		if(!isOwnerOfBloodRequest) throw new Error("val-04") // user not have permission
		if (bloodRequest.status !== "OPEN" || bloodRequest.currentDonor !== null) throw new Error("invalid-04"); // donor already in progress
		const donor = await User.findById(donorID);
		if (!donor) throw new Error("val-04"); // invalid blood request
		if (donor.currentlyDonating) throw new Error("invalid-05"); // user is donating you can make request to this user
		const updateBloodRequest = await BloodRequest.findByIdAndUpdate(bloodID, { status: "NOT FULFILLED", currentDonor: donorID }, {new: true, useFindAndModify: true});
		const updateDonor = await User.findByIdAndUpdate(donorID, { currentlyDonating: bloodID, $pull: { sendedDonateRequest: bloodID } });
		res.send(updateBloodRequest);
	} catch (error) {
		console.log(error);
		next(error);
	}
});

// POST /api/v1/blood/:bloodID/user/:donorID/fulfilled - The request is fulfilled by donor

router.post("/:bloodID/user/:donorID/fulfilled", async (req, res, next) => {
	const { userID } = req;
	const { bloodID, donorID } = req.params;
	try {
		const bloodRequest = await BloodRequest.findById(bloodID);
		if (!bloodRequest) throw new Error("val-04"); // invalid blood request
		const owner = await User.findById(userID);
		const isOwnerOfBloodRequest = owner.raisedRequests.includes(bloodRequest.id);
		if (!isOwnerOfBloodRequest) throw new Error("val-04"); // user not have permission
		if (bloodRequest.status !== "NOT FULFILLED") throw new Error("invalid-04"); // blood request status is not valid and donor is not available
		const donor = await User.findById(donorID);
		if (!donor) throw new Error("val-04"); // invalid blood request
		const updateBloodRequest = await BloodRequest.findByIdAndUpdate(bloodID, { status: null, $push: { fulfilledDonor: donorID }, currentDonor: null, donors: [] }, { new: true, useFindAndModify: true });
		const updateDonor = await User.findByIdAndUpdate(donorID, { currentlyDonating: null, $push: { donated: bloodID }, lastDonated: new Date().toISOString() }, { new: true, useFindAndModify: true });
		res.send(updateBloodRequest);
	} catch (error) {
		console.log(error);
		next(error);
	}
});

// PUT /api/v1/blood/:id/update/feed - To update images & feed of particular request

router.put("/:bloodID/update/feed", async (req, res, next) => {
	const { userID } = req;
	const { bloodID } = req.params;
	const { feed, images } = req.body;
	try {
		const bloodRequest = await BloodRequest.findById(bloodID);
		if (!bloodRequest) throw new Error("val-04"); // invalid blood request
		const owner = await User.findById(userID);
		const isOwnerOfBloodRequest = owner.raisedRequests.includes(bloodRequest.id);
		if (!isOwnerOfBloodRequest) throw new Error("val-04"); // user not have permission
		const updateBloodRequest = await BloodRequest.findByIdAndUpdate(bloodID, { $push: { feed } }, { new: true, useFindAndModify: true });
		res.send(updateBloodRequest);
	} catch (error) {
		console.log(error);
		next(error);
	}
})

function bloodRequest() {}

module.exports = router;
