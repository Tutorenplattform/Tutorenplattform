(function() {

    angular.module('tp.shared.controller')
        .controller('TutorProfileController', TutorProfileController);

    TutorProfileController.$inject = ['tutor', '$state', 'TutorService', 'Grade', 'Rating', 'Authentication'];

    /**
     * This controller provides the background functionality for tutor profile pages on the frontend side of the
     * application.
     * @param {Tutor} tutor The tutor whose profile to show
     * @param {$state} $state The service used to transition between states
     * @param {TutorService} TutorService The data service used to interact with the server-side REST API
     * @param {Grade} Grade An enumeration of all possible (Austrian) subject grades.
     * @param {Rating} Rating An enumeration of all possible ratings for tutors.
     * @param {Authentication} Authentication The service used to interact with the current user session
     * @constructor
     */
    function TutorProfileController(tutor, $state, TutorService, Grade, Rating, Authentication) {
        var vm = this;

        vm.tutor = {
            vorname: "Hans",
            nachname: "Müller",
            klasse: "5BI",
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
            bewertung_gut: 6,
            bewertung_neutral: 2,
            bewertung_schlecht: 1,
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
            vm.admin = Authentication.isAdmin();
            vm.mine = Authentication.canManage(vm.tutor.pk_tutor_tutand_id) || vm.admin;
        }

        /**
         * Redirects the user to a page where they can then file a report.
         */
        function report() {
            $state.go('tutor.report');
        }

        /**
         * Sends an API request to (re)rate the currently shown tutor. If the rating has already been cast, it is
         * retracted instead.
         * @param {Rating} rating The rating the user has cast
         */
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

        /**
         * Returns whether or not casting the given rating is currently allowed.
         * @param {Rating} rating The rating to check for
         * @returns {boolean} true if the given rating can still be cast, false otherwise
         */
        function enableRating(rating) {
            if (!vm.tutor.bewertung) {
                return true;
            }
            return vm.tutor.bewertung === rating.value;
        }

        /**
         * Redirects the tutor to a page where they can then edit their own profile.
         */
        function editProfile() {
            var state = 'tutor.edit';
            if (vm.admin) {
                state = 'backend.' + state;
            }
            $state.go(state);
        }

        /**
         * Redirects the user to a page with a contact form where they can then send a mail to the current tutor.
         */
        function sendMail() {
            $state.go('tutor.contact');
        }
    }

})();