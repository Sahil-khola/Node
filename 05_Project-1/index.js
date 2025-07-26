const express = require('express');
const user = require("./MOCK_DATA.json");
const app = express();
const fs = require("fs")

app.use(express.urlencoded({extended : false}))

app.get("/user", (req, res) => {
    const html = `
    <ul>
    ${user.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html)
})


app.get("/api/user", (req, res) => {
    res.json(user)
})

app.get("/api/user/:id", (req, res) => {
    const id = Number(req.params.id);
    const foundUser = user.find((user) => user.id === id);
    return res.json(foundUser);
})

app.route("/api/user/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const foundUser = user.find((user) => user.id === id);
        return res.json(foundUser);
    }).delete((req, res) => {
        const id = body.id 
        res.json({ status: "pending" })
    }).patch((req, res) => {
        // update user by id
        res.json({ status: "pending" })
    })

app.post("/api/user",(req,res)=>{
        const body = req.body;
        console.log(body);
        user.push({...body, id:user.length + 1});
        fs.writeFile("./MOCK_DATA.json",JSON.stringify(user),(err,res)=>{

            res.json({ status: "pending" })
        })
        

})

app.listen(3000, () => console.log("server Start"));
