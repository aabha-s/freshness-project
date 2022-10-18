const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  p_title: {
    type: String,
  },
  p_image: {
    type: String,
  },
  p_description: {
    type: String,
  },
  p_rating: {
    type: Number,
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
    type: String,
  },
  p_price: {
    type: Number,
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
