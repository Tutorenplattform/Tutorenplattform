(function() {

    angular.module('tp.backend.controller')
        .controller('SubjectListController', SubjectListController);

    TeacherListController.$inject = ['subjects', 'SubjectService'];

    function TeacherListController(subjects, SubjectService) {
        var vm = this;

        vm.refreshSubjects = refreshSubjects;

        vm.subjects = [{id: 1, subject_name: 'Subject'}];

        function refreshSubjects() {
            SubjectService.refresh();
        }
    }

})();