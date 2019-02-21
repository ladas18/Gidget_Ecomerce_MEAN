var express = require("express"),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    path = require('path'),
    models = require('./server/models/gidget.js'),
    db_connect = require('./server/config/mongoose.js'),
    session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public/dist/public')));
app.use(express.static(path.join(__dirname, './client/static')));
// All Routes
// Root Request
require('./server/config/routes.js')(app)

// Setting our Server to Listen on Port: 9000
var server = app.listen(8000, () => {
    console.log("Running on port 8000");
});
