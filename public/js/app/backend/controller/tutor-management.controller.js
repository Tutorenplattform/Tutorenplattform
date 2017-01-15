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

        vm.tutors = [{
            vorname: "Hans",
            nachname: "Mustermann",
            klasse: "4AM",
            pk_tutor_tutand_id: 1,
            faecher: [{
                fach: {
                    pk_fach_id: 1,
                    name: 'AM'
                },
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
        }];

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