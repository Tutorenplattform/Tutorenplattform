(function() {

    angular.module('tp.auth.service')
        .service('Authentication', Authentication);

    Authentication.$inject = ['$auth', '$state', 'Globals', 'UserType'];

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
     * A set of permissions used for being compared to state permissions.
     * @typedef {Object} Permissions
     * @property {boolean} authenticated true if the user is logged in, false otherwise
     * @property {?number} type The type of the current user
     * @property {?string} side The side this user's type belongs to
     * @property {?boolean} manageRights true if the user is allowed to manage this state's contents.
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
        service.getPermissions = getPermissions;
        service.canVisit = canVisit;

        var account;

        var temp = 0; //TODO: Remove brake

        /**
         * The initialization method that must be called whenever the application is first opened.
         */
        function initialize() {
            if (isAuthenticated()) {
                account = $auth.getPayload();
            }
        }

        /**
         * Attempts to log in the user with the given credentials. Afterwards, the user is redirected to their home
         * page.
         * @see forwardToHome
         * @param {Credentials} credentials The credentials to use for login
         * @returns {Promise} A promise that finishes upon login
         */
        function login(credentials) {
            temp = 1;
            return forwardToHome(); //TODO: Remove brake
            return $auth.login(credentials).then(forwardToHome);
        }

        /**
         * Attempts to log out the current user. Afterwards, the user is redirected to the login page.
         * @see forwardToHome
         * @returns {Promise} A promise that finishes upon logout
         */
        function logout() {
            temp = 0;
            return forwardToHome(); //TODO: Remove brake
            return $auth.logout().then(forwardToHome);
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
                var permissions = getPermissions();
                forwardState = homes[permissions.side];
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
         * @returns {Object.<string, Object>} A minimized tutor object
         */
        function getAccountInfo() {
            var fakeAccount = {
                type: UserType.Tutor,
                pk_tutor_tutand_id: 1,
                vorname: 'Max',
                nachname: 'Mustermann'
            };
            //return fakeAccount;
            return temp ? fakeAccount : void 0; //TODO: Remove brake
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
         * Returns whether or not the current user has the rights to manage the given tutor's profile information.
         * @param tutor The tutor whose profile to have permissions checked for
         * @returns {boolean} true if the user is allowed to manage the tutor's account, false othwerise
         */
        function canManage(tutor) {
            var tutorId = tutor.pk_tutor_tutand_id || tutor;
            var account = getAccountInfo();
            return !!account && (account.pk_tutor_tutand_id === tutorId);
        }

        /**
         * Returns whether or not the current user is allowed to transition to the goven state.
         * @param {state} state The state to transition to
         * @returns {boolean} true if necessary permissions are provided, false otherwise
         */
        function canVisit(state) {
            var perms = getPermissions(state);
            var allowed = true;
            _.each(getStatePermissions(state), forEach);
            return allowed;

            function forEach(value, key) {
                if (perms[key] != value) {
                    allowed = false;
                    return false;
                }
            }

            function getStatePermissions(state) {
                var permissions = state.permissions || {};
                if (!state.parent) {
                    return permissions;
                }
                return angular.extend({}, getStatePermissions(state.parent), permissions);
            }
        }

        /**
         * Processes the permission set of the current user.
         * @param {state} state The state to transition to
         * @returns {Permissions} The set of permissions associated to the current user
         */
        function getPermissions(state) {
            var account = getAccountInfo();
            var permissions = {
                authenticated: !!account
            };
            if (account) {
                permissions.type = account.type;
                permissions.side = (account.type < UserType.Admin) ? 'frontend' : 'backend';
            }
            return permissions;
        }
    }

})();