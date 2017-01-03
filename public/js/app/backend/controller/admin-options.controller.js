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
            email: 'fas@htl.rennweg.at'
        };

        vm.fields = {};

        vm.saveChanges = saveChanges;
        vm.passwordSet = passwordSet;
        vm.validChanges = validChanges;
        vm.reset = reset;

        init();

        function init() {
            vm.fields.email = vm.options.email;
        }

        /**
         * Saves the changes that were made in the view model and sends an appropriate request to the REST API.
         */
        function saveChanges() {
            var data = angular.copy(vm.fields);
            if (passwordSet()) {
                delete data.passwort2;
            }
            AdministratorService.saveOptions(data);
        }

        /**
         * Returns whether or not one of the password fields has been filled out. This method is mainly used to
         * determine whether or not the password fields should be considered required for the view form.
         * @returns {boolean} true if either password field has been filled out, false otherwise
         */
        function passwordSet() {
            var passwort1 = vm.fields.passwort;
            var passwort2 = vm.fields.passwort2;
            return passwort1 || passwort2;
        }

        /**
         * Returns whether or not the changes made in the view model are valid. This mainly involves checking if both of
         * the passwords are equivalent (if set).
         * @see passwordSet
         * @returns {boolean} true if the custom validation ends in success, false otherwise
         */
        function validChanges() {
            var passwort1 = vm.fields.passwort;
            var passwort2 = vm.fields.passwort2;
            if (passwordSet()) {
                return passwort1 === passwort2;
            }
            return true;
        }

        /**
         * Sends an API request to reset the application. This process involves removing all tutor and tutand accounts
         * from the server (but not from the Active Directory). Afterwards, the administrator is forwarded to the
         * backend home page.
         */
        function reset() {
            AdministratorService.resetApplication().then(forwardToHome);

            function forwardToHome() {
                $state.go('home');
            }
        }
    }

})();