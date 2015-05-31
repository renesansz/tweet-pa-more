/**
 * Angular App Bootstrap
 * ---------------------
 */
(function () {

    'use strict';

    angular.module('tweet-pa-more', [
        'tweet-pa-more.directives',
        'tweet-pa-more.services',
        'tweet-pa-more.modules',
        'ui.router',
        'restangular'
    ]);

})();