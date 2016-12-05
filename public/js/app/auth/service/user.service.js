(function() {

    angular.module('tp.auth.service')
        .service('User', User);

    User.$inject = ['Restangular'];

    function User(Restangular) {
        var service = this;

        var userRest = Restangular.all('auth');

        service.login = login;
        service.logout = logout;

        function login() {
            return userRest.one('login').get();
        }

        function logout() {
            return userRest.one('logout').get();
        }
    }

})();