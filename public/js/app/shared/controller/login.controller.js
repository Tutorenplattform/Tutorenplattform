(function() {

    angular.module('tp.shared.controller')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['Authentication'];

    function LoginController(Authentication) {
        var vm = this;

        vm.fields = {};

        vm.login = login;

        function login() {
            Authentication.login();
        }
    }

})();