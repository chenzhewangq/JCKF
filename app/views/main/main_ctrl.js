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

    $scope.date = new Date();

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

    $('.form_datetime').datetimepicker({
        //language:  'fr',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        showMeridian: 1
    });
    $('.form_date').datetimepicker({
        language:  'fr',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
    $('.form_time').datetimepicker({
        language:  'fr',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 1,
        minView: 0,
        maxView: 1,
        forceParse: 0
    });

    
    $scope.queryUlr = "/jckf/project/query";

    // 请求查询参数
    $scope.queryParams = {
      id:'', //项目ID
      projectName:'', //项目名称
      projectDirector:'', //项目负责人
      status:'0' //项目状态(0: 计划中 1：进行中，2：已结束)
    };

    // 编辑与查看查询参数
    $scope.modifyAndCheckParams = {
      id:'' //项目ID
    };

    // 添加项目传后台参数
    $scope.addParams = {
      projectName:'', //项目名称
      projectDirector:'', //项目负责人
      status:'1', //项目状态(0: 计划中 1：进行中，2：已结束)
      projectCode:'', //项目编号
      orderId:'', //工单编号
      startTime: new Date().Format("yyyy-MM-dd"), //开始时间
      endTime: new Date(new Date().getTime() + (365 * 24 * 60 * 60 * 1000)).Format("yyyy-MM-dd"), //结束时间
      projectDesc:'' //项目描述
    };

    $scope.initPage = function(){
      $scope.query();
    };

    //结束时间不得大于开始时间
    $scope.$watch('addParams.endTime', function(newValue, oldValue, scope){
      if (newValue < $scope.addParams.startTime) {
        $scope.addParams.endTime = oldValue;
      }
    });

    // 查询项目
    $scope.query = function(){
      projectManagement.query($scope.queryParams, function (response) {
        if (response.success){
          $scope.totalCount = response.total;
          $scope.queryList = response.data;
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

    //添加项目取消按钮
    $scope.addCancel = function(){
      $scope.addParams.projectName = ''; //项目名称
      $scope.addParams.projectDirector = '';//项目负责人
      $scope.addParams.status = '1';//项目状态(0: 计划中 1：进行中，2：已结束)
      $scope.addParams.projectCode = '';//项目编号
      $scope.addParams.orderId = ''; //工单编号
      $scope.addParams.startTime = new Date().Format("yyyy-MM-dd"); //开始时间
      $scope.addParams.endTime = new Date(new Date().getTime() + (365 * 24 * 60 * 60 * 1000)).Format("yyyy-MM-dd"); //结束时间
      $scope.addParams.projectDesc = ''; //项目描述
      for(var par in $scope.myForm){
        if(par[0] !== '$'){
          $scope.myForm[par].$dirty = false;
        }
      }
    };

    // 查看项目基本信息
    $scope.checkDetail = function(data){
          $scope.details = angular.copy(data);
          $scope.modifyAndCheckParams.id = $scope.details.id;
          projectManagement.detail($scope.modifyAndCheckParams, function (response) {
            if (response.success){
              $scope.detailsData = response.data;
            }else{
              $scope.setNoticeMsg("没有查询到数据");
            }
          });
          // $scope.detailsData = angular.copy(data);
    };

    // 编辑显示项目基本信息
    $scope.modify = function(data){
      $scope.beforeData = angular.copy(data);
      $scope.modifyAndCheckParams.id = $scope.beforeData.id;
      projectManagement.detail($scope.modifyAndCheckParams, function (response) {
        if (response.success){
          $scope.modifyData = response.data;
          console.log(response.data);
          // $scope.modifyData.projectName = response.data.projectName;
          // $scope.modifyData.projectCode = response.data.projectCode;
          // $scope.modifyData.projectDirector = response.data.projectDirector;
          // $scope.modifyData.status = response.data.status;
          // $scope.modifyData.orderId = response.data.orderId;
          // $scope.modifyData.projectDesc = response.data.projectDesc;
          // $scope.modifyData.startTime = response.data.startTime;
          // $scope.modifyData.endTime = response.data.endTime;
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

