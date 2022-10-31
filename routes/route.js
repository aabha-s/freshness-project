const express = require("express");
const addController = require("../controllers/addproduct");
const getController = require("../controllers/getProduct");
const updateController = require("../controllers/updateProduct");
const deleteController = require("../controllers/deleteProduct");
const productController = require("../controllers/product");
const cloudinary = require("../cloudinary");
const uploader = require("../multer");

const multer = require("multer");
const path = require("path");
const router = express.Router();

const storage = multer.diskStorage({
  destination: "./upload.images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

router.post(
  "/add_product",
  upload.single("p_image"),
  addController.addProducts
);
router.get("/products", getController.getProducts);
router.get("/product/:id", productController.particularProduct);
router.patch("/update-product/:id", updateController.updateProduct);
router.delete("/delete-product/:id", deleteController.deleteProduct);
router.post("/upload", upload.single("profile"), (req, res) => {
  console.log(req.file);
});

router.post("/uploadimg", uploader.single("file"), async (req, res) => {
  const upload = await cloudinary.v2.uploader.upload(req.file.path);
  return res.json({
    success: true,
    file: upload.secure_url,
  });
});

// process.on("unhandledRejection", (err) => {
//   throw err;
// });

module.exports = router;
