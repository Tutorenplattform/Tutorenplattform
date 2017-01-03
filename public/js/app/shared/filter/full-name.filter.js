(function() {

    angular.module('tp.shared.filter')
        .filter('fullName', fullNameWrapper);

    /**
     * Returns the fullName filter function.
     * @see fullNameWrapper#fullName
     * @returns {function} The fullName filter
     */
    function fullNameWrapper() {
        return fullName;

        /**
         * Combines the first and last name of the given person.
         * @param {Tutor|Tutand|Teacher|ReportedTutor} person The person whose name to construct
         * @returns {string} The combined first and last name of the given person, separated by a space
         */
        function fullName(person) {
            return person.vorname + ' ' + person.nachname;
        }
    }

})();