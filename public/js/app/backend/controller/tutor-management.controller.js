(function() {

    angular.module('tp.backend.controller')
        .controller('TutorManagementController', TutorManagementController);

    TutorManagementController.$inject = ['tutors', 'TutorService', '$state'];

    /**
     * This controller provides all background functionality for the tutor management page on the backend side of the
     * application.
     * @param {Tutor[]} tutors The list of tutors
     * @param {TutorService} TutorService The data service used to interact with the server-side REST API
     * @param {$state} $state The service used to transition between states
     * @constructor
     */
    function TutorManagementController(tutors, TutorService, $state) {
        var vm = this;

        vm.tutors = tutors;

        vm.viewTutor = viewTutor;
        vm.destroyTutor = destroyTutor;

        /**
         * Navigates to the given tutor's profile.
         * @param {Tutor} tutor The tutor whose profile to navigate to
         */
        function viewTutor(tutor) {
            var params = {
                id: tutor.pk_tutor_tutand_id
            };
            $state.go('backend.tutor', params);
        }

        /**
         * Deletes the given tutor's tutor information. Any non-tutor properties will not be affected.
         * @param {Tutor} tutor The tutor whose profile information to delete
         */
        function destroyTutor(tutor) {
            TutorService.destroy(tutor);
        }
    }

})();