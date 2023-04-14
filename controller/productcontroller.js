const productService = require("./productservice");
const productSchema = require("../Models/products");
const { json } = require("body-parser");

var addproduct = async (req, res) => {
  try {
    console.log(req.body);
    var status = await productService.addproductDBService(req.body);
    console.log(status);

    if (status) {
      res.send({ status: true, message: "Product added successfully" });
    } else {
      res.send({ status: false, message: "Error in adding product" });
    }
  } catch (err) {
    console.log(err);
  }
};

var showproduct = async (req, res) => {
  let product_details = await res.send(productSchema);
  let result = product_details.json();
  console.log(result);
};

module.exports = { addproduct, showproduct };
