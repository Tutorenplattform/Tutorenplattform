(function() {

    angular.module('tp.shared.service')
        .service('TutorService', TutorService);

    TutorService.$inject = ['Restangular', '$window'];

    /**
     * A tutor user teaching tutands.
     * @typedef {Object} Tutor
     * @property {number} pk_tutor_tutand_id The unique identifier of this tutor
     * @property {string} vorname This tutor's first name
     * @property {string} nachname This tutor's last name
     * @property {string} klasse The school class the tutor is currently attending
     * @property {TutorSubject[]} faecher The list of subjects the tutor is teaching
     * @property {string} klassenvorstand The class teacher of the tutor's class
     * @property {?string} bevorzugte_orte The places the tutor likes to teach at
     * @property {?string} bevorzugte_zeiten The times the tutor likes to teach at
     * @property {?string} telefon_nr The tutor's phone number
     * @property {string} email_adresse The tutor's email address
     * @property {number} bewertung_gut The number of great ratings this tutor has gotten
     * @property {number} bewertung_neutral The number of okay ratings this tutor has gotten
     * @property {number} bewertung_schlecht The number of bad ratings this tutor has gotten
     * @property {?string} bewertung The authenticated user's current rating for this tutor
     * @property {boolean} isDeaktiviert Whether or not this tutor has been disabled
     */

    /**
     * A subject a tutor is teaching.
     * @typedef {Object} TutorSubject
     * @property {Subject} fach The subject the tutor is teaching
     * @property {Teacher} lehrer The teacher currently teaching the tutor in the given subject
     * @property {?string} faehigkeiten_anmerkung A comment about the tutor's abilities
     * @property {number} letzte_zeugnisnote The tutor's last grade in the given subject
     */

    /**
     * A list of filtering options for retrieving tutors. At least one of the three properties must be set.
     * @typedef {Object} TutorQueryConstraints
     * @property {?string} klasse When set, only tutors with the given school class will be returned
     * @property {?string} name When set, only tutors whose names are matching this query will be returned
     * @property {?Subject} faecher When set, only tutors that teach the given subject will be returned
     */

    /**
     * A report on a tutor.
     * @typedef {Object} TutorReport
     * @property {string} kommentar A comment outlining why the tutor was reported
     */

    /**
     * This service provides methods to interact with the server-side REST API regarding all actions concerning tutors.
     * @param {Restangular} Restangular A service providing short-hand methods for Angular's $http service
     * @param {$window} $window Angular's wrapper around the global window object
     * @memberOf tp.shared.service
     * @constructor
     */
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

        /**
         * Retrieves the list of tutors.
         * @param {TutorQueryConstraints=} constraints Optional filters for narrowing down the list of tutors
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function all(constraints) {
            return tutorRest.customGET('', constraints);
        }

        /**
         * Retrieves information about a single tutor with the given id.
         * @param {number} id The unique identifier of the tutor to retrieve
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function one(id) {
            return tutorRest.one(id);
        }

        /**
         * Registers a new tutor using the given object.
         * @param {Tutor} tutor The object containing the necessary data for registering a new tutor
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function register(tutor) {
            return tutorRest.post(tutor);
        }

        /**
         * Updates the given tutor's entry in the database.
         * @param {Tutor} tutor A modified tutor object
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function update(tutor) {
            return tutor.put();
        }

        /**
         * Deletes the entry of the given tutor.
         * @param {Tutor} tutor The tutor to delete
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function destroy(tutor) {
            return tutor.remove();
        }

        /**
         * Reports the given tutor using the provided report.
         * @param {Tutor} tutor The tutor to report
         * @param {TutorReport} report The object containing the necessary data for reporting the given tutor
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function report(tutor, report) {
            return tutor.post('report', report);
        }

        /**
         * Prepares an email to send at the tutor's email address using the subject and body provided.
         * @param {Tutor} tutor The recipient of the email
         * @param {string} subject The email's subject content
         * @param {string} body The email's body content
         */
        function sendMail(tutor, subject, body) {
            var mailto = 'mailto:' + tutor.email_adresse;
            mailto += '?subject=' + encodeURIComponent(subject);
            mailto += '&body=' + encodeURIComponent(body);
            $window.open(mailto);
        }

        /**
         * Casts the provided rating on the given tutor.
         * @param {Tutor} tutor The tutor to rate
         * @param {Rating} rating The rating to cast
         * @returns {Promise} A promise that finishes upon receiving the HTTP response
         */
        function rate(tutor, rating) {
            var data = {
                bewertung: rating.value
            };
            return tutor.post('rate', data);
        }
    }

})();