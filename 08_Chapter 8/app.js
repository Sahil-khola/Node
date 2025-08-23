const express = require("express");
const app = express();
const router = require("./router/home")

//Db connection
const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost:27017/ecommerce")
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB error"));
app.use(router);



app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});