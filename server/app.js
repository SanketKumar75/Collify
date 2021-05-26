const mongoose  = require('mongoose');
const express = require('express');
const dotenv = require("dotenv");
const app = express();

dotenv.config({path:'./config.env'});
const PORT = process.env.PORT;

require('./db/database');
const User = require('./models/sSchema');


app.use(express.json());


app.use(require('./routers/auth'));


const middleware = (req, res, next)=>{
    console.log("This is middleware");
    next();
}

app

console.log("Yes it works");


app.listen(PORT, ()=>{
    console.log(`Serving at ${PORT}`);
})