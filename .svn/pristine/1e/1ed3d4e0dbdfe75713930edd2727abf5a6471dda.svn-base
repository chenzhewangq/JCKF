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
  .controller('projectMemberCtrls',  ["$scope", "$http", "projectMemberService", "$stateParams",function ($scope, $http, projectMemberService, $stateParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.init = function(){
      $scope.queryMember();     //调用查询方法
    };

    $scope.queryParams = { 
        login_user:'',
		staff_name:'',
		role_name:''
    };

    $scope.queryMember = function() {
		projectMemberService.query($scope.queryParams,function(res){
			console.log(res);
			if (res.success){
				$scope.res = res.data.list;
			} else{
				$scope.setNoticeMsg("没有查询到数据");
			}
		});
    };
      
	$scope.deleteMemeber = function() {
		
		
	}
	
   }]);
})()