(function() {

    angular.module('tp.run', [])
        .run(run);

    run.$inject = ['Authentication'];

    function run(Authentication) {
        Authentication.initialize();
    }

})();