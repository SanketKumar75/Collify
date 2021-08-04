const mongoose  = require('mongoose');
const express = require('express');
const dotenv = require("dotenv");
const fileUpload = require('express-fileupload');

const app = express();
const server = require('http').createServer(app)
const io  = require('socket.io')(server)
dotenv.config({path:'./config.env'});
const PORT = process.env.PORT || 4000;

app.use(express.static('public'));

app.use(express.json());

app.use(require('./routers/auth'));

app.use(require('./routers/class'));




io.removeAllListeners()

 
//Socket.io for discussion
io.on('connection', socket =>{
    // console.log('Hello from socket.io')
    socket.on('message', (obj)=>{
        console.log(obj);

        socket.broadcast.emit('message', obj)
    })
})







//for note upload
app.use(fileUpload());

app.post('/faculty/upload', (req, res) =>{
    if(req.files === null){
        return res.status(400).json({error: "No file chosen"});

    }
    data = req.body
    console.log(data)
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



//for submissions upload
app.post('/student/upload/submission', (req, res) =>{
    if(req.files === null){
        return res.status(400).json({error: "No file chosen"});

    }
    data = req.body
    console.log(data)
    const file = req.files.file;

    file.mv(`${__dirname}/../client/public/uploads/submission/${file.name}`, err =>{
        if(err)
        {
            console.log(err);
            return res.status(500).send(err);
        }
    });

    
    res.json({fileName: file.name, filePath: `/uploads/submission/${file.name}`});
})








console.log("Yes it works");


server.listen(PORT, ()=>{
    console.log(`Serving at ${PORT}`);
})