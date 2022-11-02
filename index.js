const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/route");
require("dotenv").config();
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(router);
const port = process.env.PORT || 4000;
// ATLAS_URL =
//   "mongodb+srv://aabha:<password>@cluster0.lra7kvj.mongodb.net/?retryWrites=true&w=majority";
const url =
  "mongodb+srv://aabha:Atlas00000@cluster0.lra7kvj.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
// connection.on("error", console.error.bind(console, "connection error: "));
connection.once("open", function () {
  console.log("Connected successfully");
});

app.get("/", (req, res) => {
  res.send(`Hi Welcome to the product API`);
});

app.listen(port, () => {
  console.log("Server is running at port 4000");
});
