(function() {

    angular.module('tp.frontend.controller')
        .controller('TutorListController', TutorListController);

    TutorListController.$inject = ['tutors', '$state'];

    /**
     * This controller provides the background functionality for the list of tutors on the frontend side of the
     * application.
     * @param {Tutor[]} tutors The list of tutors
     * @param {$state} $state The service used to transition between states
     * @constructor
     */
    function TutorListController(tutors, $state) {
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
            bewertung_schlecht: 0
        }];

        vm.viewTutor = viewTutor;
        vm.getSubjects = getSubjects;

        /**
         * Redirects the user to the given tutor's profile.
         * @param tutor The tutor whose profile the user would like to see
         */
        function viewTutor(tutor) {
            $state.go('tutor', {
                id: tutor.id
            });
        }

        /**
         * Processes the list of the subjects the given tutor teaches and returns it as a string.
         * @param tutor The tutor whose list of subjects should be processed into a string
         * @returns {string} A comma-separated list of subject names as a string
         */
        function getSubjects(tutor) {
            var subjects = _.map(tutor.faecher, 'fach.name');
            return subjects.join(', ');
        }
    }

})();