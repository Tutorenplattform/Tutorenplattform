(function() {

    angular.module('tp.backend.service')
        .service('SubjectService', SubjectService);

    SubjectService.$inject = ['Restangular'];

    function SubjectService(Restangular) {
        var service = this;

        var subjectRest = Restangular.all('subjects');

        service.all = all;
        service.create = create;
        service.destroy = destroy;

        function all() {
            return subjectRest.getList();
        }

        function create(subject) {
            return subjectRest.post(subject);
        }

        function destroy(subject) {
            return subject.remove();
        }
    }

})();