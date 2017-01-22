(function() {

    angular.module('tp.frontend.controller')
        .controller('TutorListController', TutorListController);

    TutorListController.$inject = ['tutors', '$state'];

    /**
     * This controller provides the background functionality for the list of tutors on the frontend side of the
     * application.
     * @param {Tutor[]} tutors The list of tutors
     * @param {$state} $state The service used to transition between states
     * @memberOf tp.frontend.controller
     * @constructor
     */
    function TutorListController(tutors, $state) {
        var vm = this;

        vm.tutors = tutors;

        vm.viewTutor = viewTutor;
        vm.getSubjects = getSubjects;
        vm.applyFilter = applyFilter;

        init();

        function init() {
            vm.uniqueClass   = _.uniq(_.map(vm.tutors, 'klasse'));
            vm.uniqueSubject = _.uniq(_.map((_.flatten(_.map(vm.tutors, 'faecher'))), 'fach.name'));

            _.flatten(_.map(vm.tutors, 'faecher'));

            vm.show = true;
        }

        /**
         * Applies the filters set in the view model and updates the tutor list according to the results.
         */
        function applyFilter() {
            vm.results = [];

            var searchField = "nachname",
                searchField2 = "klasse",
                searchField3 = "name";


            var search         = vm.searchName,
                search_class   = vm.searchClass,
                search_subject = vm.searchSubject;

            var hasSearch         = !(search == null || search == ''),
                hasSearch_class   = !(search_class == null || search_class == ''),
                hasSearch_subject = !(search_subject == null || search_subject == '');

            vm.filter = hasSearch || hasSearch_class || search_subject;

            for (var i = 0; i < vm.tutors.length ; i++) {
                for(var j = 0; j <vm.tutors[i].faecher.length; j++) {
                    if (
                        (!hasSearch || vm.tutors[i][searchField] == search) &&
                        (!hasSearch_class ||vm.tutors[i][searchField2] == search_class) &&
                        (!hasSearch_subject || vm.tutors[i].faecher[j].fach[searchField3] == search_subject)
                    ) {
                        vm.results.push(vm.tutors[i]);
                        vm.show = false;
                    }
                }
            }
        }

        /**
         * Redirects the user to the given tutor's profile.
         * @param {Tutor} tutor The tutor whose profile the user would like to see
         */
        function viewTutor(tutor) {
            $state.go('tutor', {
                id: tutor.pk_tutor_tutand_id
            });
        }

        /**
         * Processes the list of the subjects the given tutor teaches and returns it as a string.
         * @param {Tutor} tutor The tutor whose list of subjects should be processed into a string
         * @returns {string} A comma-separated list of subject names as a string
         */
        function getSubjects(tutor) {
            var subjects = _.map(tutor.faecher, 'fach.name');
            return subjects.join(', ');
        }
    }

})();