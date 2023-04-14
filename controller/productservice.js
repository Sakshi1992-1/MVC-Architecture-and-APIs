const productModel = require("../Models/products");

module.exports.show;

module.exports.addproductDBService = async (productDetails) => {
  try {
    const productData = new productModel();
    productData.id = productDetails.id;
    productData.name = productDetails.name;
    productData.total_qualnity = productDetails.total_qualnity;
    productData.category = productDetails.category;
    productData.price = productDetails.price;
    const result = await productData.save();
    console.log(result);
    return true;
  } catch (error) {
    return false;
  }
};
