const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  p_title: {
    type: String,
  },
  p_image: {
    type: String,
  },
  p_category: {
    type: String,
  },
  p_description: {
    type: String,
  },
  p_rating: {
    type: Number,
    min: [1, "Rating cannot be below 1"],
    max: [5, "Rating cannot be above 5"],
  },
  freshness: {
    type: String,
  },
  farm: {
    type: String,
  },
  delivery: {
    type: String,
  },
  stock: {
    type: Number,
  },
  p_price: {
    type: Number,
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
