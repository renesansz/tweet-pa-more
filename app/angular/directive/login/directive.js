(function () {

    'use strict';

    angular.module('tweet-pa-more.directives')
           .directive('login-form', Directive);

    function Directive(NG_PATH) {

        var directive = {
            restrict: 'E',
            link: _Link,
            templateUrl: NG_PATH.DIRECTIVES + 'login/template.html'
        };

        return directive;

        /**
         * Directive Controller
         */
        function _Link($scope, element, attrs) {

            /**
             * Scope Directives
             */
            $scope.Login = Login;

            /**
             * Show Login Modal
             */
            function Login() {
            }

        } 

    }

})();