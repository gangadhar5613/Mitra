const jwt = require("jsonwebtoken");

module.exports = {
	generateToken: async (payload) => {
		try {
			const token = await jwt.sign(payload, process.env.SECRET_KEY);
			return token;
		} catch (error) {
			console.error(error);
		}
	},
	validateToken: async (token) => {
		try {
			const payload = await jwt.verify(token, process.env.SECRET_KEY);
			return payload;
		} catch (error) {
			console.error(error);
		}
	},
};
