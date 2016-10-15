'use strict';

/**
 * @ngdoc function
 * @name integratedDevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the integratedDevApp
 */
angular.module('jckfApp.logManagement')
  .controller('logCtrls', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // 页面默认显示查询条件
    $scope.query = {
      projectName:'', //项目名称
      projectDirector:'', //项目负责人
      status:'1' //项目状态
    };

    // 请求查询参数
    $scope.queryParams = {
      projectName:'', //项目名称
      projectDirector:'', //项目负责人
      status:'1' //项目状态(0: 计划中 1：进行中，2：已结束)
    };

   
    $scope.initPage = function(){
      $scope.query();
    };

    // 查询项目
    $scope.query = function(){
      $http.post('/jckf/log/query', $scope.queryParams).success(function(response){
        console.log(response);
        if (response.success) {
          $scope.res = response.data.list;
        }else{
          $scope.setNoticeMsg("没有查询到数据");
        }
        console.log($scope.res);
      });
    };

   

  });
