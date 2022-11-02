const productsSchema = require("../models/products");
const cloudinary = require("../cloudinary");

exports.addProducts = async (request, response) => {
  if (request.file) {
    await cloudinary.v2.uploader
      .upload(request.file.path)
      .then((result) => {
        saveProduct(request, response, result.url);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    saveProduct(request, response);
  }
};

function saveProduct(request, response, p_image) {
  const products = new productsSchema();
  products.p_title = request.body.p_title;
  products.p_image = p_image ? p_image : "";
  products.p_description = request.body.p_description;
  products.p_category = request.body.p_category;
  products.p_rating = request.body.p_rating;
  products.freshness = request.body.freshness;
  products.farm = request.body.farm;
  products.delivery = request.body.delivery;
  products.stock = request.body.stock;
  products.p_price = request.body.p_price;
  products
    .save()
    .then((result) => {
      return response.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      return response
        .status(500)
        .json({ message: "Something Went Wrong!" });
    });
}
