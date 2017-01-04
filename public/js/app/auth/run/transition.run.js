(function() {

    angular.module('tp.auth.run')
        .run(run);

    run.$inject = ['$transitions', 'Authentication'];

    /**
     * This function is used to register the transition interceptor.
     * @param {$transitions} $transitions The service used to retrieve information about the current state transition
     * from
     * @param {Authentication} Authentication The service used to interact with the current user session
     * @see transitionHandler
     */
    function run($transitions, Authentication) {
        $transitions.onBefore({}, transitionHandler);

        /**
         * This transition interceptor is used to check if the user has the necessary permissions to transition to the
         * next state. If not, they will be redirected to their home page.
         * @param {transition} trans The currently ongoing transition that has been intercepted
         * @returns {TargetState|undefined} A state retarget result or undefined, if the transition is valid.
         */
        function transitionHandler(trans) {
            var toState = trans.$to();
            if (!Authentication.canVisit(toState)) {
                var home = Authentication.getHome();
                var router = trans.router.stateService;
                return router.target(home, {}, {location: 'replace'});
            }
        }
    }

})();