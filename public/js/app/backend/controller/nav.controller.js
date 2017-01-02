(function() {

    angular.module('tp.backend.controller')
        .controller('BackendNavController', BackendNavController);

    BackendNavController.$inject = ['Authentication'];

    function BackendNavController(Authentication) {
        var vm = this;

        vm.logout = logout;

        init();

        function init() {
            nav.account = Authentication.getAccountInfo();
        }

        function logout() {
            Authentication.logout();
        }
    }

})();