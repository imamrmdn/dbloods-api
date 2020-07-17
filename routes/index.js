// @ts-ignore
const express = require("express");
const router = express.Router();

// @ts-ignore
router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
