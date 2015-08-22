(function (angular) { 'use strict';

    /**
     * Core
     */
    angular.module('tennis.core', [
        'tennis.core.auth',
        'tennis.core.endpoints',
        'tennis.core.models',
    ]);
})(window.angular);
