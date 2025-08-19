const { configDotenv } = require("dotenv");
const express = require("express");
require("dotenv").config();
const app = express();



app.use(express.static(process.env.PUBLIC_DIR));
app.get("/",(req,res)=>{
// res.send("Sahil  Khola ");

// res.render("index.html");
})

app.listen(process.env.PORT, () => {
    console.log("Server is running on http://localhost:3000");
    
});
