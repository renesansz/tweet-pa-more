(function () {

    'use strict';

    angular.module('tweet-pa-more')
           .config(AppConfig);

    function AppConfig($stateProvider, $urlRouterProvider, RestangularProvider, NG_PATH) {
        
        // Restangular base URL
        // --------------------
        RestangularProvider.setBaseUrl('http://localhost:3000');

        // App Routes
        // -----------
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