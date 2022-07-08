const mongoose = require('mongoose');
const uri = "mongodb+srv://Cal:Rathalos15@habittracker.g4jqs5b.mongodb.net/?retryWrites=true&w=majority";
    

try {
    mongoose.connect(uri, err => {
        if(err) throw err;
        console.log("Successful MongoDb connection");
    });
    
} catch(e){
    console.log("error: ", e);
}