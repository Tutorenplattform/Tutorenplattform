(function() {

    angular.module('tp.run', [])
        .run(run);

    run.$inject = ['Authentication'];

    function run(Authentication) {
        //TODO: Remove brake
        var TUTAND = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjowLCJwa190dXRvcl90dXRhbmRfaWQiOjMsInZvcm5hbWUiOiJTdXRla2giLCJuYWNobmFtZSI6IlNlZWxlbmZyZXVuZCJ9.H7Fei4n9F9nLR1z4RxjeiCgKI8asoK0vkF3AclCvExI';
        var TUTOR = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoxLCJwa190dXRvcl90dXRhbmRfaWQiOjEsInZvcm5hbWUiOiJIYW5zIiwibmFjaG5hbWUiOiJNdXN0ZXJtYW5uIn0._R2QdiZykvZ2UMPMKgSToLxFOCio6yXGRS9YtjL9OEI';
        var ADMIN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoyLCJwa190dXRvcl90dXRhbmRfaWQiOjEsInZvcm5hbWUiOiJJc2FiZWxsYSIsIm5hY2huYW1lIjoiRmFzdGVuYmF1ZXIifQ.vyO36ROEX7581RJZib6L18Hci8xI-j7EOKd_7jw11_k';
        var NONE = '-';
        Authentication.initialize(NONE);
    }

})();