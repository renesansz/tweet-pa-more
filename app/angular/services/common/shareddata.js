(function () {

    'use strict';

    angular.module('tweet-pa-more.services', [])
           .service('SharedData', SharedData);

    function SharedData() {

        var sharedData = {};
        var vm = this;

        /////////////////////
        // Scope Functions //     
        /////////////////////

            vm.Set = Set;
            vm.Get = Get;

        //////////////////////////
        // Function Definitions //
        //////////////////////////

        /**
         * @access Public
         * @function Set
         * 
         * Set a shareable data.
         * 
         * @param {String} key - The key name for the shared data.
         * @param {Any}    val - The value to be set.
         *
         * @return {Any} - The value being set
         */
        function Set(key, val) {

            sharedData[key] = val;

            return sharedData[key];

        }

        /**
         * @access Public
         * @function Get
         * 
         * Get the value of the shared data by its key.
         * 
         * @param {String} key - The key name for the shared data.
         *
         * @return {Any/null}
         */
        function Get(key) {

            if (sharedData[key])
                return sharedData[key];
            else
                return null;

        }

    }

})();