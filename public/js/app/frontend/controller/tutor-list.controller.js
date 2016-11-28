(function() {

    angular.module('tp.backend.controller')
        .controller('TutorListController', TutorListController);

    TutorListController.$inject = ['tutors', '$state'];

    function TutorListController(tutors, $state) {
        var vm = this;

        vm.tutors = [{id: 1, first_name: 'First', last_name: 'Last', subjects: [{id: 7, name: 'SEW'}], rating: 9}];

        vm.viewTutor = viewTutor;

        function viewTutor(tutor) {
            $state.go('tutor', {
                id: tutor.id
            });
        }
    }

})();