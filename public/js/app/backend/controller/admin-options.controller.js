(function() {

    angular.module('tp.backend.controller')
        .controller('AdminOptionsController', AdminOptionsController);

    AdminOptionsController.$inject = ['options', 'AdministratorService', '$state'];

    function AdminOptionsController(options, AdministratorService, $state) {
        var vm = this;

        vm.options = {
            email: 'fas@htl.rennweg.at'
        };

        vm.fields = {};

        vm.saveChanges = saveChanges;
        vm.passwordSet = passwordSet;
        vm.validChanges = validChanges;
        vm.reset = reset;

        init();

        function init() {
            vm.fields.email = vm.options.email;
        }

        function saveChanges() {
            var data = angular.copy(vm.fields);
            if (passwordSet()) {
                delete data.passwort2;
            }
            AdministratorService.saveOptions(data);
        }

        function passwordSet() {
            var passwort1 = vm.fields.passwort;
            var passwort2 = vm.fields.passwort2;
            return passwort1 || passwort2;
        }

        function validChanges() {
            var passwort1 = vm.fields.passwort;
            var passwort2 = vm.fields.passwort2;
            if (passwordSet()) {
                return passwort1 === passwort2;
            }
            return true;
        }

        function reset() {
            AdministratorService.resetApplication().then(forwardToHome);

            function forwardToHome() {
                $state.go('home');
            }
        }
    }

})();