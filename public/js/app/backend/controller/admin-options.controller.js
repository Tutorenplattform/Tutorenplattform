(function() {

    angular.module('tp.backend.controller')
        .controller('AdminOptionsController', AdminOptionsController);

    AdminOptionsController.$inject = ['options', 'AdministratorService', '$state'];

    /**
     * This controller provides all background functionality for the options page on the backend side of the
     * application.
     * @param {Object.<string, string>} options The current set of options
     * @param {AdministratorService} AdministratorService The data service used to interact with the server-side REST
     * API
     * @param {$state} $state The service used to transition between states
     * @constructor
     */
    function AdminOptionsController(options, AdministratorService, $state) {
        var vm = this;

        vm.options = {
            email_adresse: 'fas@htl.rennweg.at'
        };

        vm.fields = {};

        vm.saveChanges = saveChanges;
        vm.passwordSet = passwordSet;
        vm.validChanges = validChanges;
        vm.reset = reset;

        init();

        function init() {
            vm.fields = vm.options;
        }

        /**
         * Saves the changes that were made in the view model and sends an appropriate request to the REST API.
         */
        function saveChanges() {
            var data = angular.copy(vm.fields);
            AdministratorService.saveOptions(data);
        }

        /**
         * Sends an API request to reset the application. Afterwards, the administrator is forwarded to the backend home
         * page.
         * @see AdministratorService#resetApplication
         */
        function reset() {
            AdministratorService.resetApplication().then(forwardToHome);

            function forwardToHome() {
                $state.go('home');
            }
        }
    }

})();