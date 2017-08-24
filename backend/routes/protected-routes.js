var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  console.log(req.user);
  res.send("You have accessed a protected route!");
});

module.exports = router;
