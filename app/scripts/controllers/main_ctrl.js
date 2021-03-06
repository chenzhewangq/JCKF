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
      status:'' //项目状态(0: 计划中 1：进行中，2：已结束)
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

    // 查询项目
    $scope.query = function(){
      projectManagement.query($scope.queryParams, function (response) {
        if (response.success){
          $scope.totalCount = response.data.totalCount;
          $scope.queryList = response.data.list;
        }else{
          $scope.setNoticeMsg("没有查询到数据");
        }
      });
    };

    // 添加项目
    $scope.add = function(){
      if($('#dtp_input2').val() !== ''){
        $scope.addParams.startTime = $('#dtp_input2').val();
      }
      if($('#dtp_input3').val() !== ''){
        $scope.addParams.endTime = $('#dtp_input3').val();
      }
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
      $scope.myForm.projectName.$error.required = false;
      $scope.myForm.projectName.$error.maxlength = false;
      $scope.myForm.projectDirector.$error.required = false;
      $scope.myForm.projectDirector.$error.maxlength = false;
      $scope.myForm.projectCode.$error.required = false;
      $scope.myForm.projectCode.$error.maxlength = false;
      $scope.myForm.orderId.$error.required = false;
      $scope.myForm.orderId.$error.maxlength = false;
      $scope.myForm.projectDesc.$error.required = false;
      $scope.myForm.projectDesc.$error.maxlength = false;
    };

    // 查看项目基本信息
    $scope.checkDetail = function(data){
          console.log(data);
          $scope.details = angular.copy(data);
          $scope.detailId = $scope.details.id;
          $scope.queryParams.id = $scope.detailId;
          projectManagement.query($scope.queryParams, function (response) {
            console.log(response);
            if (response.success){
              $scope.detailsData = response.data.list[0];
            }else{
              $scope.setNoticeMsg("没有查询到数据");
            }
          });
          // $scope.detailsData = angular.copy(data);
    };

    // 编辑显示项目基本信息
    $scope.modify = function(data){
      console.log(data);
      $scope.beforeData = angular.copy(data);
      $scope.projectId = $scope.beforeData.id;
      $scope.queryParams.id = $scope.projectId;
      projectManagement.query($scope.queryParams, function (response) {
        console.log(response);
        if (response.success){
          $scope.modifyData = response.data.list[0];
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

    //编辑项目取消按钮
    $scope.modifyCancel = function(){
      $scope.modifyForm.modifyName = '';
      $scope.modifyForm.modifyCode = '';
      $scope.modifyForm.modifyOrderId = '';
      $scope.modifyForm.modifyDirector = '';
      $scope.modifyForm.modifyDesc = '';
      $scope.myForm.modifyName.$error.required = false;
      $scope.myForm.modifyName.$error.maxlength = false;
      $scope.myForm.modifyCode.$error.required = false;
      $scope.myForm.modifyCode.$error.maxlength = false;
      $scope.myForm.modifyOrderId.$error.required = false;
      $scope.myForm.modifyOrderId.$error.maxlength = false;
      $scope.myForm.modifyDirector.$error.required = false;
      $scope.myForm.modifyDirector.$error.maxlength = false;
      $scope.myForm.modifyDesc.$error.required = false;
      $scope.myForm.modifyDesc.$error.maxlength = false;
    };

  }]);
 })()

