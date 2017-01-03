(function() {

    angular.module('tp.backend.service')
        .service('ReportService', ReportService);

    ReportService.$inject = ['Restangular'];

    function ReportService(Restangular) {
        var service = this;

        var tutorRest = Restangular.all('tutors');

        service.all = all;
        service.disable = disable;
        service.ignore = ignore;

        function all() {
            return tutorRest.all('reported').getList();
        }

        function disable(tutor) {
            return tutor.post('disable', {});
        }

        function ignore(tutor) {
            return tutor.post('ignore', {});
        }
    }

})();