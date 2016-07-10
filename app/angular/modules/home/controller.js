(function () {

    'use strict';

    angular.module('tweet-pa-more.modules')
           .controller('HomeController', HomeController);

    function HomeController(PostsResource) {

        var vm = this;

        /////////////////////
        // Scope Variables //
        /////////////////////

            vm.isSending = false;
            vm.newPost = {username: '', message: '', created_at: ''};
            vm.posts = PostsResource.getList().$object;

        /////////////////////
        // Scope Functions //     
        /////////////////////
        
        vm.PostTweet = PostTweet;

        //////////////////////////
        // Function Definitions //
        //////////////////////////
        
        /**
         * @access public
         * @function PostTweet
         * 
         * Submits the tweet.
         */
        function PostTweet() {
            
            if ( ! vm.newPost.message.length)
                return;

            vm.isSending = true;

            PostsResource.post(vm.newPost).then(function() {

                vm.isSending = false;
                vm.posts.push(vm.newPost);

                // Reset the scope data, so that we can re-use it again
                vm.newPost = {
                    username: '',
                    message: '',
                    created_at: ''
                };
                 
            });
        
        }
        
    }

})();