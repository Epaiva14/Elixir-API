// environment vairables 
require('dotenv').config();
const mongoose = require('mongoose');




console.log('Mongo URI =>', process.env.MONGO_URI);
console.log('API key', process.env.API_KEY);
// connect to the database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// create connection object
const db = mongoose.connection;

// once the database opens
db.once('open', ()=> {
    console.log('Connected to MongoDB Database: Elixir API at HOST: ', db.host, 'PORT: ', db.port)
})

// if there is a database error
db.on('error', (err)=> {
    console.log(`Database error: `, err)
})
