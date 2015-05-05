var restful = require('node-restful');

module.exports = function(app, route) {

    // Setup the controller for rest
    var rest = restful.model('users', app.models.users)
                      .methods(['get', 'put', 'post', 'delete']);

    // Register this endpoint
    rest.register(app, route);

    // Return the middlewar
    return function (req, res, next) {
        next();
    };

}; 