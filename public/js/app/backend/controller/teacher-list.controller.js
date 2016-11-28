(function() {

    angular.module('tp.backend.controller')
        .controller('TeacherListController', TeacherListController);

    TeacherListController.$inject = ['teachers', '$state'];

    function TeacherListController(teachers, $state) {
        var vm = this;

        vm.teachers = [{id: 1, first_name: 'First', last_name: 'Last'}];

        vm.viewTeacher = viewTeacher;

        function viewTutor(teacher) {
            $state.go('teacher', {
                id: teacher.id
            });
        }
    }

})();