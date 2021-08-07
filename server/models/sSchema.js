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
        required: false
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
            assign_id:{//or assignment _id
                type: String
            },
            submit:{ //submission url
                type: String,
                
            }, 
            assignment:{// not doing for now assignment _id maybe
                type: String
            },
            mark:{// from faculty
                type: Number
            },
            tabchange:{//student ||| Not yet
                type: Boolean
            },
            tle:{//true if time limit exceded for now passing date itself
                type: Date
            },
            name:{
                type: String
            },
            email: {
                type: String,
                required: false
            }
        }
    ],
    mynotes:
    [
        {
            header:{
                type: String,
               
            },
            mynote:{
                type: String,
                
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
