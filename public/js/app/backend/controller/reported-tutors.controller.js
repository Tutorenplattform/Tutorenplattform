(function() {

    angular.module('tp.backend.controller')
        .controller('ReportedTutorsController', ReportedTutorsController);

    ReportedTutorsController.$inject = ['reportedTutors', 'ReportService'];

    /**
     * This controller provides all background functionality for the reported tutors page on the backend side of the
     * application.
     * @param {Object.<string, Object>} reportedTutors The list of reported tutors
     * @param {ReportService} ReportService The data service used to interact with the server-side REST API
     * @constructor
     */
    function ReportedTutorsController(reportedTutors, ReportService) {
        var vm = this;

        vm.reportedTutors = [
            {
                vorname: "Hans",
                nachname: "Mustermann",
                pk_tutor_tutand_id: 1,
                kommentare: [
                    "Zu mustermannig!",
                    "Hilft mir eigentlich nciht so wirklich"
                ]
            }, {
                vorname: "Daniel",
                nachname: "Düsentrieb",
                pk_tutor_tutand_id: 2,
                kommentare: [
                    "Hat keinen Plan von irgendwas",
                    "Ähm ähm ähm ähm ähm",
                    "??????????????"
                ]
            }
        ];

        vm.disableTutor = disableTutor;
        vm.ignoreTutor = ignoreTutor;

        /**
         * Disables the given tutor's account. They will still be able to login but their profile will be inaccessible.
         * @param {Object.<string, Object>} tutor The tutor to disable access for
         */
        function disableTutor(tutor) {
            ReportService.disable(tutor).then(disableTutorLocally);

            function disableTutorLocally() {
                tutor.gesperrt = true;
            }
        }

        /**
         * Deletes all reports related to the given tutor. Additionally, if the the tutor has been disabled, they will
         * be reenabled when this method is called.
         * @param {Object.<string, Object>} tutor The tutor whose reports should be ignored
         */
        function ignoreTutor(tutor) {
            ReportService.ignore(tutor).then(removeTutor);

            function removeTutor() {
                _.pull(vm.reportedTutors, tutor);
            }
        }
    }

})();