// Route handlers
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//import data models
const Food = require("../models/food");
const Cart = require("../models/cart");


// -----------All of these routes begin with /------------

// retrieve all menu items
router.get("/", function(req, res) {
  Food.find({}, function(err, food_list) {
      Cart.find({}, function(err, cart_list) {
//     var query = Food.find({}).select('item -_id');
//     query.exec(function (err, food_names) {
        if (err) return (err);
        res.render("index", { food: food_list,
                             cart: cart_list });
      });   
   });
});

//render checkout page and cart items
router.get("/checkout", function(req, res) {
   Cart.find({}, function(err, cart_list) {
     if (err) return (err);
        res.render("cart", { cart: cart_list });
    });   
 });

//render completedOrder page and clear cart 
router.get("/completeOrder", function(req, res) {
  mongoose.connection.collections['carts'].drop() 
  console.log('collection no longer needed after ordering-dropped');
        res.render("complete");
});

//delete entire cart
router.get("/delete", function(req, res) {
mongoose.connection.collections['carts'].drop() 
    console.log('collection dropped');
    //getting stuck on return fuction - the call is just out in space and necver coming back- so deleted the callback function
});

  
module.exports = router;
