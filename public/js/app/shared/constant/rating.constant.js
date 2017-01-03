(function() {

    /**
     * An enumeration containing unique identifiers for all types of ratings.
     * @type {Object.<string, Rating>}
     */
    var Ratings = {
        GREAT: new Rating('GUT', 'bewertung_gut'),
        OKAY: new Rating('NEUTRAL', 'bewertung_neutral'),
        BAD: new Rating('SCHLECHT', 'bewertung_schlecht'),
        NONE: new Rating(null)
    };

    /**
     * A rating that users can cast to tutors.
     * @param {?string} value The rating's unique identification value
     * @param {string=} countKey The key under which the rating's number of casts can be found
     * @class
     */
    function Rating(value, countKey) {
        this.value = value;
        this.countKey = countKey;
    }

    angular.module('tp.shared.constant')
        .constant('Rating', Ratings);

})();