(function() {

    angular.module('tp.frontend.controller')
        .controller('FrontendNavController', FrontendNavController);

    FrontendNavController.$inject = ['Authentication'];

    function FrontendNavController(Authentication) {
        var vm = this;

        vm.logout = logout;

        function logout() {
            Authentication.logout();
        }
    }

})();