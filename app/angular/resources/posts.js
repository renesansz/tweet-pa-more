(function () {
    
    'use strict';

    angular.module('tweet-pa-more.resources')
           .factory('PostsRestangular', PostsRestangular)
           .factory('PostsResource', PostsResource);

    function PostsRestangular(Restangular) {
        
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setRestangularFields({
                id: '_id'
            });
        });
        
    }

    function PostsResource(PostsRestangular) {

        return PostsRestangular.service('api/v1/posts');

    }

})();