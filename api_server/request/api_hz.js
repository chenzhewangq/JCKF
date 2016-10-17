exports.request = function(app,queryResponse){

	app.post('/jckf/log/query',function(req,res){
		console.log('...');
		// var perData = devidePage(req.body,queryResponse.BasisShowData);
		setTimeout(function() {
			var resData  = {
				success:true,
				data: {
					page:{totalCount:2},
					list:queryResponse.logShowDate
				}
			};
			res.send(resData);
		},1000);
	})
	app.post('/jckf/log/queryLogDetail',function(req,res){
		console.log('...');
		// var perData = devidePage(req.body,queryResponse.BasisShowData);
		res.send(queryResponse.queryLogDetail);
	})
	

};