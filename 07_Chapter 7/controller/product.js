const data = require("../data.json").products;

const allProduct = (req, res) => {
  res.json(data);
}

const oneProduct = (req, res) => {
  const id = Number(req.params.id)
  const product = data.find(p=>p.id === id);
  res.json(product);
}

const sendData =  (req, res) => {
  const newData  = (req.body);
  const product = data.push(newData)
  res.json(product);
}

const updateData =  (req, res) => {
  const id = Number(req.params.id)
  const newData  = (req.body);
  const product = data.find(p=>p.id === id);
  Object.assign(product,newData);
  res.json(product);
}

const deleteProduct = (req, res) => {
  const id = Number(req.params.id)
  const  product = data.find(p=>p.id === id);
  const delProduct =  data.splice(product,1);
  res.json(delProduct);
}

module.exports = {
  allProduct,
  oneProduct,
  sendData,
  updateData,
  deleteProduct
}