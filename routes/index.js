// -----------All of these routes begin with /store/------------
// Route handlers
const express = require("express");
const router = express.Router();
// const http = require("http");
const axios = require("axios");

//import data models
const Book = require("../models/book");

// RETREIVE all books
router.get("/", function(req, res) {
  Book.find({}, function(err, book_list) {
    res.render("index", { books: book_list });
  });


});

module.exports = router;
