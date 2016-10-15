exports.request = function(app,queryResponse){

	app.post('/jckf/role/roleQuery',function(req,res){
		console.log('...');
		// var perData = devidePage(req.body,queryResponse.BasisShowData);
		setTimeout(function() {
			var resData  = {
				success:true,
				data: {
					page:{totalCount:2},
					list:queryResponse.RoleShowData
				}
			};
			res.send(resData);
		},1000);
	});

};