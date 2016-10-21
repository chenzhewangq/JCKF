

'use strict';
(
	function () {
	angular.module('jckfApp.roleManagement', [])
	.factory("roleManagement", ["Restangular",  function (Restangular) {
		return{
			query: function (params, callback){
				 Restangular.all('/jckf/role_management/roleQuery').post(params).then(callback);
			},
			addRole: function(params,callback){
				 Restangular.all('/jckf/role_management/addRole').post(params).then(callback);
			},
			modifyRole: function(params,callback){
				 Restangular.all('/jckf/role_management/modifyRole').post(params).then(callback);
			}
			



		};
	}]);
})();