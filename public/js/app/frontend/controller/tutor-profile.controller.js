(function() {

    angular.module('tp.frontend.controller')
        .controller('TutorProfileController', TutorProfileController);

    TutorProfileController.$inject = ['tutor', '$state', 'TutorService'];

    function TutorProfileController(tutor, $state, TutorService) {
        var vm = this;

        vm.tutor = {id: 1, first_name: 'First', last_name: 'Last'};

        vm.report = report;
        vm.rate = rate;
        vm.startChat = startChat;
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
            TutorService.rate(tutor, rating);
        }

        function startChat() {
            var params = {
                id: tutor.id
            };
            $state.go('frontend.chat', params);
        }

        function editProfile() {
            var params = {
                id: tutor.id
            };
            $state.go('editProfile', params);
        }
    }

})();