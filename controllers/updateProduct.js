const productsSchema = require("../models/products");

exports.updateProduct = async (req, res, next) => {
  productsSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log("Product updated successfully!");
      }
    }
  );
};
