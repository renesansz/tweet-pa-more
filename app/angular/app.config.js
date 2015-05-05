(function () {

    'use strict';

    angular.module('tweet-pa-more')
           .config(AppConfig);

    function AppConfig(RestangularProvider) {

        RestangularProvider.setBaseUrl('http://localhost:3000');

    }

})();