'use strict';
(function () {
	angular.module('jckfApp')
	.factory("projectManagement", ["Restangular",  function (Restangular) {
		return{
			query: function (params, callback){
				 Restangular.all('/jckf/project/query').post(params).then(callback);
			},
			add: function (params, callback){
				 Restangular.all('/jckf/project/addProject').post(params).then(callback);
			},
			modify: function(params, callback){
				 Restangular.all('/jckf/project/modifyProject').post(params).then(callback);
			},
			detail: function(params, callback){
				 Restangular.all('/jckf/project/details').post(params).then(callback);
			}
		};

	}]);
})();