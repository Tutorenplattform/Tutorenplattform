(function() {

    angular.module('tp.run', [])
        .run(run);

    run.$inject = ['Authentication'];

    /**
     * A wrapper for the Authentication service initiation handler. This block is called whenever the user (re)loads
     * the page.
     * @param {Authentication} Authentication The service used to interact with the current active user session
     * @memberOf tp.run
     * @function
     */
    function run(Authentication) {
        Authentication.initialize();
    }

    /**
     * @namespace tp.run
     */

})();
