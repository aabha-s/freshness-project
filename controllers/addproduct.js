const productsSchema = require("../models/products");

exports.addProducts = async (req, res) => {
  productsSchema
    .create({
      p_title: req.body.p_title,
      p_image: "",
      p_description: req.body.p_description,
      p_rating: req.body.p_rating,
      freshness: req.body.freshness,
      farm: req.body.farm,
      delivery: req.body.delivery,
      stock: req.body.stock,
      p_price: req.body.p_price,
    })
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
};
