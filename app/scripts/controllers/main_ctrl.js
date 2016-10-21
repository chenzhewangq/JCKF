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
  .controller('mainCtrls', ["$scope", "$http", "$filter", "projectManagement", function ($scope, $http, $filter, projectManagement) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.test = function () {
      console.log($("[name='checkbox']:first").prop("checked"))
      if($("[name='checkbox']:first").prop("checked")){
        $("[name='checkbox']").prop("checked",true);;
      }else {
        $("[name='checkbox']").prop("checked",false);
      }
      console.log($('input:checked'))
    };

    $scope.check = function () {
      console.log($('input:checked'))
    }

    $scope.url = "/jckf/project/query";

    
    $scope.queryUlr = "/jckf/project/query";

    // 请求查询参数
    $scope.queryParams = {
      id:'', //项目ID
      projectName:'', //项目名称
      projectDirector:'', //项目负责人
      status:'' //项目状态(0: 计划中 1：进行中，2：已结束)
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
          $scope.queryList = response.data.list;
        }else{
          $scope.setNoticeMsg("没有查询到数据");
        }
      });
    };

    // 添加项目
    $scope.add = function(){
      $scope.addParams.startTime = $('#dtp_input2').val();
      $scope.addParams.endTime = $('#dtp_input3').val();
      projectManagement.add($scope.addParams, function (response) {
        if (response.success){
          $scope.setNoticeMsg("添加成功");
        }else{
          $scope.setNoticeMsg("添加失败");
        }
      });
    };

    // 查看项目基本信息
    $scope.checkDetail = function(data){
          console.log(data);
          $scope.details = angular.copy(data);
          $scope.detailId = $scope.details.id;
          projectManagement.query($scope.detailId, function (response) {
            console.log(response);
            if (response.success){
              $scope.detailsData = response.data.list;
            }else{
              $scope.setNoticeMsg("没有查询到数据");
            }
          });
    };

    // 编辑显示项目基本信息
    $scope.modify = function(data){
      console.log(data);
      $scope.beforeData = angular.copy(data);
      $scope.projectId = $scope.beforeData.id;
      projectManagement.query($scope.projectId, function (response) {
        console.log(response);
        if (response.success){
          $scope.modifyData = response.data.list;
        }else{
          $scope.setNoticeMsg("没有查询到数据");
        }
      });
    };
    // 保存编辑后的项目基本信息
    $scope.saveModify = function(data){
      $scope.saveModifyData = angular.copy(data);
      $scope.saveModifyData.startTime = $('#dtp_input4').val();
      $scope.saveModifyData.endTime = $('#dtp_input5').val();
      console.log($scope.saveModifyData);
      projectManagement.modify($scope.saveModifyData, function(response){
        if (response.success) {
          $scope.setNoticeMsg("修改成功");
          $scope.query();
        }else {
          $scope.setNoticeMsg("修改失败");
        }
      });
    };

  }]);
 })()

