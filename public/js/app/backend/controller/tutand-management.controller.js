(function() {

    angular.module('tp.backend.controller')
        .controller('TutandManagementController', TutandManagementController);

    TutandManagementController.$inject = ['tutands', 'TutandService'];

    function TutandManagementController(tutands, TutandService) {
        var vm = this;

        vm.tutands = [{
            vorname: "Hans",
            nachname: "Mustermann",
            moodle_benutzername: "3125"
        }];

        vm.destroyTutand = destroyTutand;

        function destroyTutand(tutand) {
            TutandService.destroy(tutand);
        }
    }

})();