(function() {

    var SUBMODULES = [
        'tp.shared.constant',
        'tp.shared.filter',
        'tp.shared.service',
        'tp.shared.controller'
    ];

    angular.module('tp.shared', SUBMODULES);

    _.each(SUBMODULES, function(submodule) {
        angular.module(submodule, []);
    });

    /**
     * @namespace tp.shared
     */

    /**
     * @namespace tp.shared.filter
     */

    /**
     * @namespace tp.shared.service
     */

    /**
     * @namespace tp.shared.controller
     */

})();