(function () {
	
	'use strict';
	
	angular.module('tweet-pa-more.controllers')
           .controller('PostController', PostController);
        
    function PostController($scope, PostsResource) {

        $scope.isSending = false;
        $scope.newPost = { username: '', message: '', created_at: '' };
        $scope.posts = PostsResource.getList().$object;

        // Controller Functions
        // ---------------------
        
        $scope.PostTweet = PostTweet;

        // Function Definitions
        // ---------------------
        
        /**
         * Submits the tweet.
         */
        function PostTweet() {
            
            if ( ! $scope.newPost.message.length)
                return;

            $scope.isSending = true;

            PostsResource.post($scope.newPost).then(function() {

                $scope.isSending = false;
                $scope.posts.push($scope.newPost);

                // Reset the scope data, so that we can re-use it again
                $scope.newPost = {
                    username: '',
                    message: '',
                    created_at: ''
                };
                 
            });
        
        };
        
    }
})();