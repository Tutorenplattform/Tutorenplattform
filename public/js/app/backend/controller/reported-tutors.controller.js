(function() {

    angular.module('tp.backend.controller')
        .controller('ReportedTutorsController', ReportedTutorsController);

    ReportedTutorsController.$inject = ['reportedTutors', 'ReportService'];

    /**
     * This controller provides all background functionality for the reported tutors page on the backend side of the
     * application.
     * @param {ReportedTutor[]} reportedTutors The list of reported tutors
     * @param {ReportService} ReportService The data service used to interact with the server-side REST API
     * @memberOf tp.backend.controller
     * @constructor
     */
    function ReportedTutorsController(reportedTutors, ReportService) {
        var vm = this;

        vm.reportedTutors = reportedTutors;

        vm.disableTutor = disableTutor;
        vm.ignoreTutor = ignoreTutor;

        /**
         * Disables the given tutor's account.
         * @see ReportService#disable
         * @param {ReportedTutor} tutor The tutor to disable access for
         */
        function disableTutor(tutor) {
            ReportService.disable(tutor).then(disableTutorLocally);

            function disableTutorLocally() {
                tutor.isDeaktiviert = true;
            }
        }

        /**
         * Deletes all reports related to the given tutor.
         * @see ReportService#ignore
         * @param {ReportedTutor} tutor The tutor whose reports should be ignored
         */
        function ignoreTutor(tutor) {
            ReportService.ignore(tutor).then(removeTutor);

            function removeTutor() {
                _.pull(vm.reportedTutors, tutor);
            }
        }
    }

})();