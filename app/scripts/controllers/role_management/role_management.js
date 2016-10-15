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
        //初始化日期控件

      
        $scope.roleQer();     //调用查询方法
      };



        $scope.queryParams = {
            role_name:''
          };


        $scope.roleQer = function() {
          // $http.post('/jckf/role/roleQuery', $scope.queryParams).success(function(res) {
         //    console.log(res);
         //    if (res.success){
         //       $scope.res = res.data.list;
         //    }else{
         //      $scope.setNoticeMsg("没有查询到数据");
         //    }
          //  console.log('success');
          // });
          roleManegement.query($scope.queryParams, function (res) {
               console.log(res);
                if (res.success){
                   $scope.res = res.data.list;
                }else{
                  $scope.setNoticeMsg("没有查询到数据");
                }
            });

        };
        
     // });
   }]);
})()