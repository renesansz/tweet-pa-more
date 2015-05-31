/**
 * Angular App Constants
 * ---------------------
 */
(function () {

    'use strict';

    angular.module('tweet-pa-more')

            // API - API URLs
           .constant('API', {

                REST_URL: 'http://localhost:3000'

           })

            // NG_PATH - Angular Directories
           .constant('NG_PATH', {

                DIRECTIVES: 'angular/directives/',
                MODULES: 'angular/modules/',

           });

})()