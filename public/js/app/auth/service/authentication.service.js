(function() {

    angular.module('tp.auth.service')
        .service('Authentication', Authentication);

    Authentication.$inject = ['$auth', '$state', 'Globals', 'UserType'];

    function Authentication($auth, $state, Globals, UserType) {
        var service = this;

        service.login = login;
        service.logout = logout;
        service.getHome = getHome;
        service.getAccountInfo = getAccountInfo;
        service.isAuthenticated = isAuthenticated;
        service.canManage = canManage;
        service.getPermissions = getPermissions;
        service.canVisit = canVisit;

        var temp = 0; //TODO: Remove brake

        function login(credentials) {
            temp = 1;
            return forwardToHome(); //TODO: Remove brake
            return $auth.login(credentials).then(forwardToHome);
        }

        function logout() {
            temp = 0;
            return forwardToHome(); //TODO: Remove brake
            return $auth.logout().then(forwardToHome);
        }

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

        function forwardToHome() {
            $state.go(getHome());
        }

        function getAccountInfo() {
            var fakeAccount = {
                type: UserType.Tutor,
                pk_tutor_tutand_id: 1,
                vorname: 'Max',
                nachname: 'Mustermann'
            };
            return fakeAccount;
            return temp ? fakeAccount : void 0; //TODO: Remove brake
            if (!isAuthenticated()) {
                return;
            }
            return $auth.getPayload();
        }

        function isAuthenticated() {
            return $auth.isAuthenticated();
        }

        function canManage(tutor) {
            var tutorId = tutor.pk_tutor_tutand_id || tutor;
            var account = getAccountInfo();
            return !!account && (account.pk_tutor_tutand_id === tutorId);
        }

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