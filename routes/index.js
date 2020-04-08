// -----------All of these routes begin with /store/------------
// Route handlers
const express = require("express");
const router = express.Router();

//import data models
const Food = require("../models/food");

// RETREIVE all books
router.get("/", function(req, res) {
  Food.find({}, function(err, food_list) {
    console.log(food_list)
    res.render("index", { food: food_list });
  });

});

module.exports = router;
