(function() {

    angular.module('tp.frontend.controller')
        .controller('EditTutorProfileController', EditTutorProfileController);

    EditTutorProfileController.$inject = ['$state', 'TutorService', 'tutor', 'teachers', 'subjects'];

    /**
     * This controller provides the background functionality for the editing of tutor profiles on the frontend side of
     * the application.
     * @param {$state} $state The service used to transition between states
     * @param {TutorService} TutorService The data service used to interact with the server-side REST API
     * @param {Tutor} tutor The tutor whose profile should be edited
     * @param {Teacher[]} teachers The list of teachers
     * @param {Subject[]} subjects The list of subjects
     * @constructor
     */
    function EditTutorProfileController($state, TutorService, tutor, teachers, subjects) {
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

        vm.teachers = [
            {pk_lehrer_id: 2, vorname: 'Reinhard', nachname: 'Gottweis'},
            {pk_lehrer_id: 1, vorname: 'Stephan', nachname: 'Javurek'},
            {pk_lehrer_id: 3, vorname: 'Kerstin', nachname: 'Stracke-Weiss'},
            {pk_lehrer_id: 4, vorname: 'Isabella', nachname: 'Fastenbauer'}
        ];

        vm.subjects = [
            {pk_fach_id: 1, name: 'AM'},
            {pk_fach_id: 2, name: 'E'}
        ];

        vm.saveChanges = saveChanges;
        vm.addSubject = addSubject;
        vm.removeSubject = removeSubject;
        vm.returnToProfile = returnToProfile;

        //init();

        function init() {
            _.each(vm.tutor.faecher, reduceTeacher);
            vm.tutor.letzte_zeugnisnote = vm.tutor.letzte_zeugnisnote + '';

            function reduceTeacher(fach) {
                fach.lehrer = fach.lehrer.pk_lehrer_id;
            }
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
            vm.subjects.push({});
        }

        /**
         * Removes the subject slot with the given index from the list of subjects the tutor is willing to teach.
         * @param {number} index The index of the subject to remove
         */
        function removeSubject(index) {
            vm.subjects.splice(index, 1);
        }

        /**
         * Redirects the tutor back to their normal profile page.
         */
        function returnToProfile() {
            $state.go('tutor');
        }
    }

})();