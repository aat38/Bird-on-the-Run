// -----------All of these routes begin with /api/------------
// Route handlers
const express = require("express");
const apirouter = express.Router();

//import data models
const Food = require("../models/food");
const Cart = require("../models/cart");


//----------routes to modify inventory------------------------
// RETREIVE all Food items and return as food_list
apirouter.get("/", function(req, res) {
  Food.find({}, function(err, food_list) {
    res.json(food_list);
  });
});

// RETRIEVE a specific item at the store
apirouter.get("/:item", function(req, res) {
  Food.findById(req.params.item, function(err, item) {
    res.json(item);
  });
});

//CREATE a new food item based on information in body
apirouter.post("/", function(req, res) {
  let food = new Food(req.body);
  food.save();
  res.status(201).send(food);
});

//UPDATE a food item based on information in body
apirouter.put("/:id", function(req, res) {
  Food.findById(req.params.id, function(err, food) {
    food.item = req.body.item;
    food.price = req.body.price;
    food.ingredients = req.body.ingredients; 
    food.save();
    res.json(food);
  });
});

//DELETE
apirouter.delete("/:id", function(req, res) {
  Food.find(req.params.id, function(err, food) {
    food.remove(function(err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send("removed");
      }
    });
  });
});

//-------------routes to modify cart--------------------------
//add an item to the cart
apirouter.post("/cart/", function(req, res) {
  let cart = new Cart(req.body);
  cart.save();
  console.log(req.body.item + " saved to cart")
  res.status(201).send(cart);
});

//delete an item from the cart
apirouter.delete("/cart/:item", function(req, res) {
  Cart.findOne({item: req.params.item}, function(err,item) {
    item.remove(function(err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send("removed");
      }
    });
  });
});
//retrieve all items from the cart 
apirouter.get("/cart/items", function(req, res) {
  Cart.find({}, function(err, cart_list) {
    res.json(cart_list);
  });
});

//delete entire cart
apirouter.delete("/cart/clear", function(req, res) {
 Cart.find({},function(err,cart) {
    cart.collection.remove(function(err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send("removed");
      }
    });
  });
});
module.exports = apirouter;