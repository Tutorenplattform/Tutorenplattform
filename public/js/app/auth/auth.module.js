(function() {

    var SUBMODULES = [
        'tp.auth.service'
    ];

    angular.module('tp.auth', SUBMODULES);

    _.each(SUBMODULES, function(submodule) {
        angular.module(submodule, []);
    });

})();