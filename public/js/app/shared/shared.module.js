(function() {

    var SUBMODULES = [
        'tp.shared.service',
        'tp.shared.controller'
    ];

    angular.module('tp.shared', SUBMODULES);

    _.each(SUBMODULES, function(submodule) {
        angular.module(submodule, []);
    });

})();