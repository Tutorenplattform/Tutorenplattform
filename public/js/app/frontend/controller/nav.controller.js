(function() {

    angular.module('tp.frontend.controller')
        .controller('FrontendNavController', FrontendNavController);

    FrontendNavController.$inject = ['Authentication', 'UserType', '$state'];

    function FrontendNavController(Authentication, UserType, $state) {
        var nav = this;

        nav.logout = logout;
        nav.isTutor = isTutor;
        nav.goToProfile = goToProfile;

        init();

        function init() {
            nav.account = Authentication.getAccountInfo();
        }

        function logout() {
            Authentication.logout();
        }

        function isTutor() {
            return nav.account.type === UserType.Tutor;
        }

        function goToProfile() {
            var params = {
                id: nav.account.pk_tutor_tutand_id
            };
            $state.go('tutor', params);
        }
    }

})();