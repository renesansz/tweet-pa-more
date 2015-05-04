(function () {
	
	'use strict';
	
	angular.module('tweet-pa-more.controllers')
           .controller('TweetController', TweetController);
        
    function TweetController($scope) {
                
        $scope.posts = [];
        $scope.newPost = { created_by: '', message: '', created_at: '' };
        
        // Function Definitions
        // ---------------------
        
        /**
         * Submits the tweet.
         */
        $scope.PostTweet = function () {
            
            if ( ! $scope.newPost.message.length)
                return;

            $scope.newPost.created_at = Date.now();
            $scope.posts.push($scope.newPost);
            
            // Reset the scope data, so that we can re-use it again
            $scope.newPost = {
                created_by: '',
                message: '',
                created_at: ''
            };
        
        };
        
    }
})();