(function() {

    angular.module('tp.backend.service')
        .service('AdministratorService', AdministratorService);

    AdministratorService.$inject = ['Restangular'];

    /**
     * A set of administrator options.
     * @typedef {Object} Options
     * @property {string} email_adresse The e-mail address of the administrator
     */

    /**
     * This service provides methods to interact with the server-side REST API regarding all actions concerning
     * administrator option actions.
     * @param {Restangular} Restangular A service providing short-hand methods for Angular's $http service
     * @memberOf tp.backend.service
     * @constructor
     */
    function AdministratorService(Restangular) {
        var service = this;

        var adminRest = Restangular.all('admin');
        var resetRest = Restangular.all('reset');

        service.getOptions = getOptions;
        service.saveOptions = saveOptions;
        service.resetApplication = resetApplication;

        /**
         * Retrieves the current list of administrator options.
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function getOptions() {
            return adminRest.getList();
        }

        /**
         * Updates the administrator options using the given options set.
         * @param {Options} options The new administrator options set
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function saveOptions(options) {
            return adminRest.customPUT(options);
        }

        /**
         * Resets the application. This process involves removing all tutor and tutand accounts from the server (but not
         * from the Active Directory).
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function resetApplication() {
            return resetRest.customPOST({});
        }
    }

})();