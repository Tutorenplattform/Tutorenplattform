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
            data.subjects = subjects;
            data.days = days;
            TutorService.register(vm.fields);
        }

        function addSubject() {
            vm.subjects.push({});
        }
    }

})();