const express = require("express");
const router = express.Router();

router.get("/products", (req, res) => {
  res.send("This is a products page");
});

module.exports = router;
