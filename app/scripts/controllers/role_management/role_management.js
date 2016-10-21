'use strict';

/**
 * @ngdoc function
 * @name integratedDevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the integratedDevApp
 */
(function () {
  angular.module('jckfApp.roleManagement')
  .controller('roleCtrls',  ["$scope", "$http", "roleManagement","$stateParams",function ($scope, $http, roleManegement, $stateParams) {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

       // BaseController.call(this, $scope, Restangular);
        $scope.initPage = function(){
      
        $scope.roleQue();     //调用查询方法
      };

          $scope.flag = {
            modalShow: false,  //显示弹出的模态框
            modalMessage: '',   //弹出的提示信息,
          };
        //查询参数
        $scope.queryParams = {
            roleName:''
          };
        //添加参数
         $scope.addParams = {
            roleName:'',
            note:''
          };

        //修改参数
         $scope.modifyParams = {
            roleName:'',
            note:''
          };

        $scope.roleQue = function() {
          roleManegement.query($scope.queryParams, function (res) {
               console.log(res);
                if (res.success){
                   $scope.res = res.data.list;
                }else{
                  $scope.setNoticeMsg("没有查询到数据");
                }
            });

        };



     $scope.addRole = function(params){
          roleManegement.addRole($scope.addParams, function (res){
              if (res.success) {
                $('#myModal').modal('hide')
                $scope.roleQue();
              }
              else{
                $scope.setNoticeMsg("添加失败");
              }

         })
           
      };



      $scope.modifyRole = function(params){
          roleManegement.modifyRole($scope.modifyParams, function (res){
              if (res.success) {
                 $('#myModals').modal('hide')
                $scope.roleQue();
              }
              else{
                $scope.setNoticeMsg("修改失败");
              }

         })
           
      };



        
     // });
   }]);
})()