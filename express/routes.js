module.exports = function (app) {

    // Format:
    // [<url>, <controller_path>]
    var routes = [

        ['/api/'+ app.api_version +'/users', require('./controllers/api/'+ app.api_version +'/UserController')],
        ['/api/'+ app.api_version +'/posts', require('./controllers/api/'+ app.api_version +'/PostController')]

    ];

    // Convert route array to object
    // Where idx 0 is the key, and idx 1 is the controller path.
    var routesObj = {};
        routes.forEach(function (val, idx) {
            routesObj[val[0]] = val[1];
        });

    return routesObj;

};