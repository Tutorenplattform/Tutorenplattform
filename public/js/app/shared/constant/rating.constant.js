(function() {

    var Ratings = {
        GREAT: new Rating('GUT', 'bewertung_gut'),
        OKAY: new Rating('NEUTRAL', 'bewertung_neutral'),
        BAD: new Rating('SCHLECHT', 'bewertung_schlecht'),
        NONE: new Rating(null)
    };

    function Rating(value, countKey) {
        this.value = value;
        this.countKey = countKey;
    }

    angular.module('tp.shared.constant')
        .constant('Rating', Ratings);

})();