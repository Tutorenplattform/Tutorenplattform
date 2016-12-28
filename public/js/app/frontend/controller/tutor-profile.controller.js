(function() {

    angular.module('tp.frontend.controller')
        .controller('TutorProfileController', TutorProfileController);

    TutorProfileController.$inject = ['tutor', '$state', 'TutorService'];

    function TutorProfileController(tutor, $state, TutorService) {
        var vm = this;

        vm.tutor = {
            vorname: "Hans",
            nachname: "Mustermann",
            klasse: "4AM",
            id: 1,
            faecher: ["AM", "D"],
            bewertung_gut: 3,
            bewertung_neutral: 1,
            bewertung_schlecht: 0
        };

        vm.report = report;
        vm.rate = rate;
        vm.editProfile = editProfile;

        function report(tutor) {
            var report = {
                byUser: 1
            };
            TutorService.report(tutor, report);
        }

        function rate(value) {
            var rating = {
                rate: value
            };
            TutorService.rate(vm.tutor, rating);
        }

        function editProfile() {
            var params = {
                id: vm.tutor.id
            };
            $state.go('editProfile', params);
        }
    }

})();