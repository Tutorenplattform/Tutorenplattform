(function() {

    angular.module('tp.shared.filter')
        .filter('fullName', fullNameWrapper);

    /**
     * Returns the fullName filter function.
     * @see fullNameWrapper#fullName
     * @returns {fullName} The fullName filter
     * @memberOf tp.shared.filter
     * @function
     */
    function fullNameWrapper() {
        return fullName;

        /**
         * Combines the first and last name of the given person.
         * @param {Tutor|Tutand|Teacher|ReportedTutor} person The person whose name to construct
         * @returns {string} The combined first and last name of the given person, separated by a space
         * @memberOf tp.shared.filter
         * @function
         */
        function fullName(person) {
            return person.vorname + ' ' + person.nachname;
        }
    }

})();