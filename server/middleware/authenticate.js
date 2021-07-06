const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Faculty = require('../models/fSchema');
const Student = require('../models/sSchema');

module.exports = (req, res, next) =>{
    const {authorization} = req.headers
    if(!authorization){
        res.status(401).json({error: "You must be logged in in order to access this page."})
        
    }

    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, process.env.SECRET_KEY,(err, payload) =>{
        if(err){
            return res.status(401).json({error: " first login broo .. "})
        }

        const {_id} = payload
        Faculty.findById(_id).then(userdata =>{
            req.facData = userdata
            next()
        })
        // Student.findById(_id).then(userdata =>{
        //     req.facData = userdata
        //     next()
        // })
        
    })
}


// const jwt = require('jsonwebtoken');
// const Faculty = require('../models/fSchema')

// const Authenticate = async (req, res, next) => {

//     try{

//         const token = req.cookies.jwtoken;
//         const verifyToken = jwt.verify(token, process.env.SECERET_KEY)

//         const rootUser = await Faculty.findOne({_id: verifyToken._id, "tokens.token": token});

//         if(!rootUser){
//             throw new Error('User not found')
//         }

//         req.token = token;
//         req.rootUser = rootUser;
//         req.userID = rootUser._id
         
//         next();
        
//     }catch(err){
//         res.status(401).send('No token provided');
//         console.log(err)
//     }
    
// }

// module.exports = Authenticate;