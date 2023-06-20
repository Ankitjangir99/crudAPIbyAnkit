// Importing packages
const express = require('express');
const app = express();
const port = process.env.port || 8000;
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

//using body parser to parse our request body
app.use(bodyParser.urlencoded({extended: true}));

//using routes
app.use('/', require('./routes/index'));





// listing function for starting our server 
app.listen(port, function(){
    console.log(`API is running on http://localhost:8000/api/items`);
});