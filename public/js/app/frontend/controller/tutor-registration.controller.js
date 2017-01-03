(function() {

    angular.module('tp.frontend.controller')
        .controller('TutorRegistrationController', TutorRegistrationController);

    TutorRegistrationController.$inject = ['$state', 'TutorService', 'teachers', 'subjects', 'Authentication'];

    /**
     * This controller provides the background functionality for the tutor registration page on the frontend side of the
     * application.
     * @param {$state} $state The service used to transition between states.
     * @param {TutorService} TutorService The data service used to interact with the server-side REST API
     * @param {Teacher[]} teachers The list of teachers
     * @param {Subject[]} subjects The list of subjects
     * @param {Authentication} Authentication The service used to interact with the current user session
     * @constructor
     */
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

        /**
         * Registers the new tutor using the data in the view model. Afterwards, the tutor will be redirected to their
         * new profile.
         */
        function register() {
            var data = angular.copy(vm.fields);
            _.each(data.faecher, castGrade);
            TutorService.register(data).then(onTutorRegistered);

            function castGrade(fach) {
                fach.letzte_zeugnisnote = +fach.letzte_zeugnisnote;
            }

            function onTutorRegistered() {
                Authentication.promote();
                var id = Authentication.getAccountInfo().id;
                var params = {
                    id: id
                };
                $state.go('tutor', params);
            }
        }

        /**
         * Adds a new subject slot to the list of the subjects the tutor is willing to teach.
         */
        function addSubject() {
            vm.fields.faecher.push({});
        }

        /**
         * Removes the subject slot with the given index from the list of subjects the tutor is willing to teach.
         * @param {number} index The index of the subject to remove
         */
        function removeSubject(index) {
            vm.fields.faecher.splice(index, 1);
        }
    }

})();