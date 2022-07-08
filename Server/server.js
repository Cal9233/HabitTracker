require('./database/config');
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 1337;

app.use(express.json());

// resolve CORS issue in Development only
app.use(function (req, res, next) {   
    res.header('Access-Control-Allow-Origin');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

app.get('/test', (req, res) => {
    res.json({message: 'Welcome'}); 
})

app.post('/email', (req, res) => {
    console.log(req.body.email);
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});




async function main(){
    const uri = "mongodb+srv://Cal:Rathalos15@habittracker.g4jqs5b.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    try {
        await client.connect(err => {
            const collection = client.db("habittracker").collection("devices");
            // perform actions on the collection object
            
        });
        await listDatabases(client);
    } catch (e){
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    try {
        databasesList = await client.db().admin().listDatabases();

        console.log("Databases: ");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    } catch(e) {
        console.log("error: ", e);
    }
    
}
