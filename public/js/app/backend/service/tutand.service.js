(function() {

    angular.module('tp.backend.service')
        .service('TutandService', TutandService);

    TutandService.$inject = ['Restangular'];

    function TutandService(Restangular) {
        var service = this;

        var tutandRest = Restangular.all('tutands');

        service.all = all;
        service.destroy = destroy;

        function all() {
            return tutandRest.getList();
        }

        function destroy(tutand) {
            return tutand.remove();
        }
    }

})();