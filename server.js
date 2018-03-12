var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');

var User = require('./models/user');

var app = express();

mongoose.connect('mongodb://localhost', function(err){
if (err) {
    console.log(err);
} else {
    console.log("Connected to the database.");
}
});

app.use(morgan('dev'));

app.get('/name', function(req, res) {
    var name = "Shubhi";
    res.json("My name is " +name);
});

app.listen(3000, function(err){
    if (err) throw err;
    console.log("Server is running on port 3000...");
});