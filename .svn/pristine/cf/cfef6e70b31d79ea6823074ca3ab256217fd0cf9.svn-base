'use strict';
(
	function () {
	angular.module('jckfApp.userManagement', [])
	.factory("userManagementServer", ["Restangular",  function (Restangular) {
		return{
			query: function (params, callback){
				 Restangular.all('/jckf/user_management/userQuery').post(params).then(callback);
			},
			addUser: function(params,callback){
				 Restangular.all('/jckf/user_management/addUser').post(params).then(callback);
			},
			modifyUser:function(params,callback){
				Restangular.all('/jckf/user_management/modifyUser').post(params).then(callback);
			},
			deleteUser:function(params,callback){
				Restangular.all('/jckf/user_management/deleteUser').post(params).then(callback);
			},
			restPassword:function(params,callback){
				Restangular.all('/jckf/user_management/restPassword').post(params).then(callback);
			}
		};
	}]);
})();