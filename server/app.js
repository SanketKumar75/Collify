const mongoose  = require('mongoose');
const express = require('express');
const dotenv = require("dotenv");
const fileUpload = require('express-fileupload');


const app = express();


dotenv.config({path:'./config.env'});
const PORT = process.env.PORT || 4000;

app.use(express.static('public'));

app.use(express.json());

app.use(require('./routers/auth'));

app.use(require('./routers/class'));







//for note upload
app.use(fileUpload());

app.post('/faculty/upload', (req, res) =>{
    if(req.files === null){
        return res.status(400).json({error: "No file chosen"});

    }
    const file = req.files.file;

    file.mv(`${__dirname}/../client/public/uploads/${file.name}`, err =>{
        if(err)
        {
            console.log(err);
            return res.status(500).send(err);
        }
    });

    res.json({fileName: file.name, filePath: `/uploads/${file.name}`});
})




console.log("Yes it works");


app.listen(PORT, ()=>{
    console.log(`Serving at ${PORT}`);
})