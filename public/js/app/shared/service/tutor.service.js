(function() {

    angular.module('tp.shared.service')
        .service('TutorService', TutorService);

    TutorService.$inject = ['Restangular', '$window'];

    function TutorService(Restangular, $window) {
        var service = this;

        var tutorRest = Restangular.all('tutors');

        service.all = all;
        service.one = one;
        service.register = register;
        service.update = update;
        service.destroy = destroy;
        service.report = report;
        service.sendMail = sendMail;
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
            return tutor.remove();
        }

        function report(tutor, report) {
            return tutor.post('report', report);
        }

        function sendMail(tutor, subject, body) {
            var mailto = 'mailto:' + tutor.email_adresse;
            mailto += '?subject=' + encodeURIComponent(subject);
            mailto += '&body=' + encodeURIComponent(body);
            $window.open(mailto);
        }

        function rate(tutor, rating) {
            var data = {
                bewertung: rating.value
            };
            return tutor.post('rate', data);
        }
    }

})();