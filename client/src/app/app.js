(function (angular) { 'use strict';

    /**
     * tennis application.
     */
    angular.module('tennis', [
        'ui.router',
        'tennis.ui',
        'tennis.core'
    ])
    .config(function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise(function($injector, $location) {
            var url = $location.url();
            var redirectUrl = "";
            if (url.match("/app")) {
                if (url.match("/app/home")) {
                    redirectUrl = "app.home";
                }
            } else if (url.match("/authentication")) {
                redirectUrl = "authentication.login";
            } else if (url.match("/")) {
                redirectUrl = "app.home";
            }

            if (redirectUrl === "")
                redirectUrl = "app.home";

            console.log("redirect to : " + redirectUrl);
            $injector.invoke(function($state) {
                $state.go(redirectUrl);
            });
        });

        $stateProvider
        .state('authentication', {
            abstract: true,
            url: "/authentication",
            templateUrl: "app/ui/authentication/authentication.html"
        })
        .state('authentication.login', {
            url: "/login",
            views: {
                '@authentication': {
                    controller: 'LoginCtrl',
                    controllerAs: 'login',
                    templateUrl: "app/ui/authentication/login/login.html"
                }
            }
        })
        .state('app', {
            abstract: true,
            url: "/app",
            controller: 'AppCtrl',
            templateUrl: 'app/ui/app/app.html'
        })
        .state('app.home', {
            url: "/home",
            views: {
                '@app': {
                    controller: 'HomeCtrl',
                    controllerAs: 'home',
                    templateUrl: 'app/ui/app/home/home.html'
                }
            }
        })
    });
})(window.angular);
