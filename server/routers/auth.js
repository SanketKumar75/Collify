const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate')
//JWT nahi kai brooooo....


//conecting database and schemas
require('../db/database');



//schema-s here
const Student = require("../models/sSchema");
const Faculty = require("../models/fSchema");





const middleware = (req, res, next)=>{
    console.log("This is middleware");
    next();
}


router.get('/student-sign', (req, res)=>{
    res.send("getting from student-sign");
}
);


router.get('/faculty-sign', (req, res)=>{
    res.send("getting from faculty-sign");
    console.log("getting faculty");
}
);



//SignUp student here
router.post('/student-sign', async(req, res)=>{
    const { name, email,batch,  phone, password} = req.body;

    if( !name ||! email ||!batch ||!phone || !password || password.length<8 ){
        return res.status(402).json({error:"You missed someThing"});
        console.log("0");
    }

    try{
        const userExist = await Student.findOne({email: email});

        if(userExist){
        return res.status(422).json({error: "email already exists"});
        console.log("1");
        }
            const student = new Student({name, email, batch, phone, password});

            await student.save();
            res.status(201).json({message: "Yesss registered successfully at student"});
            console.log("2");
    } catch(err){
        console.log(err);
        console.log("3");
    }

});


//signUp faculty
router.post('/faculty-sign', async(req, res)=>{
    const { name, email,  phone, password} = req.body;
    if( !name ||! email ||!phone || !password || password.length<8){
        return res.status(402).json({error:"You missed someThing"});
        console.log("4");
    }


    try{
        const userExist = await Faculty.findOne({email: email});

        if(userExist){
        return res.status(422).json({error: "email already exists"});
        console.log("5");
        }
            const faculty = new Faculty({name, email, phone, password});

            await faculty.save();
            res.status(201).json({message: " Yesss registered successfully at faculty"});
            console.log("6");
    } catch(err){
        console.log(err);
        console.log("7");
    }

});



//Login student here JWT also here
router.post('/student-login', async (req, res) =>{
    console.log(req.body);
    try{
        //shall be used while JWT
        
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(402).json({error: "enter details properly"});
        }
        const studentLogin = await Student.findOne({email: email});



        console.log(studentLogin);

            if(studentLogin){
                //comparing the password 
                const isMatch = await bcrypt.compare(password, studentLogin.password);

                //include JWtoken here
                
                                if(!isMatch){
                                    res.status(422).json({ error: "Details dont match"});
                                }
                                else{
                                    const token = jwt.sign({_id:studentLogin._id}, process.env.SECRET_KEY)
                                   // res.json({token, studentLogin:{_id, email}});
                                   res.json({token, studentLogin});
                                }
                    }
            else{
                res.status(400).json({error: "Details dosnt match"});
            }
            

    } catch(err){
        console.log(err);
    }
});



//Login faculty here DONT forget to add JWT also 
router.post('/faculty-login', async (req, res) =>{
    console.log(req.body);
    try{
        //shall be used while JWT
        
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(402).json({error: "enter details properly"});
        }
        const facultyLogin = await Faculty.findOne({email: email});
        console.log(facultyLogin);

            if(facultyLogin){
                //comparing the password 
                const isMatch = await bcrypt.compare(password, facultyLogin.password);

                //include JWtoken here
               

                                if(!isMatch){
                                    res.status(422).json({ error: "Details dont match"});
                                }
                                else{
                                    const token = jwt.sign({_id:facultyLogin._id}, process.env.SECRET_KEY)
                                    res.json({token, facultyLogin})
                                }
                    }
            else{
                res.status(422).json({error: "Details dosnt match"});
            }
            

    } catch(err){
        console.log(err);
    }
});











//OtherPages here
router.get('/about', authenticate, (req, res)=>{
    res.send("Here you are ABOUT");
}
);

router.get('/student',(req, res)=>{
    res.send("Here you are ABOUT");
}
);

//homepage
router.get('/', (req, res)=>{
    res.send("Here you are from Auth");
    console.log('AtHome');
}
);

module.exports = router;