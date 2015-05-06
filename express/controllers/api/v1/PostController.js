var res = require('node-restful');

module.exports = function (app, route) {

    // Setup the controller for the API
    var api = res.model('posts', app.models.posts)
                 .methods(['get', 'put', 'post', 'delete']);

    // Register this endpoint
    api.register(app, route);

    // Return the middleware
    return function (req, res, next) {
        next();
    };

};