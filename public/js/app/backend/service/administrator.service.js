(function() {

    angular.module('tp.backend.service')
        .service('AdministratorService', AdministratorService);

    AdministratorService.$inject = ['Restangular'];

    function AdministratorService(Restangular) {
        var service = this;

        var adminRest = Restangular.all('admin');

        service.getOptions = getOptions;
        service.saveOptions = saveOptions;

        function getOptions() {
            return adminRest.getList();
        }

        function saveOptions(options) {
            return options.put();
        }
    }

})();