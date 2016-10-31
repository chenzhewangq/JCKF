'use strict';

/**
 * @ngdoc function
 * @name integratedDevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the integratedDevApp
 */
angular.module('jckfApp.userManagement')
  .controller('userCtrls', ['userManagementServer', '$scope', '$http', function (userManagementServer, $scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        //查询参数
        $scope.queryParams = {
          id:'',
          loginUser:'',
          staffName:''
        };
        //添加参数
        $scope.Params = {
          loginUser:'',
          staffName:'',
          gender:'M',
          phone:'',
          mail:'',
          expireTime:new Date(new Date().getTime() + (365 * 24 * 60 * 60 * 1000)).Format("yyyy-MM-dd")//有效期限
        }
        //删除参数
        $scope.deleteParams = {
          id:''
        }
    $scope.userUrl="/jckf/user_management/userQuery";

    $scope.initPage = function(){
      $scope.selectAll = false;
      //初始化
      $scope.userQuery();     //调用查询方法
      };

       $scope.userQuery = function() {
        userManagementServer.query($scope.queryParams, function (res){  
         if (res.success){
         // $scope.totalCount = res.data.totalCount; 
            $scope.res = userManagementServer.addState(res.data.list);
         }else{
           $scope.setNoticeMsg("没有查询到数据");
         }
                   
        })  
      };

      $scope.addUser = function(params){
          userManagementServer.addUser($scope.Params, function (res){
            
              if (res.success) {
                $scope.setNoticeMsg("添加成功");
                $scope.userQuery();
              }
              else{
                $scope.setNoticeMsg("添加失败");
              }

         })
        
          
           
      };

      $scope.modifyUser = function(params){

        userManagementServer.modifyUser($scope.Params,function(res){
          if (res.success) {
            $scope.setNoticeMsg("修改成功");
            $scope.userQuery();
          }else{
            $scope.setNoticeMsg("修改失败");
          }
        })
      };

      $scope.deleteUser = function(id){
        
        userManagementServer.deleteUser($scope.deleteParams,function(res){
          if (res.success) {
            $scope.setNoticeMsg("删除成功");
            $scope.userQuery();
          }else{
            $scope.setNoticeMsg("删除失败");
          }
        })
      };

      $scope.restPassword = function(){
        userManagementServer.restPassword($scope.Params,function(res){
          if (res.success) {
              $scope.setNoticeMsg("密码初始化成功！");
          }else{
            $scope.setNoticeMsg("密码初始化错误！");
          }
        })
      };
  
    $scope.checkAll = function (selectAll){
      if(selectAll === true){
        for(var i = 0; i < $scope.res.length; i++){
          $scope.res[i].state = true;
        }
      }else {
        for(var i = 0; i < $scope.res.length; i++){
          $scope.res[i].state = false;
        }
      }
      
    }
    //勾选一条或多条，查询出一条或多条用户信息。
    $scope.check = function (id, state){
      if(state === false){
        $scope.selectAll = false;
      }else {
        if($("input[name='checkbox']:checked").length === $scope.res.length){
          $scope.selectAll = true;
        }
      }
    }

    //勾选框是否选中
    $scope.isCheckedModify=function(){
      var arr = [];
      arr = userManagementServer.selectChecked($scope.res);
      if(arr.length === 1){
        $scope.modifyData = angular.copy(arr[0]);
        console.log($scope.modifyData)
        $("#modifyUserModal").modal("show");
      }else if(arr.length==0){
        $("#cheeckModal1").modal("show");
      }else{
        $("#cheeckModal2").modal("show");
      }
    };

      $scope.isCheckedDelete=function(){

        if ($("input[name='checkbox']:checked").length == 0) {

          $("#cheeckModal1").modal("show");

         }else{

          $("#deleteUserModal").modal("show");
         };
      };
      $scope.isCheckedRestPs=function(){

        if ($("input[name='checkbox']:checked").length == 0) {

          $("#cheeckModal1").modal("show");

         }else{

          $("#restPasswordModal").modal("show");
         };
      };

     

      //清空模态框
      $scope.cancel = function(){
        
         $scope.Params.loginUser = '';
         $scope.Params.staffName = '';
         $scope.Params.phone = '';
         $scope.Params.mail = ''
      };
      
  }]);
