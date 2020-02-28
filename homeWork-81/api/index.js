const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const links =require('./app/links');
const config = require('./config');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const run = async () => {
   await mongoose.connect('mongodb://localhost/links',
       {
           useNewUrlParser: true,
           useUnifiedTopology: true
       });


    app.use('/links',links );

    app.listen(config.port, () => {
        console.log('HTTP server started ' + config.port)
    });


};

run().catch(e => {
    console.error(e)
});