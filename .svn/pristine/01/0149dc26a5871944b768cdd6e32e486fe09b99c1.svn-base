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
var a = $scope.daLists  = [
	{
		roleId:1,
		roleNames: '系统管理员'
	},{
		roleId:2,
		roleNames: '项目经理'
	},{
		roleId:3,
		roleNames: '开发人员'
	},{
		roleId:4,
		roleNames: '测试人员'
	}

]
console.log(a)

	 //角色全选和反选
    $scope.proCheckbox = function(daList,index){
    	var roleDaIds = [];
    	var roleDaNames = [];
    		daList[index].checkbox = !daList[index].checkbox;
    		var mar = 0;
    		for(var i=0;i<daList.length;i++){
				if(daList[i].checkbox){
					roleDaIds.push(daList[i].roleId);
					roleDaNames.push(daList[i].roleNames);
					mar++;
				}
    		}
    		
    	var b = $scope.roleId = roleDaIds.join(',');
    	var c = $scope.roleDataNames = roleDaNames.join(',');
    	// if(roleDaIds.length===daList.length){
    	// 	$scope.findObj.roleId = roleDaIds;
    	// 	$scope.dataObj.roleId = roleDaIds;
     //    	$scope.roleDataName = '全部';
     //    	$scope.roleDataNames = '全部';
    	// }else{
    	// 	$scope.findObj.roleId = roleDaIds.join(',');
    	// 	$scope.dataObj.roleId = roleDaIds.join(',');
     //    	$scope.roleDataName = roleDaNames.join(',');
     //    	$scope.roleDataNames = roleDaNames.join(',');
    	// }
    }


	$scope.modify = function() {
		var str = [];
		$('input:checkbox[name=check]:checked').each(function(){
			str.push(this.value);
		})
		console.log(str);
	}
	

    $scope.queryMember = function() {
      $('#tb_departments').bootstrapTable('refresh');  
    };
      

	$scope.deleteMember = function() {
		var check = $('#tb_departments').bootstrapTable('getSelections');
		console.log(check);
    }
 
   }]);
})();