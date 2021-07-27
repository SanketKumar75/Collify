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
    tokens:[
        {
            token:{
                type: String,
                required: true
            }
        }
    ],
    submits:[
        {
            class:{
                type: String
            },
            submit:{
                type: String,
                required: true
            }, 
            assignment:{
                type: String
            },
            mark:{
                type: Number
            }
        }
    ]

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
sSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
            return token;

    }catch(err){
        console.log(err);
    }
}




const Student = mongoose.model("STUDENT",sSchema);


module.exports = Student;
