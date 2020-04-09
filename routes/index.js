// -----------All of these routes begin with /store/------------
// Route handlers
const express = require("express");
const router = express.Router();

//import data models
const Food = require("../models/food");
const Cart = require("../models/cart");

// RETREIVE all items
router.get("/", function(req, res) {
  Food.find({}, function(err, food_list) {
      Cart.find({}, function(err, cart_list) {

    // console.log(food_list)
    // res.render("index", { food: food_list });
    
//     var query = Food.find({}).select('item -_id');

//     query.exec(function (err, food_names) {
        if (err) return (err);
        res.render("index", { food: food_list,
                             cart: cart_list                      
                            });
      });   
 });
});

router.get("/", function(req, res) {
  Food.find({}, function(err, food_list) {
      Cart.find({}, function(err, cart_list) {

    // console.log(food_list)
    // res.render("index", { food: food_list });
    
//     var query = Food.find({}).select('item -_id');

//     query.exec(function (err, food_names) {
        if (err) return (err);
        res.render("index", { food: food_list,
                             cart: cart_list                      
                            });
      });   
 });
});
module.exports = router;
