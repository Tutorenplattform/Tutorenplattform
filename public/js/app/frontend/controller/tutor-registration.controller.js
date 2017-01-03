(function() {

    angular.module('tp.frontend.controller')
        .controller('TutorRegistrationController', TutorRegistrationController);

    TutorRegistrationController.$inject = ['$state', 'TutorService', 'teachers', 'subjects', 'Authentication'];

    function TutorRegistrationController($state, TutorService, teachers, subjects, Authentication) {
        var vm = this;

        vm.fields = {
            faecher: [{}]
        };

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
            var data = angular.copy(vm.fields);
            _.each(data.faecher, castGrade);
            TutorService.register(data).then(forwardToProfile);

            function castGrade(fach) {
                fach.letzte_zeugnisnote = +fach.letzte_zeugnisnote;
            }

            function forwardToProfile() {
                var params = {
                    id: id
                };
                $state.go('tutor', params);
            }
        }

        function addSubject() {
            vm.fields.faecher.push({});
        }

        function removeSubject(index) {
            vm.fields.faecher.splice(index, 1);
        }
    }

})();