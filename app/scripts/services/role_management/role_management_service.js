// angular.module(.factory("roleManegement", ["Restangular", function (Restangular) {
// 	"use strict";
// 	return{
// 		query: function (params, callback){
// 			 Restangular.all(urlConfig.get("/jckf/role/roleQuery")).post(params).then(callback);
// 		},
// 	}

// 	}])
// 	

'use strict';
(function () {
	angular.module('jckfApp.roleManagement', [])
	.factory("roleManagement", ["Restangular",  function (Restangular) {
		return{
			query: function (params, callback){
				 Restangular.all('/jckf/role_management/roleQuery').post(params).then(callback);
			}
		};

	}]);
})();