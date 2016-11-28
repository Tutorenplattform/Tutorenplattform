(function() {

    angular.module('tp.frontend.controller')
        .controller('TutorProfileController', TutorProfileController);

    TutorProfileController.$inject = ['tutor', '$state', 'TutorService'];

    function TutorProfileController(tutor, $state, TutorService) {
        var vm = this;

        vm.tutor = {id: 1, first_name: 'First', last_name: 'Last'};

        vm.report = report;

        function report(tutor) {
            var report = {
                byUser: 1
            };
            TutorService.report(tutor, report);
        }
    }

})();