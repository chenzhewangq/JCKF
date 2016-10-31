'use strict';
angular.module("jckfApp")
.controller('indexCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.params = {
      oldPassword: '',
      newPassword: '',
      confirmPassword:''
    };
    $scope.modal = {
      modalShow: false, //显示弹出的模态框
      modalMessage: '', //弹出的提示信息,
    };
    $scope.click = {
      click:false
    };

    //修改密码
    $scope.modifyPassword = function() {
      $scope.modal.modalShow = false;
      if ($scope.params.oldPassword === '') {
        // $('#mainId').modal('show');
        $scope.click.click = false;
        $('#password').attr('data-content', '请输入原密码')
        $('#password').popover('show');
        return;
      }
      if ($scope.params.newPassword === '') {
          // $('#mainId').modal('show');
          $scope.click.click = false; 
          $('#password').attr('data-content', '请输入新密码')
          // $('#password').popover({content: ''});
          $('#password').popover('show');
          return;
        }
        if ($scope.params.confirmPassword === '') {
          // $('#mainId').modal('show');
          $scope.click.click = false;
          $('#password').attr('data-content', '请输入确认密码')
          $('#password').popover('show');
          return;
        }
        // 密码规则验证
        if($scope.params.newPassword !== ''){
          var reg=/^(?![a-zA-Z0-9]+$)(?![^a-zA-Z/D]+$)(?![^0-9/D]+$).{6,15}$/;
          if(!reg.test($scope.params.newPassword)){
             $scope.click.click = false;
          $('#password').attr('data-content', '密码必须同时包含字母,数字和特殊字符的6-15位的组合');
          $('#password').popover('show');
          return;
          }
        }
        if($scope.params.oldPassword !== '' &&$scope.params.newPassword !== ''&&
          $scope.params.confirmPassword !== ''){
          if($scope.params.oldPassword ===$scope.params.newPassword ){
            $scope.click.click = false;
          $('#password').attr('data-content', '原密码和新密码不能相同')
          $('#password').popover('show');
          return;
          }
          if($scope.params.newPassword !==$scope.params.confirmPassword ){
            $scope.click.click = false;
          $('#password').attr('data-content', '新密码和确认密码不一致')
          $('#password').popover('show');
          return;
          }
        }
      $http.post('/jckf/user/modifyPassword', $scope.params).then(function(res) {
      	console.log(res)
        if (res.data.success === 0) {
          // $scope.click.click = true;
//          $cookies.put('id', moduleId);
          $('#myPassword').modal('hide');
          $('#mainId').modal('show');
          $scope.modal.modalMessage = res.data.message;
          $scope.click.click = false;
          // window.location.href = "/login/login.html" ;
        } else {
          // $('#mainId').modal('show');
          $('#myPassword').modal('show');
          $scope.click.click = false;
          $('#password').attr('data-content', res.data.message)
          $('#password').popover('show');
        }
      });

    };

    //登出
    $scope.logout = function() {
      $http.get('/jckf/user/logout').then(function(res) {
        if (res.data.success === 0) {
          console.log("aaaa");
          window.location.href = "/login/login.html" ;
        }
      });
    };

    $scope.cancel=function(){
      $scope.params.oldPassword="";
      $scope.params.newPassword="";
      $scope.params.confirmPassword="";
    }


})