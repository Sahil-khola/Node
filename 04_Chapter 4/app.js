// express server
const express = require("express");
const app = express();

// local Module
const data = require("./data.json");

//body parser
app.use(express.json());
app.use(express.urlencoded);

// API -------CRUD------>

app.get("/", (req, res) => {
    res.send("<a href='/products'>Products</a>");
})

// Create Post /products api-->
app.post("/products", (req, res) => {
   const newData  = (req.body);
   const product = data.products.push(newData)
   res.json(product);
});


//Read Get /products api-->
app.get("/products", (req, res) => {
  res.json(data.products);
});


//Read Get /products/:id api-->
app.get("/products/:id", (req, res) => {
  const id = +(req.params.id);
  const product = data.products.find((p) => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product not found");
  }
});


// update put /products/:id api-->
app.put("/products/:id", (req, res) => {
  const id = +(req.params.id);
 const productIndex = data.products.findIndex((p) => p.id === id);
 productIndex !== -1 && data.products.splice(productIndex, 1, req.body);
 res.json(data.products);
});


// update patch /products/:id api-->
app.patch("/products/:id", (req, res) => {
  const id = +(req.params.id);
 const productIndex = data.products.findIndex((p) => p.id === id);
 productIndex !== -1 && data.products.splice(productIndex, 1, req.body);
 res.json(data.products);
});


// delete /products/:id api-->
app.delete("/products/:id", (req, res) => {
const id = Number(req.params.id)
const  product = data.products.find(p=>p.id === id);
const delProduct =  data.products.splice(product,1);
res.json(delProduct);
});


// server start
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
