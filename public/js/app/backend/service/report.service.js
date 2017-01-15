(function() {

    angular.module('tp.backend.service')
        .service('ReportService', ReportService);

    ReportService.$inject = ['Restangular'];

    /**
     * A tutor that has been reported.
     * @typedef {Object} ReportedTutor
     * @property {number} pk_tutor_tutand_id The unique identifier of the reported tutor
     * @property {string} vorname The reported tutor's first name
     * @property {string} nachname The reported tutor's last name
     * @property {string[]} kommentare A list of all reasoning comments made by the users who reported the tutor
     */

    /**
     * This service provides methods to interact with the server-side REST API regarding all actions concerning
     * reported tutors.
     * @param {Restangular} Restangular A service providing short-hand methods for Angular's $http service
     * @memberOf tp.backend.service
     * @constructor
     */
    function ReportService(Restangular) {
        var service = this;

        var tutorRest = Restangular.all('tutors');

        service.all = all;
        service.disable = disable;
        service.ignore = ignore;

        /**
         * Retrieves a list of all tutors that have one or more reports on them.
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function all() {
            return tutorRest.all('reported').getList();
        }

        /**
         * Disables the given tutor's account. They will still be able to login but their profile will be inaccessible.
         * @param {ReportedTutor} tutor The reported tutor whose account should be disabled
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function disable(tutor) {
            return tutor.post('disable', {});
        }

        /**
         * Deletes all reports related to the given tutor. Additionally, if the the tutor has been disabled, they will
         * be reenabled instead.
         * @param {ReportedTutor} tutor The reported tutor whose reports should be ignored
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function ignore(tutor) {
            return tutor.post('ignore', {});
        }
    }

})();