const multer = require("multer");

var maxSize = 200 * 1024 * 1024;
module.exports = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: maxSize },
});