'use strict';

/**
 * @ngdoc function
 * @name integratedDevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the integratedDevApp
 */
 (function(){
  angular.module('jckfApp')
  .controller('mainCtrls', ["$scope", "$http", "projectManagement",function ($scope, $http, projectManagement) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.url = "/jckf/project/query";
    // 请求查询参数
    $scope.queryParams = {
      projectName:'', //项目名称
      projectDirector:'', //项目负责人
      status:'1' //项目状态(0: 计划中 1：进行中，2：已结束)
    };

    // 添加项目传后台参数
    $scope.addParams = {
      projectName:'', //项目名称
      projectDirector:'', //项目负责人
      status:'1', //项目状态(0: 计划中 1：进行中，2：已结束)
      projectCode:'', //项目编号
      orderId:'', //工单编号
      startTime:'', //开始时间
      endTime:'', //结束时间
      projectDesc:'' //项目描述
    };

    $scope.initPage = function(){
      $scope.query();
    };

    // 查询项目
    $scope.query = function(){
      projectManagement.query($scope.queryParams, function (response) {
        console.log(response);
        if (response.success){
          $scope.res = response.data.list;
        }else{
          $scope.setNoticeMsg("没有查询到数据");
        }
      });
    };

    // 添加项目
    $scope.add = function(){
      projectManagement.add($scope.addParams, function (response) {
        if (response.success){
          $scope.setNoticeMsg("添加成功");
        }else{
          $scope.setNoticeMsg("添加失败");
        }
      });
    };

    // 查看项目基本信息
    $scope.checkDetail = function(){
      projectManagement.checkDetail($scope.res.projectName, function (response) {
        if (!response.success) {
          $scope.setNoticeMsg("查看失败");
        }else{
          $scope.details = response.data.list;
        }
      });
    };

    // 编辑项目基本信息
    $scope.modify = function(){
      projectManagement.modify($scope.modifyData, function(response){
        if (response.success) {
          $scope.modify = response.data.list;
        }else {
          $scope.setNoticeMsg("修改失败");
        }
      });
    };

  }]);
 })()

