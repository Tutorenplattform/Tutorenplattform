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
        service.report = report;
        service.rate = rate;

        function all(constraints) {
            return tutorRest.customGET('', constraints);
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

        function report(tutor, report) {
            return tutor.one('report').post(report);
        }

        function rate(tutor, rating) {
            return tutor.one('rate').post(rating);
        }
    }

})();