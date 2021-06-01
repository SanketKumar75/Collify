const mongoose = require('mongoose');




const DB = process.env.DATABASE;
mongoose.connect(DB , {
    
    ).then(() => {
       console.log('Connnected To the Database');
}).catch((err) => console.log('not connected'));

