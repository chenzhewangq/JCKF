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



 $scope.initPage = function(){
      //初始化
      $scope.userQuery();     //调用查询方法
     };
    //查询
      $scope.queryParams = {
          id:'',
          loginUser:'',
          staffName:'',
          gender:'',
          phone:'',
          mail:'',
          createTime:'',
          expireTime:''
        };
        //查询参数
        $scope.params2 = {
          loginUser:'',
          staffName:''
        };
        //添加参数
        $scope.Params = {
          id:'',
          loginUser:'',
          staffName:'',
          gender:'',
          phone:'',
          mail:'',
          expireTime:''
        }
         /*$scope.Params.createTime = getNowFormatDate();    
         function getNowFormatDate() {

              var date = new Date();
              var seperator1 = "-";
              var seperator2 = ":";
              var month = date.getMonth() + 1;
              var strDate = date.getDate();
              if (month >= 1 && month <= 9) {
                  month = "0" + month;
              }
              if (strDate >= 0 && strDate <= 9) {
                  strDate = "0" + strDate;
              }
              var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                      + " " + date.getHours() + seperator2 + date.getMinutes()
                      + seperator2 + date.getSeconds();
              return currentdate;
          }*/

       /* //修改参数
        $scope.modifyParams = { 
          staffName:'',
          gender:'',
          phone:'',
          mail:'',
          expire_time:''
        }*/
        //删除参数
        $scope.deleteParams = {
          id:''
        }
    $scope.pageUrl="/jckf/user_management/userQuery";

  //点击全选，查询出所有的用户信息
    $scope.checkAll = function (){
      console.log($("[name='checkbox']:first").prop("checked"))
      if($("[name='checkbox']:first").prop("checked")){
        $("[name='checkbox']").prop("checked",true);;
          userManagementServer.query($scope.queryParams, function (res){
            
                     if (res.success){
                        $scope.res = res.data.list;
                     }else{
                       $scope.setNoticeMsg("没有查询到数据");
                     }     
        })  
      }else {
        $("[name='checkbox']").prop("checked",false);
      }
      
    }
  //勾选一条或多条，查询出一条或多条用户信息。
    $scope.check = function (id){
     // console.log($("[name='checkbox'][value="+id+"]").prop("checked"))
     console.log(id);
      if($("[name='checkbox'][value="+id+"]").prop("checked")){
        $("[name='checkbox'][value="+id+"]").prop("checked", true);
        userManagementServer.query($scope.id, function (res){
          console.log(res);
                     if (res.success){
                        $scope.modifyList = res.data.list;
                     }else{
                       $scope.setNoticeMsg("没有查询到数据");
                     }
        }) 
      }else {
        $("[name='checkbox'][value="+id+"]").prop("checked", false);
         if($("[name='checkbox']:first").prop("checked")){
          $("[name='checkbox']:first").prop("checked", false);
        }  
      }
     
    }

      //勾选框是否选中
      $scope.isCheckedModify=function(){

        if ($("input[name='checkbox']:checked").length == 0) {
            
          $("#cheeckModal1").modal("show");

         }else if($("input[name='checkbox']:checked").length >1){

          $("#cheeckModal2").modal("show");
         }else{

          $("#modifyUserModal").modal("show");
         };
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
      $scope.userQuery = function() {
        userManagementServer.query($scope.queryParams, function (res){
            
                     if (res.success){
                        $scope.res = res.data.list;
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
      //清空模态框
      $scope.cancel = function(){
        
         $scope.Params.loginUser = '';
         $scope.Params.staffName = '';
         $scope.Params.phone = '';
         $scope.Params.mail = '';
         $scope.Params.expireTime = ''
        
      };
      
  }]);
