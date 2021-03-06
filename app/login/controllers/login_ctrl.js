angular.module("loginApp", [])
.controller('loginCtrl', function ($scope, $http) {
	var configUrl = "/jckf/getImage";
    var key = '12345678';
   
    $scope.user = {
      loginUser: '',
      password: '',
      imageValue:''
    };

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

    $scope.getImgCode = function() { 
            var getimagecode = document.getElementById("getCode");
            getimagecode.src=configUrl+"?sid="+Math.random(); 
    }; 

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
      	console.log(res);
      	if(res.data.success === 0){
      		window.location.href = "/index.html" ;
      	}
       else if (res.data.success === 2) {
          // $scope.click.click = true;
          // $cookies.put('id', moduleId);
          // window.location.href = "/index.html" ;
          $scope.user.loginUser='';
          $scope.user.password='';
          $scope.user.imageValue='';
          $('#myPassword').modal('show');
        } else {
          $('#mainId').modal('show');
          $scope.modal.modalMessage = res.data.message;
          $scope.getImgCode();
          $scope.user.imageValue = '';
          $scope.click.click = false;
        }
      });
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
          $scope.params.oldPassword='';
          $scope.params.newPassword='';
          $scope.params.confirmPassword='';
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

    $scope.cancel=function(){
      $scope.params.oldPassword="";
      $scope.params.newPassword="";
      $scope.params.confirmPassword="";
    };

})