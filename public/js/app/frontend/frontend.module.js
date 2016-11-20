(function() {

    var SUBMODULES = [
        'tp.frontend.controller',
        'tp.frontend.service'
    ];

    angular.module('tp.frontend', SUBMODULES);

    _.each(SUBMODULES, function(submodule) {
        angular.module(submodule, []);
    });

})();