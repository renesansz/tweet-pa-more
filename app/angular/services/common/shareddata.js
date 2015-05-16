(function () {

    'use strict';

    angular.module('tweet-pa-more.services', [])
           .service('SharedData', SharedData);

    function SharedData() {

        var sharedData = {};
        var vm = this;
            vm.Set = Set;
            vm.Get = Get;

        // SERVICE METHODS
        // ----------------

        /**
         * Set a shareable data.
         * 
         * @param {String} key - The key name for the shared data.
         * @param {Any} val - The value to be set.
         *
         * @return {Any} - The value being set
         */
        function Set(key, val) {

            sharedData[key] = val;

            return sharedData[key];

        }

        /**
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