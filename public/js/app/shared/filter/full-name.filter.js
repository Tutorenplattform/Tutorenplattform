(function() {

    angular.module('tp.shared.filter')
        .filter('fullName', fullName);

    function fullName() {
        return function(tutor) {
            return tutor.vorname + ' ' + tutor.nachname;
        };
    }

})();