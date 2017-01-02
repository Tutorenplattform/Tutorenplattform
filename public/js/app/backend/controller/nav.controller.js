(function() {

    angular.module('tp.backend.controller')
        .controller('BackendNavController', BackendNavController);

    BackendNavController.$inject = ['Authentication'];

    /**
     * This controller provides all background functionality for the navigation section on the backend side of the
     * application.
     * @param {Authentication} Authentication The service used to interact with the current active user session
     * @constructor
     */
    function BackendNavController(Authentication) {
        var vm = this;

        vm.logout = logout;

        init();

        function init() {
            nav.account = Authentication.getAccountInfo();
        }

        /**
         * Sends an API request to log the administrator out. Afterwards, they will be redirected to the login page.
         */
        function logout() {
            Authentication.logout();
        }
    }

})();