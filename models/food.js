// Data Model for Store
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodSchema = new Schema(
  {
    item : String,
    price : Number
  }
);

// Export model
module.exports = mongoose.model("food", FoodSchema);