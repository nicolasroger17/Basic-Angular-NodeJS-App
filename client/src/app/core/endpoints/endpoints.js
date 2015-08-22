(function (angular) { 'use strict';

    /**
     * Core
     */
    angular.module('tennis.core.endpoints', [
        'tennis.core.endpoints.rest',
        'tennis.core.endpoints.socket'
    ]);
})(window.angular);
