(function() {

    var SUBMODULES = [
        'tp.shared.service'
    ];

    angular.module('tp.shared', SUBMODULES);

    _.each(SUBMODULES, function(submodule) {
        angular.module(submodule, []);
    });

})();