(function(angular) {
	'use strict';

	/**
	 * ui app module.
	 */
	angular.module('tennis.ui.app', [
			'tennis.ui.app.home'
		])
		.controller('AppCtrl', function($scope, Auth, $state) {
			// if (!Auth.isConnected()) return $state.go('authentication.login');
		});
})(window.angular);