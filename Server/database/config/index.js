const mongoose = require('mongoose');
const uri = "mongodb+srv://Cal:Rathalos15@HabitTracker.g4jqs5b.mongodb.net/HabitTracker?retryWrites=true&w=majority";
    

try {
    mongoose.connect(uri, err => {
        if(err) throw err;
        console.log("Successful MongoDb connection");
    });
    
} catch(e){
    console.log("error: ", e);
}