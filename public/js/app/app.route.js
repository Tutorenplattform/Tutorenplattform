(function() {

    angular.module('tp')
        .config(config);

    config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider',
        'RestangularProvider', '$authProvider', 'UserType'];

    function config($locationProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider,
                    RestangularProvider, $authProvider, UserType) {
        RestangularProvider.setBaseUrl('/api/v1');
        $authProvider.loginUrl = '/api/v1/authenticate';

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
                controller: 'FrontendNavController',
                controllerAs: 'nav',
                permissions: {
                    authenticated: true,
                    side: 'frontend'
                }
            })
            .state('backend', {
                url: '/admin',
                templateUrl: 'templates/backend/backend.html',
                controller: 'BackendNavController',
                controllerAs: 'nav',
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
                        templateUrl: 'templates/shared/tutor-profile.html',
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
                resolve: {
                    'teachers': function(TeacherService) {
                        //return TeacherService.all();
                    },
                    'subjects': function(SubjectService) {
                        //return SubjectService.all();
                    }
                },
                permissions: {
                    type: UserType.Tutand
                }
            })
            .state('tutor.report', {
                url: '/report',
                views: {
                    'frontend@frontend': {
                        templateUrl: 'templates/frontend/general/report-tutor.html',
                        controller: 'TutorReportController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('tutor.edit', {
                url: '/edit',
                views: {
                    'frontend@frontend': {
                        templateUrl: 'templates/shared/edit-profile.html',
                        controller: 'EditTutorProfileController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    'teachers': function(TeacherService) {
                        //return TeacherService.all();
                    },
                    'subjects': function(SubjectService) {
                        //return SubjectService.all();
                    }
                },
                permissions: {
                    type: UserType.Tutor,
                    manageable: true
                }
            })
            .state('tutor.contact', {
                url: '/contact',
                views: {
                    'frontend@frontend': {
                        templateUrl: 'templates/frontend/general/contact-tutor.html',
                        controller: 'TutorContactController',
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
                url: '/teachers',
                parent: 'backend',
                views: {
                    'backend': {
                        templateUrl: 'templates/backend/admin/teacher.html',
                        controller: 'TeacherListController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    'teachers': function(TeacherService) {
                        //return TeacherService.all();
                    }
                }
            })
            .state('schulfaecherverwaltung', {
                url: '/schulfaecherverwaltung',
                parent: 'backend',
                views: {
                    'backend': {
                        templateUrl: 'templates/backend/admin/admin_schulfaecherverwaltung.html',
                        controller: 'SubjectListController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    'subjects': function(SubjectService) {
                        //return SubjectService.all();
                    }
                }
            })
            .state('options', {
                url: '/options',
                parent: 'backend',
                views: {
                    'backend': {
                        templateUrl: 'templates/backend/admin/options.html',
                        controller: 'AdminOptionsController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    'options': function(AdministratorService) {
                        //return AdministratorService.getOptions();
                    }
                }
            })
            .state('reportedTutors', {
                url: '/reported',
                parent: 'backend',
                views: {
                    'backend': {
                        templateUrl: 'templates/backend/admin/reported-tutors.html',
                        controller: 'ReportedTutorsController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    'reportedTutors': function(ReportService) {
                        //return ReportService.all();
                    }
                }
            });
    }

})();