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
            note:'',
            projectMenu: 0,
            ueseMenu: 0,
            logeMenu: 0,
            roleMenu: 0
          };

        //修改参数
         $scope.modifyParams = {
            roleName:'',
            note:'',
            projectMenu:'',
            ueseMenu:'',
            logeMenu:'',
            roleMenu:''
          };

        $scope.roleQue = function() {
          roleManegement.query($scope.queryParams, function (res) {
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


      //
       $scope.modifyPa = function(data){  
/*        console.log(data)*/
            $('#myModals').modal('show');
            $scope.modifyParams.roleName = data.roleName;
            $scope.modifyParams.note = data.note;
            if(data.roleMenu === 1){
              $("#myModals input[type='checkbox']").eq(3).prop('checked', true);
               $scope.modifyParams.roleMenu = 1;
            }else if (data.roleMenu === 0){
                $("#myModals input[type='checkbox']").eq(3).prop('checked', false);
            }
            if(data.logeMenu === 1){
              $("#myModals input[type='checkbox']").eq(2).prop('checked', true);
              $scope.modifyParams.logeMenu = 1;
            }else if (data.logeMenu === 0){
                $("#myModals input[type='checkbox']").eq(3).prop('checked', false);
            }
            if(data.ueseMenu === 1){
              $("#myModals input[type='checkbox']").eq(1).prop('checked', true);
              $scope.modifyParams.ueseMenu = 1;
            }else if(data.ueseMenu === 0){
                 $("#myModals input[type='checkbox']").eq(1).prop('checked', false);
            }
            if(data.projectMenu === 1){
              $("#myModals input[type='checkbox']").eq(0).prop('checked', true);
              $scope.modifyParams.projectMenu = 1;
            }else if (data.projectMenu === 0){
                 $("#myModals input[type='checkbox']").eq(1).prop('checked', false);
            }
          
      };

      $scope.cancel = function (){
        $('#myModals').modal('hide');
        $scope.modifyParams.roleName = "";
        $scope.modifyParams.note = "";
        $("#myModals input[type='checkbox']").each(function (){
          $(this).prop('checked', false);
        });
      }

        
     // });
   }]);
})()