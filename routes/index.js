// -----------All of these routes begin with /store/------------
// Route handlers
const express = require("express");
const router = express.Router();
const server = require

//import data models
const Food = require("../models/food");
const Cart = require("../models/cart");

// RETREIVE all items
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

router.get("/checkout", function(req, res) {
   Cart.find({}, function(err, cart_list) {
     if (err) return (err);
        res.render("cart", { cart: cart_list });
    });   
 });

//delete entire cart
router.delete("/delete", function(req, res) {
  Cart.remove({}, function(err,removed) {

});

  
  
// //   router.get('/obj/:id',  function(req, res) {
// // var id = req.params.id;

// Cart.find({incart: req.params.delete}, function (err, result) {
//     result.remove(function(err) {
//       if (err) {

//       } else {
// res.render("index", { cart: result });      }
//     });
//   });
});

module.exports = router;
