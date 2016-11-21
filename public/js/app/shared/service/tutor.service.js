(function() {

    angular.module('tp.shared.service')
        .service('TutorService', TutorService);

    TutorService.$inject = ['Restangular'];

    function TutorService(Restangular) {
        var service = this;

        var tutorRest = Restangular.all('tutors');

        service.all = all;
        service.one = one;
        service.register = register;
        service.update = update;
        service.destroy = destroy;

        function all() {
            return tutorRest.getList();
        }

        function one(id) {
            return tutorRest.one(id);
        }

        function register(tutor) {
            return tutorRest.post(tutor);
        }

        function update(tutor) {
            return tutor.put();
        }

        function destroy(tutor) {
            return tutor.delete();
        }
    }

})();