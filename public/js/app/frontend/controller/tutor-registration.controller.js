(function() {

    angular.module('tp.frontend.controller')
        .controller('TutorRegistrationController', TutorRegistrationController);

    TutorRegistrationController.$inject = ['$state', 'TutorService'];

    function TutorRegistrationController($state, TutorService) {
        var vm = this;

        vm.fields = {};

        vm.subjects = [];

        vm.days = [];

        vm.register = register;
        vm.addSubject = addSubject;
        vm.removeSubject = removeSubject;

        init();

        function init() {
            var days = ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'];
            for (var i in days) {
                var name = days[i];
                var day = {
                    name: name
                };
                vm.days.push(day);
            }
            vm.addSubject();
        }

        function register() {
            var data = angular.copy(vm.fields);
            data.subjects = vm.subjects;
            data.days = vm.days;
            TutorService.register(vm.fields);
        }

        function addSubject() {
            vm.subjects.push({});
        }

        function removeSubject(index) {
            vm.subjects.splice(index, 1);
        }
    }

})();