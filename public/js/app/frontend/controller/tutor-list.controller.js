(function() {

    angular.module('tp.frontend.controller')
        .controller('TutorListController', TutorListController);

    TutorListController.$inject = ['tutors', '$state'];

    function TutorListController(tutors, $state) {
        var vm = this;

        vm.tutors = [{id: 1, first_name: 'First', last_name: 'Last', subjects: [{id: 7, name: 'SEW'}], rating: 9}];

        vm.viewTutor = viewTutor;



        vm.submit = function () {
            //Hol alle Tutoren aus der Datenbank
            var  tutoren = TutorService.all();

            var results = [];

            // Es werden Variablen angelegt, mit denen man im JSON Object suchen kann
            var searchField_name = "name",
                searchField_class = "klasse",
                searchField_subject = "fach";

            //Holt die Values aus den Input Feldern nach denen gesucht werden soll
            var searchname = $scope.lastname,
                searchclass = $scope.class,
                searchsubject = $scope.subject;

            for (var i=0 ; i < tutoren.length ; i++) {
                if (
                    tutoren[i][searchField_name] == searchname ||
                    tutoren[i][searchField_class] == searchclass ||
                    tutoren[i][searchField_subject] == searchsubject
                ) {
                    results.push(tutoren[i]);
                    console.log(results);
                }
            }
        };



        function viewTutor(tutor) {
            $state.go('tutor', {
                id: tutor.id
            });
        }
    }
})();