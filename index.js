const express = require("express");
const cookieParser  = require('cookie-parser')
const { connectToMongoDB } = require("./connect");
const {restrictToLoggedinUserOnly,checkAuth} = require("./middleware/auth")
connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
console.log("Mongodb connected")
);


const app = express();
app.set("view engine","ejs");
app.use(express.json());
// form data ko pars karny k liye
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter")
const userRoute = require("./routes/user")


app.use("/url",restrictToLoggedinUserOnly,urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuth, staticRoute);


const PORT = 8001;
app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
