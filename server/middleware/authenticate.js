
const jwt = require('jsonwebtoken');
const User = require('../models/sSchema')

const Authenticate = () => {

    try{

        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECERET_KEY)

        const rootUser =  User.findOne({_id: verifyToken._id, "tokens.token": token});

        if(!rootUser){
            throw new Error('User not found')
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id
    }catch(err){
        res.status(401).send('No token provided');
        console.log(err)
    }
}

module.exports = Authenticate;