(function() {

    angular.module('tp.frontend.controller')
        .controller('TutorReportController', TutorReportController);

    TutorReportController.$inject = ['tutor', '$state', 'TutorService'];

    /**
     * This controller provides the background functionality for the tutor report page on the frontend side of the
     * application.
     * @param {Tutor} tutor The tutor the user wishes to report
     * @param {$state} $state The service used to transition between states
     * @param {TutorService} TutorService The data service used to interact with the server-side REST API
     * @memberOf tp.frontend.controller
     * @constructor
     */
    function TutorReportController(tutor, $state, TutorService) {
        var vm = this;

        vm.tutor = tutor;

        vm.fields = {};

        vm.report = report;
        vm.returnToProfile = returnToProfile;

        /**
         * Sends an API request to report the current tutor with the attached comment from the view model. Afterwards,
         * the used will be redirected to the profile of the tutor they just reported.
         * @see returnToProfile
         */
        function report() {
            var report = angular.copy(vm.fields);
            TutorService.report(vm.tutor, report).then(returnToProfile);
        }

        /**
         * Redirects the user back to the current tutor's profile.
         */
        function returnToProfile() {
            $state.go('tutor');
        }
    }

})();