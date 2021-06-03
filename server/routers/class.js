const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//include database and class schema
require('../db/database');
const Clas = require("../models/classSchema");


// Shit
const middleware = (req, res, next)=>{
    console.log("This is middleware");
    next();
}


//get request for test
router.get('/faculty/create-class', (req, res) =>{
    res.send("You are here bcoz you wanted to create class ..")
})


//properly working create request /faculty/create-class
router.post('/faculty/create-class', async (req, res) =>{
    

    const { subject, faculty, batch} = req.body;

    if( !subject || !faculty || !batch){
        return res.status(402).json({error: 'Fill the form properly'});
        }
         
    try{
            const classExist = await Clas.findOne({subject: subject});

            if(classExist){
                return res.status(422).json({error: "Subject already exist"});

            }
                const clas = new Clas({subject, faculty, batch});

                await clas.save();

                //bootstrapify later
                res.status(201).json({message:"New Class created Sucessfully"});

    } catch(err){
        console.log(err);
    }

});

//Notes


//for uploading Notes


module.exports = router