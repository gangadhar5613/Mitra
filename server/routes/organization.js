const express = require("express");
const router = express.Router();
const Organization = require("../models/Organization");

/* GET / */
router.get("/", (req, res, next) => {
  console.log(req.body)
  res.json({organization: "organization"})
})

// POST /api/v1/org/register

router.post("/register", async (req, res, next) => {
  try {
    const organization = await Organization.create({ ...req.body.organization });
    res.json({organization})
  } catch (error) {
    next(error)
  }
})

module.exports = router;