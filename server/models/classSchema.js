const mongoose = require('mongoose');


//userSchema for class

const classSchema  = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    vidconurl:{
        type: String,

    },
    notes:
    [
        {
            note:{
                type: String,
                required: true
            },
            title:{
                type: String
            }
        }
    ],
    assigns:
    [
        {
            assign:{
                type: String,
                required: true
            },
            topic:{
                type: String
            }, 
            due:{
                type: Date
            },
            mark:{
                type: Number,
                required: false
            }
            
        }
    ],
    discuss:[
        {
            name:{
                type: String
            },
            message:{
                type: String
            }
        }
    ],
    record: [
        {
            video:{
                type: String
            }
        }
    ]
    
    })

const Clas = mongoose.model("CLASS",classSchema);

module.exports = Clas;