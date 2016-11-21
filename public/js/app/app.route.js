(function() {

    angular.module('tp')
        .config(config);

    config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider',
        'RestangularProvider'];

    function config($locationProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider,
                    RestangularProvider) {
        RestangularProvider.setBaseUrl('/api/v1');

        $locationProvider.html5Mode(false).hashPrefix('');

        $urlMatcherFactoryProvider.defaultSquashPolicy(true);
        $urlMatcherFactoryProvider.strictMode(false);

        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/shared/login.html',
                permissions: {
                    loggedIn: false
                }
            })
            .state('frontend', {
                abstract: true,
                templateUrl: 'templates/frontend/frontend.html',
                permissions: {
                    loggedIn: true,
                    frontendUser: true
                }
            })
            .state('backend', {
                url: '/admin',
                templateUrl: 'templates/backend/backend.html',
                permissions: {
                    loggedIn: true,
                    backendUser: true
                }
            });

        $stateProvider
            .state('tutorList', {
                url: '/list',
                parent: 'frontend',
                views: {
                    'frontend': {
                        templateUrl: 'templates/frontend/general/tutor-list.html',
                        controller: 'TutorListController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    'tutors': function(TutorService) {
                        //return TutorService.all();
                    }
                }
            })
            .state('tutor', {
                url: '/tutor/{id:\\d+}',
                parent: 'frontend',
                views: {
                    'frontend': {
                        template: '<h1>Client-side: Not Yet Implemented</h1>'
                    }
                }
            })
            .state('register', {
                url: '/tutor/register',
                parent: 'frontend',
                views: {
                    'frontend': {
                        templateUrl: 'templates/frontend/tutand/register.html',
                        controller: 'TutorRegistrationController',
                        controllerAs: 'vm'
                    }
                }
            });

        $stateProvider
            .state('home', {
                url: '/home',
                parent: 'backend',
                views: {
                    'backend': {
                        templateUrl: 'templates/backend/general/home.html'
                    }
                }
            })
            .state('teacherList', {
                url:'/admin/teacherlist',
                parent:'backend',
                views: {
                    'backend': {
                        templateUrl: 'templates/backend/admin/teacher.html',
                        controller: 'TeacherListController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    'tutors': function(TeacherService) {
                        //return TeacherService.all();
                    }
                }
            });
    }

})();