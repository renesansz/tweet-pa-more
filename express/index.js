var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// Create the application
var app = express();

// MIDDLEWARES
// ------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
// Add CORS Suport
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

// Connect to MongoDB
// -------------------
mongoose.connect('mongodb://localhost/tweet-pa-more');
mongoose.connection.once('open', function () {
    
    // Load the models
    app.models = require('./models/index');

    // Load the routes.
    var routes = require('./routes');

    _.each(routes, function (controller, route) {
        app.use(route, controller(app, route));
    });
    // End of loading routes

    app.listen(3000);
    console.log('Listening to port 3000');
});
