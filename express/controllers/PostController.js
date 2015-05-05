var restful = require('node-restful');

module.exports = function(app, route) {

    // Setup the controller for rest
    var rest = restful.model('posts', app.models.posts)
                      .methods(['get', 'put', 'post', 'delete']);

    // Register this endpoint
    rest.register(app, route);

    // Return the middleware
    return function (res, req, next) {
        next();
    };

};