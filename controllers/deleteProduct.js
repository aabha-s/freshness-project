const productsSchema = require("../models/products");
exports.deleteProduct = async (req, res) => {
  productsSchema.findByIdAndDelete(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log("Product deleted successfully!");
      }
    }
  );
};
