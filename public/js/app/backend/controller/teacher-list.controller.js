(function() {

    angular.module('tp.backend.controller')
        .controller('TeacherListController', TeacherListController);

    TeacherListController.$inject = ['teachers', 'TeacherService'];

    function TeacherListController(teachers, TeacherService) {
        var vm = this;

        vm.refreshTeachers = refreshTeachers;

        vm.teachers = [
            {pk_lehrer_id: 2, vorname: 'Reinhard', nachname: 'Gottweis'},
            {pk_lehrer_id: 1, vorname: 'Stephan', nachname: 'Javurek'},
            {pk_lehrer_id: 3, vorname: 'Kerstin', nachname: 'Stracke-Weiss'},
            {pk_lehrer_id: 4, vorname: 'Isabella', nachname: 'Fastenbauer'}
        ];

        function refreshTeachers() {
            TeacherService.refresh();
        }
    }

})();