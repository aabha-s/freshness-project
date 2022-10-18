const productsSchema = require("../models/products");
exports.particularProduct = async (req, res) => {
  productsSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      console.log("This is Product!");
    }
  });
};
