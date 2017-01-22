(function() {

    angular.module('tp.backend.controller')
        .controller('SubjectListController', SubjectListController);

    SubjectListController.$inject = ['subjects', 'SubjectService'];

    function SubjectListController(subjects, SubjectService) {
        var vm = this;

        vm.refreshSubjects = refreshSubjects;

        vm.subjects = subjects;

        function refreshSubjects() {
            SubjectService.refresh();
        }
    }

})();