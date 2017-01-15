(function() {

    angular.module('tp.shared.service')
        .service('TeacherService', TeacherService);

    TeacherService.$inject = ['Restangular'];

    /**
     * A school teacher.
     * @typedef {Object} Teacher
     * @property {number} pk_lehrer_id The unique identifier of this teacher
     * @property {string} vorname The teacher's first name
     * @property {string} nachname The teacher's last name
     */

    /**
     * This service provides methods to interact with the server-side REST API regarding all actions concerning
     * teachers.
     * @param {Restangular} Restangular A service providing short-hand methods for Angular's $http service
     * @constructor
     */
    function TeacherService(Restangular) {
        var service = this;

        //TODO: Fix API endpoint
        var teacherRest = Restangular.all('tutors').all('teachers');

        service.all = all;
        service.refresh = refresh;

        /**
         * Retrieves the list of teachers.
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function all() {
            return teacherRest.getList();
        }

        /**
         * Updates the list of teachers using the data from the Active Directory.
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function refresh() {
            return teacherRest.one('refresh').post({});
        }
    }

})();