(function() {

    angular.module('tp.auth.run')
        .run(run);

    run.$inject = ['$transitions', 'Authentication'];

    function run($transitions, Authentication) {
        $transitions.onBefore({}, transitionHandler);

        function transitionHandler(trans) {
            var toState = trans.$to();
            if (!Authentication.canVisit(toState)) {
                console.log('Nope');
                var home = Authentication.getHome();
                var router = trans.router.stateService;
                return router.target(home, {}, {location: 'replace'});
            }
            console.log('Yes');
        }
    }

})();