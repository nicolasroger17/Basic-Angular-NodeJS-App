(function (angular) { 'use strict';

    /**
    * tennis authentication module
    */
    angular.module('tennis.ui.authentication', [
        'tennis.ui.authentication.login',
        'tennis.ui.authentication.logout',
        'tennis.ui.authentication.signup',
    ]);
})(window.angular);
