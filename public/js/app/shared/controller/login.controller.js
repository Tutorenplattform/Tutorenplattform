(function() {

    angular.module('tp.shared.controller')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['Authentication'];

    /**
     * This controller provides all background functionality for the login page of the application.
     * @param {Authentication} Authentication The service used to interact with the current user session
     * @constructor
     */
    function LoginController(Authentication) {
        var vm = this;

        vm.fields = {};

        vm.login = login;

        /**
         * Sends an API request to log in the user with the credentials from the view model. Afterwards, the user will
         * be redirected to either the list of tutors or the administrator home page depending on their user type.
         */
        function login() {
            Authentication.login(vm.fields);
        }
    }

})();