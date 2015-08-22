(function (angular, _) { 'use strict';

    /**
     * Auth service.
     */
    angular.module('tennis.core.auth', [])
        .service('Auth', function ($rootScope) {
            var auth = this;

            auth.login = function(credentials) {
                // TODO
            };

            auth.logout = function() {
                // TODO
            };

            auth.signup = function(credentials) {
                // TODO
            };


        });
})(window.angular, window._);
