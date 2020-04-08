// -----------All of these routes begin with /api/------------
// Route handlers
const express = require("express");
const apirouter = express.Router();

//import data models
const Food = require("../models/food");

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
apirouter.put("/:item", function(req, res) {
  Food.findById(req.params.item, function(err, food) {
    food.item = req.body.item;
    food.price = req.body.price;
    food.ingredients = req.body.ingredients; 
    food.save();
    res.json(food);
  });
});

//DELETE
apirouter.delete("/:item", function(req, res) {
  Food.find(req.params.item, function(err, food) {
    food.remove(function(err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send("removed");
      }
    });
  });
});
module.exports = apirouter;