(function() {

    var Rating = {
        GREAT: new _Rating('GUT', 'bewertung_gut'),
        OKAY: new _Rating('NEUTRAL', 'bewertung_neutral'),
        BAD: new _Rating('SCHLECHT', 'bewertung_schlecht'),
        NONE: new _Rating(null)
    };

    function _Rating(value, countKey) {
        this.value = value;
        this.countKey = countKey;
    }

    angular.module('tp.shared.constant')
        .constant('Rating', Rating);

})();