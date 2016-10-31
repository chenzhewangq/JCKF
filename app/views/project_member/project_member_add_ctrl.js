'use strict';

/**
 * @ngdoc function
 * @name integratedDevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the integratedDevApp
 */
(function () {
  angular.module('jckfApp.projectMember')
  .controller('projectMemberAddCtrls',  ["$scope", "$http", "projectMemberService", "$stateParams",function ($scope, $http, projectMemberService, $stateParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	
	
    $scope.queryMemberAdd = function() {
		$('#tb_projectMember').bootstrapTable('refresh');
	}
	
	$scope.cancel = function() {
		$('#tb_projectMember').bootstrapTable('refresh');
	}
	
   }]);
})()
