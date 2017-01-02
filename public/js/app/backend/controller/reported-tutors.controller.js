(function() {

    angular.module('tp.backend.controller')
        .controller('ReportedTutorsController', ReportedTutorsController);

    ReportedTutorsController.$inject = ['reportedTutors', 'ReportService'];

    function ReportedTutorsController(reportedTutors, ReportService) {
        var vm = this;

        vm.reportedTutors = [
            {
                vorname: "Hans",
                nachname: "Mustermann",
                pk_tutor_tutand_id: 1,
                kommentare: [
                    "Zu mustermannig!",
                    "Hilft mir eigentlich nciht so wirklich"
                ]
            }, {
                vorname: "Daniel",
                nachname: "Düsentrieb",
                pk_tutor_tutand_id: 2,
                kommentare: [
                    "Hat keinen Plan von irgendwas",
                    "Ähm ähm ähm ähm ähm",
                    "??????????????"
                ]
            }
        ];

        vm.disableTutor = disableTutor;
        vm.ignoreTutor = ignoreTutor;

        function disableTutor(tutor) {
            ReportService.disable(tutor).then(disableTutorLocally);

            function disableTutorLocally() {
                tutor.gesperrt = true;
            }
        }

        function ignoreTutor(tutor) {
            ReportService.ignore(tutor).then(removeTutor);

            function removeTutor() {
                _.pull(vm.reportedTutors, tutor);
            }
        }
    }

})();