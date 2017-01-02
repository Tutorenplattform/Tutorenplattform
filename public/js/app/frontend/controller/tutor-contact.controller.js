(function() {

    angular.module('tp.frontend.controller')
        .controller('TutorContactController', TutorContactController);

    TutorContactController.$inject = ['tutor', '$state', 'TutorService'];

    function TutorContactController(tutor, $state, TutorService) {
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

        vm.sendMail = sendMail;
        vm.returnToProfile = returnToProfile;

        function sendMail() {
            var data = angular.copy(vm.fields);
            TutorService.sendMail(vm.tutor, data.subject, data.body);
            returnToProfile();
        }

        function returnToProfile() {
            $state.go('tutor');
        }
    }

})();