(function() {

    angular.module('tp.frontend.controller')
        .controller('FrontendNavController', FrontendNavController);

    FrontendNavController.$inject = ['Authentication', 'UserType', '$state'];

    /**
     * This controller provides the background functionality for the navigation section of the frontend side of the
     * application.
     * @param {Authentication} Authentication The service used to interact with the current user session
     * @param {UserType} UserType An enumeration containing all different types of users
     * @param {$state} $state The service used to transition between states
     * @memberOf tp.frontend.controller
     * @constructor
     */
    function FrontendNavController(Authentication, UserType, $state) {
        var nav = this;

        nav.logout = logout;
        nav.isTutor = isTutor;
        nav.goToProfile = goToProfile;

        init();

        function init() {
            nav.account = Authentication.getAccountInfo();
        }

        /**
         * Sends an API request to log the current user out. Afterwards, they will be redirected to the login page.
         */
        function logout() {
            Authentication.logout();
        }

        /**
         * Returns whether or not the active user is a registered tutor.
         * @returns {boolean} true if the current user is a tutor, false otherwise
         */
        function isTutor() {
            return nav.account.type === UserType.Tutor;
        }

        /**
         * Redirects the tutor to their own profile page.
         */
        function goToProfile() {
            var params = {
                id: nav.account.pk_tutor_tutand_id
            };
            $state.go('tutor', params);
        }
    }

})();