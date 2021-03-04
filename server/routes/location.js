const express = require("express");
const router = express.Router();
const axios = require("axios");

const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client({});

// GET /api/v1/location

router.get("/", async (req, res, next) => {
	try {
		const response = await client.reverseGeocode({
			params: {
				latlng: [req.body.location.lat, req.body.location.lng],
				key: process.env.GOOGLE_API_KEY,
			},
			timeout: 1000,
		});
		const { results } = response.data;
		res.json({
			address: {
				district: results[2].long_name,
				state: results[3].long_name,
				country: results[4].long_name,
				pinCode: results[5].long_name,
			},
		});
	} catch (error) {
		next(error);
	}
});

// GET Location Based on PINCODE

router.get("/pincode", async (req, res, next) => {
	try {
		var options = {
			method: "POST",
			url: "https://pincode.p.rapidapi.com/",
			headers: {
				"content-type": "application/json",
				"x-rapidapi-key": "f2dece19eamsh425942dea7dada4p114aaajsna64562343caa",
				"x-rapidapi-host": "pincode.p.rapidapi.com",
			},
			data: { searchBy: "pincode", value: req.body.location.pincode },
		};

		const response = await axios.request(options);
		const locations = await response.data;

		res.json(pincodeMap(locations));
	} catch (error) {
		next({
			message: "pincode not found",
			errorCode: "pincode",
		});
	}
});

function pincodeMap(locations) {
	const { pin, district, circle } = locations[0];
	const postOffices = locations.map((location) => location.office);

	return {
		pincode: pin,
		district,
		state: circle,
		postOffices,
		country: "India",
	};
}

module.exports = router;
