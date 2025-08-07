const express=require("express");
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.send(`
      <h3>Register your Home Page</h3>
      <form action="add-home" method="POST">
      <input type="text" name="houseName" placeholder="Enter The Name of Your Home"><br>
      <input type="submit">
      </from>
    `);
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.send(`
    <h1>Register Complete Succesfully </h1>
    <a href="/host/add-home">Add Home</a>
    `);
});


module.exports=hostRouter;