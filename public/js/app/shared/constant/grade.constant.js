(function() {

    /**
     * An enumeration containing display strings for all possible grades.
     * @type {Object.<number, string>}
     */
    var Grade = {
        1: 'Sehr Gut',
        2: 'Gut',
        3: 'Befriedigend',
        4: 'Genügend',
        5: 'Nicht genügend'
    };

    angular.module('tp.shared.constant')
        .constant('Grade', Grade);

})();