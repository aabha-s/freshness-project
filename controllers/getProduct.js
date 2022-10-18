const productsSchema = require("../models/products");

exports.getProducts = async (req, res) => {
  const allproducts = await productsSchema.find({});
  try {
    res.send(allproducts);
  } catch (error) {
    response.status(500).send(error);
  }
};
