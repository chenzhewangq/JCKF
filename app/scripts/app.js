'use strict';

/**
 * @ngdoc overview
 * @name integratedDevApp
 * @description
 * # integratedDevApp
 *
 * Main module of the application.
 */
var jckf = angular
  .module('jckfApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.router',
    'restangular',
	'jckfApp.roleManagement',
	'jckfApp.userManagement',
	'jckfApp.projectMember',
	'jckfApp.userManagement',
	'jckfApp.logManagement'    

  ]);
  
