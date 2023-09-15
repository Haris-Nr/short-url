const {v4:uuidv4} = require('uuid')
const User = require("../models/user");
const {SetUser} = require("../service/auth")


const handleUserSignup = async (req,res) =>{
    const {name,email,password} = req.body
    await User.create({
        name,
        email,
        password,
    });
    return res.render("/")
}


const handleUserLogin = async (req,res) =>{
    const {email,password} = req.body
    const user = await User.findOne({email,password});
    if(!user)  return res.render("login",{
        error:"Invalid Username or Password",
    });

 const token = SetUser(user);
    res.cookie('uid',token)
    return res.redirect("/");
   
}


module.exports = {
    handleUserSignup,
    handleUserLogin
}