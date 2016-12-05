(function() {

    angular.module('tp.backend.controller')
        .controller('TeacherListController', TeacherListController);

    TeacherListController.$inject = ['teachers', 'TeacherService'];

    function TeacherListController(teachers, TeacherService) {
        var vm = this;

        vm.refreshTeachers = refreshTeachers;

        vm.teachers = [{id: 1, first_name: 'First', last_name: 'Last'}];

        function refreshTeachers() {
            TeacherService.refresh();
        }
    }

})();