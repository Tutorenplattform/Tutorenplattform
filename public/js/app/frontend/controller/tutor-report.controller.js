(function() {

    angular.module('tp.frontend.controller')
        .controller('TutorReportController', TutorReportController);

    TutorReportController.$inject = ['tutor', '$state', 'TutorService'];

    /**
     * This controller provides the background functionality for the tutor report page on the frontend side of the
     * application.
     * @param {Object.<string, Object>} tutor The tutor the user wishes to report
     * @param {$state} $state The service used to transition between states
     * @param {TutorService} TutorService The data service used to interact with the server-side REST API
     * @constructor
     */
    function TutorReportController(tutor, $state, TutorService) {
        var vm = this;

        vm.tutor = {
            vorname: "Hans",
            nachname: "Mustermann",
            klasse: "4AM",
            pk_tutor_tutand_id: 1,
            faecher: [{
                fach: 'AM',
                lehrer: {
                    pk_lehrer_id: 2,
                    vorname: 'Reinhard',
                    nachname: 'Gottweis'
                },
                faehigkeiten_anmerkung: 'Gut im Berechnen von quadratischen Funktionen',
                letzte_zeugnisnote: 2
            }],
            klassenvorstand: 'STR',
            bevorzugte_orte: '2. Stock, in der Ecke',
            bevorzugte_zeiten: '13:25-14:15 Uhr',
            telefon_nr: '1234 567 89 00',
            email_adresse: 'hans@musterma.nn',
            bewertung_gut: 3,
            bewertung_neutral: 1,
            bewertung_schlecht: 0,
            bewertung: null
        };

        vm.fields = {};

        vm.report = report;
        vm.returnToProfile = returnToProfile;

        /**
         * Sends an API request to report the current tutor with the attached comment from the view model. Afterwards,
         * the used will be redirected to the profile of the tutor they just reported.
         * @see returnToProfile
         */
        function report() {
            var report = angular.copy(vm.fields);
            TutorService.report(vm.tutor, report).then(returnToProfile);
        }

        /**
         * Redirects the user back to the current tutor's profile.
         */
        function returnToProfile() {
            $state.go('tutor');
        }
    }

})();