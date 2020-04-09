// -----------All of these routes begin with /store/------------
// Route handlers
const express = require("express");
const router = express.Router();

//import data models
const Food = require("../models/food");

// RETREIVE all books
router.get("/", function(req, res) {
  Food.find({}, function(err, food_list) {
    // console.log(food_list)
    // res.render("index", { food: food_list });
    
    var query = Food.find({}).select('item -_id');

    query.exec(function (err, food_names) {
        if (err) return (err);
        res.render("index", { food: (food_names) });
        // res.send(food_names);
    });  
    
  });

});

router.get('/getFriends', function(req, res) {
  Food.find({}).select('item -_id');

  query.exec(function(err, food_names)) {
    var friends = food_names.map(function(v) {
      delete(v._id);
      delete(v.status);
      return v;
    });
    res.json(friends);
  }) 
})

module.exports = router;
