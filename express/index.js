var express = require('express');
var path = require('path');
var passport = require('passport');
var session = require('express-session');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// Create the application
var app = express();
    app.api_version = 'v1'; // API Version

// ------------ MIDDLEWARES ------------ //
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
app.use(session({
    secret: 'vJ7vmZq5s-JnA%2"fr)1"cO5I|2zzxa2w#jcgo:cy8x3/a,e1XNn%o@1j#MEMhK'
}));
app.use(passport.initialize());
app.use(passport.session());
// ---- END of MIDDLEWARES ---- //

// Register Auth Route
var auth = require('./controllers/api/'+ app.api_version +'/AuthController')(passport);
app.use('/api/'+ app.api_version +'/auth', auth)

// Connect to MongoDB
// -------------------
mongoose.connect('mongodb://localhost/tweet-pa-more');
mongoose.connection.once('open', function () {

    // Initialize Passport
    var initPassport = require('./passport-init')(passport);

    // Load the models
    app.models = require('./models/index');

    // Load API Routes
    var apiRoutes = require('./routes')(app);

    _.each(apiRoutes, function (controller, route) {
        app.use(route, controller(app, route));
    });

    app.listen(3000);
    console.log('Listening to port 3000');
});
