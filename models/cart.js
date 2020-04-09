// Data Model for Store
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    item : String,
    price : Number, 
    ingredients: [String],
    incart: Boolean
  }
);

// Export model
module.exports = mongoose.model("cart", CartSchema);