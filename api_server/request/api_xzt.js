exports.request = function(app,queryResponse){

	app.post('/jckf/projectMember/queryProjectMember',function(req,res){
		console.log('...');
		// var perData = devidePage(req.body,queryResponse.BasisShowData);
		// setTimeout(function() {
		// 	var resData  = {
		// 		success:true,
		// 		total: 1,
		// 		rows: 10,
		// 		data: queryResponse.ProjectMemberData
		// 	};
		// 	res.send(resData);
		// },1000);
		res.send(queryResponse.ProjectMemberData);
	});
	
	app.post('/jckf/projectMember/queryProjectMemberAdd',function(req,res){
		console.log('...');
		// var perData = devidePage(req.body,queryResponse.BasisShowData);
		//setTimeout(function() {
		//	var resData  = {
		//		success:true,
		//		data: {
		//			page:{totalCount:2},
		//			list:queryResponse.ProjectMemberAddData
		//		}
		//	};
		//	res.send(resData);
		//},1000);
		res.send(queryResponse.ProjectMemberAddData);
	});
	
	app.post('/jckf/projectMember/queryRole',function(req,res){
		console.log('...');
		// var perData = devidePage(req.body,queryResponse.BasisShowData);
		setTimeout(function() {
			var resData  = {
				success:true,
				data: {
					page:{totalCount:2},
					list:queryResponse.RoleData
				}
			};
			res.send(resData);
		},1000);
		//res.send(queryResponse.RoleData);
	});

};