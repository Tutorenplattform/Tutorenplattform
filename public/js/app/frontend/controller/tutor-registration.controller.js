(function() {

    angular.module('tp.frontend.controller')
        .controller('TutorRegistrationController', TutorRegistrationController);

    TutorRegistrationController.$inject = ['$state', 'TutorService'];

    function TutorRegistrationController($state, TutorService) {
        var vm = this;

        vm.fields = {};

        vm.register = register;

        function register() {
            TutorService.register(vm.fields);
        }
    }

})();