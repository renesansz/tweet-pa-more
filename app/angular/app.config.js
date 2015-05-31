/**
 * Angular App Config
 * ------------------
 */
(function () {

    'use strict';

    angular.module('tweet-pa-more')
           .config(AppConfig);

    function AppConfig($stateProvider, $urlRouterProvider, RestangularProvider, NG_PATH, API) {
        
        /**
         * Restangular base URL
         * ------------------
         */
        RestangularProvider.setBaseUrl(API.REST_URL);

        /**
         * App Routes
         * ----------
         * Set the application routes available in the app.
         */
        var routes = [

            // Home Route
            {
                name: 'home',
                url: '/',
                templateUrl: NG_PATH.MODULES + 'home/view.html',
                controller: 'HomeController as home'
            }

        ];

        // Register App Routes
        routes.forEach(function (val) { $stateProvider.state(val); });

        // Default Route
        $urlRouterProvider.otherwise('/');

    }

})();