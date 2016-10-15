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
      //初始化日期控件

    
      $scope.userQuery();     //调用查询方法
    };

      $scope.queryParams = {
          login_user:'',
          staff_name:'',
          gender:'',
          phone:'',
          mail:'',
          time:'',
          expire_time:''

        };
         $scope.flag = {
            modalShow: false,  //显示弹出的模态框
            modalMessage: '',   //弹出的提示信息,
          };
      $scope.userQuery = function() {
        $http.post('/jckf/user/userQuery', $scope.queryParams).success(function(res) {
           console.log(res);
          if (res.success){
             $scope.res = res.data.list;
          }else{
            $scope.setNoticeMsg("没有查询到数据");
          }
           console.log('success');
        });
      };

      /*$scope.addUser = function(){
        $http.post('/jckf/user/addUser', $scope.queryParams).success(function(res) {
           $scope.flag.modalShow=false;
           if (document.getElementById('login_user').value.length==0) {
              $scope.flag.modalMessage = "请输入用户名！"；
              $scope.flag.modalShow = true;

           };
           else if (document.getElementById('staff_name').value.length==0) {
              $scope.flag.modalShow=false;
              if (document.getElementById('staff_name').value.length==0) {
              $scope.flag.modalMessage = "请输入姓名！"；
              $scope.flag.modalShow = true;
           };
           else if (document.getElementById('gender').value.length==0) {
              $scope.flag.modalShow=false;
              if (document.getElementById('gender').value.length==0) {
              $scope.flag.modalMessage = "请选择性别！"；
              $scope.flag.modalShow = true;
           };
        });
      };*/
      
  }]);
