const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  authenticate = require('../middleware/authenticate')
const  Sauthenticate = require('../middleware/Sauthenticate')

//include database and class schema
require('../db/database');

//schema-s here
const Clas = require("../models/classSchema");
const Student = require("../models/sSchema");
const Faculty = require("../models/fSchema");

// Shit
const middleware = (req, res, next)=>{
    console.log("This is middleware");
    next();
}



//get request for test
router.get('/faculty/create-class', authenticate, (req, res) =>{
    res.send("You are here bcoz you wanted to create class ..")
})


//Faculty All classes for showing  =>SubjectComp.js
router.get('/allclass', authenticate , (req, res) =>{
    
    //const localName = localStorage.getItem("name");
    //console.log(localName)
    

    const clas = Clas.find()
    .then(classes=>{
        res.json({classes})
    })
    .catch(err=>{
        console.log(err)
    })
})
//Student All classes for showing  =>SubjectComp.js
router.get('/Sallclass', Sauthenticate , (req, res) =>{
    Clas.find()
    .then(classes=>{
        res.json({classes})
    })
    .catch(err=>{
        console.log(err)
    })
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









//ForEach Subject create a div box
router.post('/faculty/get-class',  (req, res) =>{

}) 



//In side the subject
router.post('/faculty/INclass', async (req, res) =>{
    // const classObj = Clas.find()
    // res.json(classObj) 
    
    const {_id} = req.body;
    

    const classFetch = await Clas.findOne({_id:_id})
    
    res.json(classFetch)
    
    

}) 










//Notes


//for uploading Notes
router.post('/faculty/uploadnote', async (req, res)=>{
    const {title, url, _id} = req.body
    if(!title || !url ){
        console.log(title, url, _id)
        return res.status(422).json({error: "Title or file not added"})
        
    }


    
    const postTo = await Clas.findOne({_id: _id})
    postTo.notes = postTo.notes.concat({note: url, title: title})

    await postTo.save()
    console.log("Successfully uploaded")
    res.json(postTo)
    })

//getting the notes
router.post('/getnotes', async (req, res)=> {
    const {_id} = req.body;
    
    
    const notesFetch = await Clas.findOne({_id:_id})
    const notesList = notesFetch.notes;
    res.json(notesList)
})










//Assignments route

//upload assignment
router.post('/faculty/uploadassign', async (req, res)=>{
    const {topic, date, url, _id} = req.body
    if(!topic || !url || !_id || !date){
        console.log(topic, date, url, _id)
        return res.status(422).json({error: "Title or file not added"})
        
    }
    const postTo = await Clas.findOne({_id: _id})
    postTo.assigns = postTo.assigns.concat({assign: url, topic: topic, due: date})

    await postTo.save()

    console.log("Successfully uploaded")
    res.json(postTo.assigns)
    })

//fetch assignment
router.post('/getassigns', async (req, res)=> {
    const {_id} = req.body;
    
    
    const assignsFetch = await Clas.findOne({_id:_id})
    const assignsList = assignsFetch.assigns;
    res.json(assignsList)
})

// for videos or other stuff


module.exports = router
