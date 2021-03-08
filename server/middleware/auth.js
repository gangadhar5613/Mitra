const jwt = require("../config/jwt");

module.exports = {
	verifyUserLoggedIn: async (req, res, next) => {
		try {
			const token = req.headers.authorization;
			const payload = await jwt.validateToken(token);
			req.userID = payload.userID;
			next();
		} catch (error) {
			console.log(error);
			next(error);
		}
	},
	currentLoggedUserInfo: async (req, res, next) => {
		try {
			const token = req.headers.authorization;
			if (token) {
				const payload = await jwt.validateToken(token);
				req.userID = payload.userID;
			}
			next();
		} catch (error) {
			console.log(error);
			next(error);
		}
	},
};
