(function() {

    angular.module('tp.shared.service')
        .service('TeacherService', TeacherService);

    TeacherService.$inject = ['Restangular'];

    function TeacherService(Restangular) {
        var service = this;

        var teacherRest = Restangular.all('teachers');

        service.all = all;
        service.refresh = refresh;

        function all() {
            return teacherRest.getList();
        }

        function refresh() {
            return teacherRest.one('refresh').post();
        }
    }

})();