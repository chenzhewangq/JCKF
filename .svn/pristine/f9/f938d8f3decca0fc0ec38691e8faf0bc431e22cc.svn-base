(function () {
  angular.module('jckfApp.projectMember', [])
	.factory('projectMemberService',  ["Restangular", function (Restangular) {
		return {
			query: function (params, callback){
				 Restangular.all('/jckf/projectMember/queryProjectMember').post(params).then(callback);
			},
			queryAdd: function (params, callback){
				 Restangular.all('/jckf/projectMember/queryProjectMemberAdd').post(params).then(callback);
			}
		}}]);
})()