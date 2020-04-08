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

//CREATE a new store item based on information in body
apirouter.post("/", function(req, res) {
  let food = new Food(req.body);
  food.save();
  res.status(201).send(food);
});

//UPDATE
apirouter.put("/:item", function(req, res) {
  Food.findById(req.params.bookId, function(err, book) {
    book.title = req.body.title;
    book.author = req.body.author;
    book.link = req.body.link; /////////modification////////////
    console.log(book.link);
    book.save();
    res.json(book);
  });
});

//DELETE
apirouter.delete("/:bookId", function(req, res) {
  Book.findById(req.params.bookId, function(err, book) {
    book.remove(function(err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send("removed");
      }
    });
  });
});
module.exports = router;