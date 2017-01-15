(function() {

    /**
     * An enumeration containing unique identifiers for all types of users.
     * @enum {number}
     * @memberOf tp.auth.constant
     */
    var UserType = {
        /** The identifier for normal users. */
        Tutand: 0,
        /** The identifier for tutors. */
        Tutor: 1,
        /** The identifier for administrators. */
        Admin: 2
    };

    angular.module('tp.auth.constant')
        .constant('UserType', UserType);

})();