(function() {

    angular.module('tp.backend.service')
        .service('TutandService', TutandService);

    TutandService.$inject = ['Restangular'];

    /**
     * A normal user that can be taught by tutors.
     * @typedef {Object} Tutand
     * @property {number} pk_tutor_tutand_id The unique identifier of this tutand
     * @property {string} vorname This tutand's first name
     * @property {string} nachname This tutand's last name
     */

    /**
     * This service provides methods to interact with the server-side REST API regarding all actions concerning tutands.
     * @param {Restangular} Restangular A service providing short-hand methods for Angular's $http service
     * @constructor
     */
    function TutandService(Restangular) {
        var service = this;

        var tutandRest = Restangular.all('tutands');

        service.all = all;
        service.destroy = destroy;

        /**
         * Retrieves the list of tutands.
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function all() {
            return tutandRest.getList();
        }

        /**
         * Deletes the entry of the given tutand.
         * @param {Tutand} tutand The tutand to delete
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function destroy(tutand) {
            return tutand.remove();
        }
    }

})();