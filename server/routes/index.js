var express = require('express');
var router = express.Router();
const User = require("../models/User");
const BloodRequest = require("../models/BloodRequest");

// GET /api/v1/blood/feed - GET latest feed

router.get("/feed", async (req, res, next) => {
	const { limit, offset, state, city } = req.query;
	try {
		const bloodRequests = await BloodRequest.find({})
			.sort({ createdAt: "desc" })
			.skip(offset || 0)
			.limit(limit || 10);
		res.json({ requested: bloodRequests });
	} catch (error) {
		console.log(error);
		next(error);
	}
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({title: "Mitra"})
});

module.exports = router;
