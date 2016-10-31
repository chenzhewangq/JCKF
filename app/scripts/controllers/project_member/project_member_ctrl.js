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
  .controller('projectMemberCtrls',  ["$scope", "$http", "projectMemberService", function ($scope, $http, projectMemberService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	$scope.roleName = {};
	//初始化查询角色
	$scope.init = function() {
		projectMemberService.queryRole(null, function(res){
			console.log(res);
			if (res.success){
			   $scope.roleName = res.data.list;
			   console.log($scope.roleName);
			}else{
			  $scope.setNoticeMsg("没有查询到数据");
			}
		})
	}
	
	$scope.modify = function() {
		var str = [];
		$('input:checkbox[name=check]:checked').each(function(){
			str.push(this.value);
		})
		console.log(str);
	}
	


    $scope.init = function(){
      $(function () {

          //1.初始化Table
          var oTable = new TableInit();
          oTable.Init();

          //2.初始化Button的点击事件
          var oButtonInit = new ButtonInit();
          oButtonInit.Init();

      });
    };
    $scope.test = function () {
      console.log('aaa');
    }
    $scope.queryParams = { 
        login_user:'',
		staff_name:'',
		role_name:''
    };



    $scope.init = function(){

    };

    $scope.queryParams = { 
        login_user:'',
		staff_name:'',
		role_name:''
    };


    $scope.queryMember = function() {
      $('#tb_departments').bootstrapTable('refresh');  
    };
      

	$scope.deleteMember = function() {
		var check = $('#tb_departments').bootstrapTable('getSelections');
		console.log(check);
    }
 
   }]);
})();