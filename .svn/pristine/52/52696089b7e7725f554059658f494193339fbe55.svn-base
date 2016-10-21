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

    $scope.queryLogUlr = "/jckf/log/query'";
   
       // 请求查询参数
    $scope.queryParams = {
      id:'', //项目ID
      projectName:'', //项目名称
      projectDirector:'', //项目负责人
      status:'' //项目状态(0: 计划中 1：进行中，2：已结束)
    };
   
    $scope.initPage = function(){
      $scope.query();
    };

    // 查询日志
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

  $scope.queryWhere = function(){
      $http.post('/jckf/log/queryWhere', $scope.queryParams).success(function(response){
        console.log(response);
        if (response.success) {
          $scope.res = response.data.list;
        }else{
          $scope.setNoticeMsg("没有查询到数据");
        }
        console.log($scope.res);
      });
    };

    // 查询日志详情
    $scope.queryLogDetail = function(){
      $http.post('/jckf/log/queryLogDetail', $scope.queryParams).success(function(response){
        console.log(response);
       
          //$scope.res = response;
         var arrFiled="[{";
         var map = eval(response[0].oldValue);
         var result=Array();
         for (var key in map) {  
          var a = map[key];
          for (var k in a) {  
            // alert(k+'---'+a[k]);
            // console.log(k+'---'+a[k]);
             arrFiled=arrFiled+"'"+k+"':"+"'"+k+"',";
           }   
        }  //end  for (var key in map) {  
        //var arrJson= JSON.stringify(arrFiled);
         arrFiled=arrFiled+"}]";
        var arrJson=eval(arrFiled);
        result=result.concat(arrJson);
        result=result.concat(response[0].oldValue);
        result=result.concat(response[0].newValue);
         console.log(result);
        $scope.resp = result;
        window.setTimeout(equlesTableValue,1000); 
      });

      // $scope.log = [[], []]
    };//end  $scope.queryLogDetail = function(){



  });

function equlesTableValue(){
   var tb_before=$("#tb_before td");
   var tb_back=$("#tb_back td");
   var len=$("#tb_filed tr").length;
   for(var i=1;i<len;i++){
      if(tb_back.eq(i).text()!=tb_before.eq(i).text()){
        $("#tb_filed tr").eq(i).css('background-color','red');
        $("#tb_before tr").eq(i).css('background-color','red');
        $("#tb_back tr").eq(i).css('background-color','red');
      }
   }

}