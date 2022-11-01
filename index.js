const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/route");
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(router);
const port = process.env.PORT || 4000;
mongoose.connect("mongodb://0.0.0.0:27017/productdb", {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.get("/", (req, res) => {
  res.send(`Hi Welcome to the product API`);
});

app.listen(port, () => {
  console.log("Server is running at port 4000");
});
