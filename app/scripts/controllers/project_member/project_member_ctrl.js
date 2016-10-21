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
	
	/** 编辑方法*/
	$scope.edit = function(){
		
	}
	
	/** 保存方法*/
	$scope.save = function(){
		alert("保存成功");
	}
	
	/** 取消方法 */
	$scope.cancle = function(){
		//重新查询
		$scope.queryMember();
		alert("取消成功并重新查询完成");
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