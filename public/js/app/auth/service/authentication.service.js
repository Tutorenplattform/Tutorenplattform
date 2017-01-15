(function() {

    angular.module('tp.auth.service')
        .service('Authentication', Authentication);

    Authentication.$inject = ['$auth', '$state', 'Globals', 'UserType'];

    /**
     * A Number or a String that can be cast into a Number.
     * @typedef {number|string} Numeric
     */

    /**
     * A set of credentials used for JWT authentication login.
     * @typedef {Object} Credentials
     * @property {string} user_name The Active Directory username to use for login
     * @property {string} passwort The Active Directory password to use for login
     */

    /**
     * The expected payload of the JWT token used for authentication.
     * @typedef {Object} TokenPayload
     * @property {number} pk_tutor_tutand_id The user's unique identifier
     * @property {UserType} type The type of this user
     * @property {string} vorname This user's first name
     * @property {string} nachname This user's last name
     */

    /**
     * This service is used to interact with the current user session. It is responsible for account login, account
     * logout, permission management and account information retrieval.
     * @param {$auth} $auth The satellizer service used for all requests concerning JWT token authentication and
     * localStorage token management
     * @param {$state} $state The service used to transition between states
     * @param {Globals} Globals The application's global configuration object
     * @param {UserType} UserType An enumeration containing all types of users
     * @constructor
     */
    function Authentication($auth, $state, Globals, UserType) {
        var service = this;

        service.initialize = initialize;
        service.login = login;
        service.logout = logout;
        service.promote = promote;
        service.getHome = getHome;
        service.getAccountInfo = getAccountInfo;
        service.isAuthenticated = isAuthenticated;
        service.canManage = canManage;
        service.isAdmin = isAdmin;
        service.getSide = getSide;

        var account;

        /**
         * The initialization method that must be called whenever the application is first opened.
         */
        function initialize(token) {
            //TODO: Remove brake
            if (typeof token !== 'undefined') {
                $auth.setToken(token);
            }
            refreshAccount();
        }

        /**
         * Attempts to log in the user with the given credentials. Afterwards, the user is redirected to their home
         * page.
         * @see forwardToHome
         * @param {Credentials} credentials The credentials to use for login
         * @returns {Promise} A promise that finishes upon login
         */
        function login(credentials) {
            return $auth.login(credentials).then(refreshAccount).then(forwardToHome);
        }

        /**
         * Updates the current session object using the payload of the JWT token if authenticated.
         */
        function refreshAccount() {
            if (isAuthenticated()) {
                account = $auth.getPayload();
            } else {
                account = void 0;
            }
        }

        /**
         * Attempts to log out the current user. Afterwards, the user is redirected to the login page.
         * @see forwardToHome
         * @returns {Promise} A promise that finishes upon logout
         */
        function logout() {
            return $auth.logout().then(refreshAccount).then(forwardToHome);
        }

        /**
         * Promotes the current user to a tutor without invalidating the current session.
         */
        function promote() {
            if (isAuthenticated()) {
                account.type = UserType.Tutor;
            }
        }

        /**
         * Retrieves the name of the home page state for the current user.
         * @returns {string} The state name of the home page
         */
        function getHome() {
            var homes = Globals.homes;
            var account = getAccountInfo();
            var forwardState = homes.unauthenticated;
            if (account) {
                forwardState = homes[getSide()];
            }
            return forwardState;
        }

        /**
         * Redirects the current user to their home page. If they are unauthenticated, the login page is considered
         * their home and they will be redirected there.
         */
        function forwardToHome() {
            $state.go(getHome());
        }

        /**
         * Retrieves the account information from the localStorage JWT token payload data.
         * @returns {TokenPayload|undefined} The user token payload or undefined if the user is not authenticated
         */
        function getAccountInfo() {
            if (!isAuthenticated()) {
                return;
            }
            return account;
        }

        /**
         * Returns whether or not the user is currently authenticated.
         * @returns {boolean} true if the user is logged in, false otherwise
         */
        function isAuthenticated() {
            return $auth.isAuthenticated();
        }

        /**
         * Returns whether or not the current user is allowed to manage content associated with the given ID.
         * @param {Numeric} neededId The needed ID for managing associated content
         * @returns {boolean} true if management rights are granted, false otherwise
         */
        function canManage(neededId) {
            neededId = +neededId;
            var account = getAccountInfo();
            var id = account.pk_tutor_tutand_id;
            return !!account && (neededId === id);
        }

        /**
         * Returns whether or not this user has administrator rights.
         * @returns {boolean} true if the user is an administrator, false otherwise
         */
        function isAdmin() {
            return account.type === UserType.Admin;
        }

        /**
         * Returns the side (either "frontend" or "backend") based on the user's type.
         * @returns {string} The side associated with the user's type
         */
        function getSide() {
            return isAdmin() ? 'backend' : 'frontend';
        }
    }

})();