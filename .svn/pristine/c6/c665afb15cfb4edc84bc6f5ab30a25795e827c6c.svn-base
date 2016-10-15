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

      $http.post('/jckf/user/modifyPassword', $scope.params).then(function(res) {
      	console.log(res)
        if (res.data.result === 0) {
          // $scope.click.click = true;
//          $cookies.put('id', moduleId);
          $('#myPassword').modal('hide');
          $('#mainId').modal('show');
          $scope.modal.modalMessage = res.data.resultMsg;
          $scope.click.click = false;
          // window.location.href = "/login/login.html" ;
        } else {
          $('#mainId').modal('show');
          $scope.getImgCode();
          $scope.user.imageValue = '';
          $scope.click.click = false;
          $('#password').attr('data-content', res.data.resultMsg)
          $('#password').popover('show');
        }
      });

    };

})