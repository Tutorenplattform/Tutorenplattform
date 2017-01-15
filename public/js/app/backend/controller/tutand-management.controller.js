(function() {

    angular.module('tp.backend.controller')
        .controller('TutandManagementController', TutandManagementController);

    TutandManagementController.$inject = ['tutands', 'TutandService'];

    /**
     * This controller provides all background functionality for the tutand management page on the backend side of the
     * application.
     * @param {Tutand[]} tutands The list of tutands
     * @param {TutandService} TutandService The data service used to interact with the server-side REST API
     * @constructor
     */
    function TutandManagementController(tutands, TutandService) {
        var vm = this;

        vm.tutands = [{
            vorname: "Hans",
            nachname: "Mustermann",
            moodle_benutzername: "3125"
        }];

        vm.destroyTutand = destroyTutand;

        /**
         * Deletes the given tutand. If they are a tutor, all related information will be deleted, as well.
         * @param {Tutand} tutand The tutand to delete
         */
        function destroyTutand(tutand) {
            TutandService.destroy(tutand);
        }
    }

})();