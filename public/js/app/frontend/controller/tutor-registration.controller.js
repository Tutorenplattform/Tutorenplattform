(function() {

    angular.module('tp.frontend.controller')
        .controller('TutorRegistrationController', TutorRegistrationController);

    TutorRegistrationController.$inject = ['$state', 'TutorService', 'teachers', 'subjects', 'Authentication'];

    function TutorRegistrationController($state, TutorService, teachers, subjects, Authentication) {
        var vm = this;

        vm.fields = {};

        vm.teachers = [
            {pk_lehrer_id: 1, vorname: 'Reinhard', nachname: 'Gottweis'},
            {pk_lehrer_id: 2, vorname: 'Stephan', nachname: 'Javurek'},
            {pk_lehrer_id: 3, vorname: 'Kerstin', nachname: 'Stracke-Weiss'},
            {pk_lehrer_id: 4, vorname: 'Isabella', nachname: 'Fastenbauer'}
        ];

        vm.subjects = [
            {pk_fach_id: 1, name: 'AM'},
            {pk_fach_id: 2, name: 'E'}
        ];

        vm.register = register;
        vm.addSubject = addSubject;
        vm.removeSubject = removeSubject;

        function register() {
            var id = Authentication.getAccountInfo().pk_tutor_tutand_id;
            var data = angular.copy(vm.fields);
            data.tutand = id;
            TutorService.register(data).then(forwardToProfile);

            function forwardToProfile() {
                var params = {
                    id: id
                };
                $state.go('tutor', params);
            }
        }

        function addSubject() {
            vm.subjects.push({});
        }

        function removeSubject(index) {
            vm.subjects.splice(index, 1);
        }
    }

})();