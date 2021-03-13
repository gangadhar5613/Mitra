const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

module.exports = {
	uploader: async (uploadParams) => {
		const REGION = "ap-south-1";
		const s3 = new S3Client({ region: REGION, credentials: { accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY } });
		try {
			const data = await s3.send(new PutObjectCommand({ ACL: "public-read", ...uploadParams }));
			return true;
		} catch (err) {
			console.log(err);
			return false;
		}
	},
};