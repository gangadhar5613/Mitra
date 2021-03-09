var AWS = require("aws-sdk");
var s3 = require("aws-sdk/clients/s3");

module.export = {
	upload: function () {
		s3.upload(
			{
				CannedACL: "READ",
				Bucket: "arn:aws:s3:::blood-app",
				Key: "key",
				Body: stream,
			},
			function (err, data) {
				console.log(err, data);
			}
		);
	},
};
