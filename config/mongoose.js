const mongoose = require('mongoose');

// connecting mongoose to its default server and Curd Api
mongoose.connect('mongodb+srv://ajangir8890:12345@cluster1.mbovcrk.mongodb.net/crudAPI?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;