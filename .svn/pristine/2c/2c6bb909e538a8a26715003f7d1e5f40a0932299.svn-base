jckf.config(function($stateProvider, $urlRouterProvider) {
	//$urlRouterProvider.otherwise("/main");
	$stateProvider
		.state('main', {
			url: "/main",
			templateUrl: "views/main.html",
			controller: "mainCtrls"
		})
		.state('projectManage', {
			// abstract: true, 
			url: "/projectManage",
			templateUrl: "views/project_management/project_management.html"
		})
		.state('projectManage.devUnitTest', {
			url: "/devUnitTest",
			templateUrl: "views/project_management/develop_management/unit_test.html"
		})
		.state('roleManage', {
			url: "/roleManage",
			templateUrl: "views/role_management/roleQuery.html",
			controller: "roleCtrls"
		})
		.state('userLogin', {
			url: "/userLogin",
			templateUrl: "views/user_login/user_login.html",
			controller:"userLogin"
		})

		.state('userManage', {
			url: "/userManage",
			templateUrl: "views/user_management/user_management.html",
			controller: "userCtrls"
		})
		.state('projectMember',{
			url:"/projectMember",
			templateUrl: "views/project_member/project_member.html",
			controller: "projectMemberCtrls"
		})
		.state('projectMember.add',{
			url: "/projectMemberAdd",
			templateUrl: "views/project_member/project_member_add.html",
			controller: "projectMemberAddCtrls"
		})
		.state('addProject',{
			url: "/addProject",
			templateUrl: "views/add_project.html"
		}).state('logManagement',{
			url: "/logManagement",
			templateUrl: "views/log_management/log_management.html",
			controller: "logCtrls"
		})

});