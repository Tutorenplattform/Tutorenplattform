(function() {

    angular.module('tp.backend.service')
        .service('SubjectService', SubjectService);

    SubjectService.$inject = ['Restangular'];

    /**
     * A school subject.
     * @typedef {Object} Subject
     * @property {number} pk_fach_id The unique identifier of this subject
     * @property {string} name The name of this subject
     */

    /**
     * This service provides methods to interact with the server-side REST API regarding all actions concerning
     * school subjects.
     * @param {Restangular} Restangular A service providing short-hand methods for Angular's $http service
     * @memberOf tp.backend.service
     * @constructor
     */
    function SubjectService(Restangular) {
        var service = this;

        var subjectRest = Restangular.all('subjects');

        service.all = all;
        service.create = create;
        service.destroy = destroy;

        /**
         * Retrieves the current list of subjects.
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function all() {
            return subjectRest.getList();
        }

        /**
         * Creates a new subject using the given object.
         * @param {Subject} subject The object containing the necessary data for creating a new subject
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function create(subject) {
            return subjectRest.post(subject);
        }

        /**
         * Deletes the entry of the given subject.
         * @param {Subject} subject The subject to delete
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function destroy(subject) {
            return subject.remove();
        }
    }

})();