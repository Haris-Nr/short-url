const jwt = require("jsonwebtoken")
const secret = "IMeAndMySlef"

const SetUser = (user) =>{
    return jwt.sign({
        _id:user._id,
        email:user.email
    },secret)
}

const getUser = (token) =>{
    if(!token) return null 
    try {
        return jwt.verify(token,secret);
    } catch (error) {
        return null
    } 
}

module.exports={
    SetUser,
    getUser
}