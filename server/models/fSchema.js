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
    phone: {
        type: Number,
        required: true
        
    },
    password: {
        type: String,
        required: true
    },
    tokens:[
        {
            token:{
                type: String,
                required: true
            }
        }
    ]

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
fSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
            return token;

    }catch(err){
        console.log(err);
    }
}




const Faculty = mongoose.model("FACULTY", fSchema);
module.exports = Faculty;
