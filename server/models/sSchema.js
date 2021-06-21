const mongoose = require('mongoose');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');

//userSchema for student and faculty

const sSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    phone: {
    type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
        //minlength: 8,

    },

})


//hashing the password before sending the data
sSchema.pre('save', async function(next){
    
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10);
        console.log('Encrypted the pass');
    }
    next();
});

//include JWT here for token generation


const Student = mongoose.model("STUDENT",sSchema);


module.exports = Student;