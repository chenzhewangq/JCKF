exports.request = function(app,queryResponse){

	app.post('/jckf/project/query',function(req,res){
			var resData  = {
				success:true,
				total: 3,
				data: queryResponse.projectShowData
			};
			res.send(resData);
		
		
	});

	app.post('/jckf/project/details',function(req,res){
			var resData  = {
				success:true,
				data: queryResponse.modifyAndCheckShowData
			};
			res.send(resData);
	});

	app.post('/jckf/project/addProject',function(req,res){
			var resData  = {
				success:true,
				message: '添加成功'
			};
			res.send(resData);
	});

	app.post('/jckf/project/modifyProject',function(req,res){
			var resData  = {
				success:true,
				message: '编辑成功'
			};
			res.send(resData);
	});
};