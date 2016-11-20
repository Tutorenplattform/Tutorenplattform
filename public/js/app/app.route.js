(function() {

    angular.module('tp')
        .config(config);

    config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider'];

    function config($locationProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
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
                    '@frontend': {
                        templateUrl: 'templates/frontend/general/tutor-list.html'
                    }
                }
            });

        $stateProvider
            .state('home', {
                url: '/home',
                parent: 'backend',
                views: {
                    '@backend': {
                        templateUrl: 'templates/backend/general/home.html'
                    }
                }
            })
    }

})();