(function() {

    var SUBMODULES = [
        'tp.auth.service',
        'tp.auth.constant'
    ];

    angular.module('tp.auth', SUBMODULES);

    _.each(SUBMODULES, function(submodule) {
        angular.module(submodule, []);
    });

})();