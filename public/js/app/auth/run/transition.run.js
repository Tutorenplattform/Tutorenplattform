(function() {

    angular.module('tp.auth.run')
        .run(run);

    run.$inject = ['$transitions', 'Authentication', '$stateParams'];

    /**
     * A set of permissions used for being compared to state permissions.
     * @typedef {Object} Permissions
     * @property {boolean} authenticated true if the user is logged in, false otherwise
     * @property {?number} type The type of the current user
     * @property {?string} side The side this user's type belongs to
     * @property {?boolean} manageable true if the user is allowed to manage this state's contents.
     */

    /**
     * This function is used to register the transition interceptor.
     * @param {$transitions} $transitions The service used to retrieve information about the current state transition
     * from
     * @param {Authentication} Authentication The service used to interact with the current user session
     * @see transitionHandler
     */
    function run($transitions, Authentication, $stateParams) {
        $transitions.onBefore({}, transitionHandler);

        /**
         * This transition interceptor is used to check if the user has the necessary permissions to transition to the
         * next state. If not, they will be redirected to their home page.
         * @param {transition} trans The currently ongoing transition that has been intercepted
         * @returns {TargetState|undefined} A state retarget result or undefined, if the transition is valid.
         */
        function transitionHandler(trans) {
            var toState = trans.$to();
            var userPerms = getUserPermissions(toState);
            var statePerms = getStatePermissions(toState);
            var valid = validateTransition(userPerms, statePerms);
            if (!valid) {
                var home = Authentication.getHome();
                var router = trans.router.stateService;
                return router.target(home, {}, {location: 'replace'});
            }
        }

        function validateTransition(userPerms, statePerms) {
            var allowed = true;
            _.each(statePerms, forEach);
            return allowed;

            function forEach(value, key) {
                if (userPerms[key] !== value) {
                    console.log('Mismatch at key:' + key);
                    allowed = false;
                    return false;
                }
            }
        }

        function getUserPermissions(state) {
            var account = Authentication.getAccountInfo();
            var permissions = {
                authenticated: !!account
            };
            if (account) {
                permissions.type = account.type;
                permissions.side = Authentication.getSide();
                permissions.manageable = hasManageRights();
            }
            return permissions;

            function hasManageRights() {
                var admin = Authentication.isAdmin();
                if (admin) {
                    return true;
                } else if (state.name !== 'tutor.edit') {
                    return false;
                } else {
                    return Authentication.canManage($stateParams.id);
                }
            }
        }

        function getStatePermissions(state) {
            var permissions = state.permissions || {};
            if (!state.parent) {
                return permissions;
            }
            var parentPermissions = getStatePermissions(state.parent);
            return angular.extend({}, parentPermissions, permissions);
        }
    }

})();