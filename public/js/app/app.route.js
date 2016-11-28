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
                controller: 'LoginController',
                controllerAs: 'vm',
                permissions: {
                    authenticated: false
                }
            })
            .state('frontend', {
                abstract: true,
                templateUrl: 'templates/frontend/frontend.html',
                permissions: {
                    authenticated: true,
                    side: 'frontend'
                }
            })
            .state('backend', {
                url: '/admin',
                templateUrl: 'templates/backend/backend.html',
                permissions: {
                    authenticated: true,
                    side: 'backend'
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
                        templateUrl: 'templates/frontend/general/tutor-profile.html',
                        controller: 'TutorProfileController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    'tutor': function(TutorService, $stateParams) {
                        //return TutorService.one($stateParams.id);
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
                },
                permissions: {
                    type: 'tutand'
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
                url:'/teacherlist',
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
            })
            .state('tutandList', {
                url:'/admin_benutzerverwaltung',
                parent:'backend',
                views: {
                    'backend': {
                        templateUrl: 'templates/backend/admin/admin_benutzerverwaltung.html',
                        controller: 'TutandListController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    'tutand': function(TutandService) {
                        //return TutandService.all();
                    }
                }
            })
            .state('tutorList', {
            url: '/admin_benutzerverwaltung',
                parent: '/admin_benutzerverwaltung',
                views: {
                    'backend': {
                        templateUrl: 'templates/backend/admin/admin_benutzerverwaltung.html',
                        controller: 'TutorListController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    'tutors': function(TutorService) {
                        //return TutorService.all();
                    }
                }
        });
    }

})();