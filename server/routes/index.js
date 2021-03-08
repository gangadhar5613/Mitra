var express = require("express");
var router = express.Router();

/* GET / */
router.get("/", function (req, res, next) {
  console.log("hey");
  res.json({ title: "Mitra" });
});

module.exports = router;
