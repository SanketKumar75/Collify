const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//schema for the FACULTY collecttion
const fSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        
    },
    password: {
        type: String,
        required: true
    }

})


//Hashing the password
fSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10)
        console.log('Encrypted the pass');
    }
    next();
})


//include JWT for token generation




const Faculty = mongoose.model("FACULTY", fSchema);

module.exports = Faculty;