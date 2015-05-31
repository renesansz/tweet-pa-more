(function () {

    'use strict';

    angular.module('tweet-pa-more.directives')
           .directive('loginform', LoginForm);

    function LoginForm(NG_PATH) {
        
        // Directive Instance
        // ------------------
        var directive = {
            restrict: 'E',
            link: _Link,
            templateUrl: NG_PATH.DIRECTIVES + 'login/template.html'
        };

        /**
         * @access private
         * @function Link
         * 
         * Directive Controller.
         *
         * @param {Object} $scope  - Angular $scope object
         */
        function _Link($scope) {

            /////////////////////
            // Scope Variables //
            /////////////////////
            
            $scope.Login = Login;
            $scope.credentials = {
                username: '',
                password: ''
            };

            //////////////////////////
            // Function Definitions //
            //////////////////////////

            /**
             * @access public
             * @function Login
             * 
             * Show Login Modal.
             */
            function Login() {
            }

        } 

        return directive;

    }

})();