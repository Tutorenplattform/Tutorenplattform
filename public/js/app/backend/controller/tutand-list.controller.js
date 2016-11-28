(function() {

    angular.module('tp.frontend.controller')
        .controller('TutandListController', TutandListController);

    TutandListController.$inject = ['tutand', '$state'];

    function TutorListController(tutand, $state) {
        var vm = this;

        vm.tutand = [{id: 1, first_name: 'First', last_name: 'Last'}];

        vm.viewTutand = viewTutand;

        function viewTutand(tutand) {
            $state.go('tutand', {
                id: tutand.id
            });
        }
    }

})();