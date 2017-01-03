(function() {

    angular.module('tp.shared.filter')
        .filter('fullName', fullNameWrapper);

    function fullNameWrapper() {
        return fullName;

        function fullName(person) {
            return person.vorname + ' ' + person.nachname;
        }
    }

})();