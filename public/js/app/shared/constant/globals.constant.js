(function() {

    /**
     * The global configuration constant of this application.
     * @type {Object.<string, Object>}
     */
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