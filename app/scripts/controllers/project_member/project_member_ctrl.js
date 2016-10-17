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


    $scope.queryMember = function() {

  		// projectMemberService.query($scope.queryParams,function(res){
  			
  			
  		// 		$scope.res = res;
  			
  		// });
      // oTable.init();
      
      // var a = {
      //   limit: 10,   //页面大小
      //   offset: 1,  //页码
      //   userName: $("#member_search_userName").val(),
      //   name: $("#member_search_name").val(),
      //   role: $("#member_search_role").val()
      // };
      
      $('#tb_departments').bootstrapTable('refresh');  
    };

 
var daList = $scope.yhctlModelOptions = [ 
                              {roleId: 1, roleName: '限定用户'}, 
                              {roleId: 2, roleName: "限定商家"}, 
                              {roleId: 3, roleName: "限定使用次数"},
                              {roleId: 4, roleName: "限定药品"}, 
                              {roleId: 5, roleName: "与其它优惠共享"}];

  console.log(daList);
      

	$scope.deleteMember = function() {
		var check = $('#tb_departments').bootstrapTable('getSelections');
    console.log(check);
  }
	// $scope.deleteMemeber = function() {



    //角色全选和反选
 //    $scope.proCheckbox = function(type,daList,index){
 //      var roleDaIds = [];
 //      var roleDaNames = [];
 //      if('one'===type){
 //        daList[index].checkbox = !daList[index].checkbox;
 //        var mar = 0;
 //        for(var i=0;i<daList.length;i++){
 //        if(daList[i].checkbox){
 //          roleDaIds.push(daList[i].roleId);
 //          roleDaNames.push(daList[i].roleName);
 //          mar++;
 //        }
 //        }
 //      }
 //         var a = $scope.roleId = roleDaIds.join(',');
 //          $scope.roleDataNames = roleDaNames.join(',');
        
 //      console.log(a);
     
 //    }
 

	// $scope.deleteMemeber = function() {

		
	// }
	
   }]);
})();