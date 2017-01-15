(function() {

    /**
     * An enumeration containing display strings for all possible grades.
     * @enum {string}
     * @memberOf tp.shared.constant
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