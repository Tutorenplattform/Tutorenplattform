(function() {

    angular.module('tp.backend.controller')
        .controller('TeacherListController', TeacherListController);

    TeacherListController.$inject = ['teachers', 'TeacherService'];

    /**
     * This controller provides all background functionality for the list of teachers on the backend side of the
     * application.
     * @param {Teacher[]} teachers The list of teachers
     * @param {TeacherService} TeacherService The data service used to interact with the server-side REST API
     * @memberOf tp.backend.controller
     * @constructor
     */
    function TeacherListController(teachers, TeacherService) {
        var vm = this;

        vm.refreshTeachers = refreshTeachers;

        vm.teachers = teachers;

        /**
         * Updates the list of teachers by fetching new entries form the Active Directory.
         * @see TeacherService#refresh
         */
        function refreshTeachers() {
            TeacherService.refresh();
        }
    }

})();