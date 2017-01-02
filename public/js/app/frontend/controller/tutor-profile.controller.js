(function() {

    angular.module('tp.frontend.controller')
        .controller('TutorProfileController', TutorProfileController);

    TutorProfileController.$inject = ['tutor', '$state', 'TutorService', 'Grade', 'Rating', 'Authentication'];

    function TutorProfileController(tutor, $state, TutorService, Grade, Rating, Authentication) {
        var vm = this;

        vm.tutor = {
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
        };

        vm.Grade = Grade;
        vm.Rating = Rating;

        vm.report = report;
        vm.rate = rate;
        vm.enableRating = enableRating;
        vm.editProfile = editProfile;
        vm.sendMail = sendMail;

        init();

        function init() {
            vm.mine = Authentication.canManage(vm.tutor);
        }

        function report() {
            $state.go('tutor.report');
        }

        function rate(rating) {
            var alreadyRated = (vm.tutor.bewertung === rating.value);
            if (alreadyRated) {
                TutorService.rate(vm.tutor, Rating.NONE).then(onTutorRatingRemoved);
            } else {
                TutorService.rate(vm.tutor, rating).then(onTutorRatingCast);
            }

            function onTutorRatingCast() {
                vm.tutor.bewertung = rating.value;
                vm.tutor[rating.countKey]++;
            }

            function onTutorRatingRemoved() {
                vm.tutor.bewertung = Rating.NONE.value;
                vm.tutor[rating.countKey]--;
            }
        }

        function enableRating(rating) {
            if (!vm.tutor.bewertung) {
                return true;
            }
            return vm.tutor.bewertung === rating.value;
        }

        function editProfile() {
            $state.go('tutor.edit');
        }

        function sendMail() {
            $state.go('tutor.contact');
        }
    }

})();