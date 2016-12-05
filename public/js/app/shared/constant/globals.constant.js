(function() {

    var Globals = {
        homes: {
            unauthenticated: 'login',
            frontend: 'tutorList',
            backend: 'home'
        }
    };

    angular.module('tp.shared.constant')
        .constant('Globals', Globals);

})();