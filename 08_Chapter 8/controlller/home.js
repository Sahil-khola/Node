const handeleAbout = (req,res)=>{
    res.send("About");
};
const handeleContact = (req,res)=>{
    res.send("contact");
};
const handeleLogin = (req,res)=>{
    res.send("logIn");
};



module.exports = {handeleLogin,handeleContact,handeleAbout};