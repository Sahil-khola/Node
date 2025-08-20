const product = require("../model/product");


// Create--->
const createProduct = (req, res) => {
  const newProduct = new product(req.body);

  newProduct.save()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

//Read all ---->
const allProduct = async (req, res) => {
const products =   await product.find();
res.json(products)
}


module.exports = {
  allProduct,
  createProduct,
};






