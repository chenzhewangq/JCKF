angular.module("loginApp", [])
.controller('loginCtrl', function ($scope, $http) {
	var configUrl = "getImage";
    var key = '12345678';
   
    $scope.user = {
      loginUser: '',
      password: '',
      imageValue:''
    };
    $scope.modal = {
      modalShow: false, //显示弹出的模态框
      modalMessage: '', //弹出的提示信息,
    };
    $scope.click = {
      click:false
    };

    $scope.getImgCode = function() { 
            var getimagecode = document.getElementById("getCode");
            getimagecode.src=configUrl+"?sid="+Math.random(); 
    } 

    //登录
    $scope.login = function() {
      $scope.modal.modalShow = false;
      $scope.modal.modalMessage = '';
      if ($scope.user.loginUser === '') {
        $('#mainId').modal('show');
        $scope.modal.modalMessage = '请输入用户名';
        $scope.click.click = false;
        return;
      }
      if ($scope.user.password === '') {
          $('#mainId').modal('show');
          $scope.modal.modalMessage = '请输入密码';
          $scope.click.click = false;
          return;
        }
        if ($scope.user.imageValue === '') {
          $('#mainId').modal('show');
          $scope.modal.modalMessage = '请输入验证码';
          $scope.click.click = false;
          return;
        }
      $http.post('/jckf/user/login', $scope.user).then(function(res) {
      	console.log(res)
        if (res.data.result === 0) {
          // $scope.click.click = true;
//          $cookies.put('id', moduleId);
          window.location.href = "/index.html" ;
        } else {
          $('#mainId').modal('show');
          $scope.modal.modalMessage = res.data.resultMsg;
          $scope.getImgCode();
          $scope.user.imageValue = '';
          $scope.click.click = false;
        }
      });
    };

})