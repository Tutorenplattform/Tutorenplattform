(function() {

    angular.module('tp.shared.controller')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state'];

    function LoginController($state) {
        var vm = this;

        vm.fields = {};

        vm.login = login;

        function login() {
            $state.go('tutorList');
        }
    }

})();