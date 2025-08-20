const product = require("../model/product");

// Create--->
const createProduct = (req, res) => {
  const newProduct = new product(req.body);
  newProduct.save()
  };



//Read all ---->
const allProduct = async (req, res) => {
  const products = await product.find();
  res.json(products);
};


// Read One ---->
const oneProduct = async (req, res) => {
  const id = req.params.id;
  const products = await product.findById(id);
  res.json(products);
};

// Update---->
const replaceProduct = async (req, res) => {
  try {
    const id = req.params.id;

    if (req.body._id) {
      delete req.body._id;
    }
    const updatedProduct = await product.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// replace---->
const updatedProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedProduct = await product.findOneAndUpdate({ _id: id }, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteProduct = async (req,res)=>{
const id = req.params.id;
const deletedProduct = await product.findByIdAndDelete(id);
if (!deletedProduct) {
  return res.status(404).json({ message: "Product not found" });
}
res.json(deletedProduct);
}

module.exports = {
  allProduct,
  createProduct,
  oneProduct,
  replaceProduct,
  updatedProduct,
  deleteProduct
};
