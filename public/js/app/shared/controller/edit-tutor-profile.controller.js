(function() {

    angular.module('tp.shared.controller')
        .controller('EditTutorProfileController', EditTutorProfileController);

    EditTutorProfileController.$inject = ['$state', 'TutorService', 'tutor', 'teachers', 'subjects', 'Authentication'];

    /**
     * This controller provides the background functionality for the editing of tutor profiles on the frontend side of
     * the application.
     * @param {$state} $state The service used to transition between states
     * @param {TutorService} TutorService The data service used to interact with the server-side REST API
     * @param {Tutor} tutor The tutor whose profile should be edited
     * @param {Teacher[]} teachers The list of teachers
     * @param {Subject[]} subjects The list of subjects
     * @param {Authentication} Authentication The service used to interact with the current active user session
     * @memberOf tp.shared.controller
     * @constructor
     */
    function EditTutorProfileController($state, TutorService, tutor, teachers, subjects, Authentication) {
        var vm = this;

        vm.tutor = tutor;

        vm.teachers = teachers;

        vm.subjects = subjects;

        vm.saveChanges = saveChanges;
        vm.addSubject = addSubject;
        vm.removeSubject = removeSubject;
        vm.returnToProfile = returnToProfile;

        init();

        function init() {
            _.each(vm.tutor.faecher, subjectIterator);

            function subjectIterator(fach) {
                fach.letzte_zeugnisnote = fach.letzte_zeugnisnote + '';
            }

            vm.admin = Authentication.isAdmin();
        }

        /**
         * Saves the changes that were made in the vie model and sends an appropriate request to the REST API.
         * Afterwards, the tutor will be redirected back to his profile.
         * @see returnToProfile
         */
        function saveChanges() {
            vm.tutor.letzte_zeugnisnote = +vm.tutor.letzte_zeugnisnote;
            TutorService.update(vm.tutor).then(returnToProfile);
        }

        /**
         * Adds a new subject slot to the list of the subjects the tutor is willing to teach.
         */
        function addSubject() {
            vm.tutor.faecher.push({});
        }

        /**
         * Removes the subject slot with the given index from the list of subjects the tutor is willing to teach.
         * @param {number} index The index of the subject to remove
         */
        function removeSubject(index) {
            vm.tutor.faecher.splice(index, 1);
        }

        /**
         * Redirects the tutor back to their normal profile page.
         */
        function returnToProfile() {
            var state = 'tutor';
            if (vm.admin) {
                state = 'backend.' + state;
            }
            $state.go(state);
        }
    }

})();