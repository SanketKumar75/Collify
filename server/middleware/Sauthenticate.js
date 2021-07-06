const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Student = require('../models/sSchema');

module.exports = (req, res, next) =>{
    const {authorization} = req.headers
    if(!authorization){
        res.status(401).json({error: "You must be logged in in order to access this page."})
        
    }

    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, process.env.SECRET_KEY,(err, payload) =>{
        if(err){
            return res.status(401).json({error: " first login Student broo .. "})
        }

        const {_id} = payload
        Student.findById(_id).then(userdata =>{
            req.stData = userdata
            next()
        })
        
    })
}
