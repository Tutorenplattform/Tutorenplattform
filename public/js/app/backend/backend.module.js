(function() {

    var SUBMODULES = [
        'tp.backend.controller',
        'tp.backend.service'
    ];

    angular.module('tp.backend', SUBMODULES);

    _.each(SUBMODULES, function(submodule) {
        angular.module(submodule, []);
    });

    /**
     * @namespace tp.backend
     */

    /**
     * @namespace tp.backend.controller
     */

    /**
     * @namespace tp.backend.service
     */

})();