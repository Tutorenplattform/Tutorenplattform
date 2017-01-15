(function() {

    var SUBMODULES = [
        'tp.auth.service',
        'tp.auth.constant',
        'tp.auth.run'
    ];

    angular.module('tp.auth', SUBMODULES);

    _.each(SUBMODULES, function(submodule) {
        angular.module(submodule, []);
    });

    /**
     * @namespace tp.auth
     */

    /**
     * @namespace tp.auth.service
     */

    /**
     * @namespace tp.auth.constant
     */

    /**
     * @namespace tp.auth.run
     */

})();