const faker = require('@faker-js/faker');
require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const cors = require('cors');
const { default: axios } = require('axios');
// import models


// create app
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
// });

console.log('API key', process.env.API_KEY);


app.get('/', (req, res) => {
    axios.get(`http://www.thecocktaildb.com/api/json/v2/${process.env.API_KEY}/list.php?i=list`)
    // axios.get(`http://www.thecocktaildb.com/api/json/v2/${process.env.API_KEY}/search.php?s=margarita`)
    .then(function(response) {
        console.log("Api data here", response.data)
        res.json(response.data)
    })
    .catch(error => {
        console.log(error.message)
    })
    // return res.json({ message: 'Welcome to our Elixir API' });
});



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server connected to PORT: ${PORT}`);
});

module.exports = app;