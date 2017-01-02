(function() {

    angular.module('tp.backend.service')
        .service('AdministratorService', AdministratorService);

    AdministratorService.$inject = ['Restangular'];

    function AdministratorService(Restangular) {
        var service = this;

        var adminRest = Restangular.all('admin');
        var resetRest = Restangular.all('reset');

        service.getOptions = getOptions;
        service.saveOptions = saveOptions;
        service.resetApplication = resetApplication;

        function getOptions() {
            return adminRest.getList();
        }

        function saveOptions(options) {
            return adminRest.customPUT(options);
        }

        function resetApplication() {
            return resetRest.customPOST({});
        }
    }

})();