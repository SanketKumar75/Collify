const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  authenticate = require('../middleware/authenticate')
const  Sauthenticate = require('../middleware/Sauthenticate')
const mongoose = require('mongoose');

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

////Mynotes

//upload myNotes
router.post('/upload-my-notes', async (req, res) =>{
    const { student_id, header, mynote} = req.body;
    const _id = student_id;
    // console.log(_id, header, mynote)
    if(!_id||!header || !mynote)
        return res.status(422).json({error: "something is missing"})
    const upload_my_note = await Student.findOne({_id: _id})

    upload_my_note.mynotes = upload_my_note.mynotes.concat({_id: _id, header: header, mynote: mynote})

    await upload_my_note.save()

    console.log("uploaded to my notes!!")
    res.json(upload_my_note.mynotes)
})

//fetch my notes
router.post('/get-my-notes', async(req, res) =>{
    const {student_id} = req.body;
    const _id = student_id
    
    if(!_id)
        return res.status(422).json({error: "Id no good"})

    const studentlist = await Student.findOne({_id: _id})
    const mynotesList =  studentlist.mynotes

    res.json(mynotesList)

 
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

//upload submissions
router.post('/student/uploadsubmit', async (req, res)=>{
    const {assign_id, time, url, _id, } = req.body//assign_id
    
    if(!assign_id || !url || !_id || !time){
        console.log(assign_id, time, url, _id)
        return res.status(422).json({error: " file not added or assignment not found"})
        
    }
    const postTo = await Student.findOne({_id: _id})
    const name = postTo.name
    const email = postTo.email

    console.log(name)
    console.log(email)

    postTo.submits = postTo.submits.concat({assign_id: assign_id, submit: url,  tle: time, name: name, email: email})//assign_id: _id,

    await postTo.save()

    console.log("Successfully uploaded")
    res.json(postTo.submits)
    // const a = await localStorage.removeItem("assign_id")
    })

    //fetch ongoing assignment
router.post('/getongoingassign', async (req, res)=> {
    const {class_id} = req.body;
    console.log(class_id)
    const assignsFetch = await Clas.findOne({_id:class_id})
    
    const assignsList = assignsFetch.assigns;
    
    const d = assignsList.filter(list=>{
        return list.due>= new Date()
    })
    const dat = d.due
    res.json(d)
    
})

//fetch all assignments
router.post('/getassignlist', async (req, res)=>{
    const {_id} = req.body;
    // console.log(_id)

    const classList = await Clas.findOne({_id : _id});
    // console.log(classList)
    const assignList = classList.assigns

    // console.log(assignList)
    res.json(assignList)
})

// fetching assignments submissions from students DB to
//through classDB(_id) to faculties component 
router.post('/submissions', async (req, res)=>{
    const {_id} = req.body;// id here is  assignment_id i.e.assign_id
    // console.log(_id)
    const allSubmissions = await Student.find()
    let submissions =[]
    let i=0
    for (i=0; i<allSubmissions.length;i++)
        {
            // allSubmissions.push()
            submissions = submissions.concat(allSubmissions[i].submits)
            // submissions.push({"name": allSubmissions[i].name})
        }
    // console.log(allSubmissions)

    const sub = submissions.filter(x=> 
        x.assign_id == _id
        
        )
    const resData = submissions.filter(x=> 
        x.assign_id == _id
        
        )
        

    // console.log(resData)
    res.json(resData)
})





// for videos or other stuff 


module.exports = router
