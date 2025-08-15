const data = require("../data.json").products;

const allUsers = (req, res) => {
    res.json(data);
};

const oneUser = (req, res) => {
    const id = Number(req.params.id)
    const user = data.find(p=>p.id === id);
    res.json(user);
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

const deleteUser = (req, res) => {
    const id = Number(req.params.id)
    const  product = data.find(p=>p.id === id);
    const delProduct =  data.splice(product,1);
    res.json(delProduct);
}

module.exports = {
    allUsers,
    oneUser,
    sendData,
    updateData,
    deleteUser
}