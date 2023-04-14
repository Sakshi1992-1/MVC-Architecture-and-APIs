const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

app.use(express.Router());
app.use(express.json());

const e = require("express");
mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/Batch7",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
console.log("Connection succsefull");

const router = require("./routes/route");
app.use("/auth", router);
app.use("/products", router);

app.listen("2000", () => {
  console.log("server running successfully on 2000");
});
