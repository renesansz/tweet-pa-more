(function () {
	
	'use strict';
	
	angular.module('tweet-pa-more.controllers')
           .controller('PostController', PostController);
        
    function PostController($scope, PostsResource) {

        $scope.posts = PostsResource.getList().$object;
        $scope.newPost = { username: '', message: '', created_at: '' };
        
        // Function Definitions
        // ---------------------
        
        /**
         * Submits the tweet.
         */
        $scope.PostTweet = function () {
            
            if ( ! $scope.newPost.message.length)
                return;

            PostsResource.post($scope.newPost).then(function() {

                // Reset the scope data, so that we can re-use it again
                $scope.newPost = {
                    username: '',
                    message: '',
                    created_at: ''
                };
                $scope.posts = PostsResource.getList().$object;
                 
            });
        
        };
        
    }
})();