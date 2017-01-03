(function() {

    var LIBRARIES = [
        'restangular',
        'satellizer',
        'ngAnimate',
        'ngTouch',
        'ui.bootstrap',
        'ui.router'
    ];

    var APP_MODULES = [
        'tp.run',
        'tp.shared',
        'tp.auth',
        'tp.frontend',
        'tp.backend'
    ];

    var DEPENDENCIES = _.concat(LIBRARIES, APP_MODULES);

    angular.module('tp', DEPENDENCIES);

})();