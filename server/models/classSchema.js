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