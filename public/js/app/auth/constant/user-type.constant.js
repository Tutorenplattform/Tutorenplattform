(function() {

    var UserType = {
        Tutand: 0,
        Tutor: 1,
        Admin: 2,
        Superuser: 3
    };

    angular.module('tp.auth.constant')
        .constant('UserType', UserType);

})();