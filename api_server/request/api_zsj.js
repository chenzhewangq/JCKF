exports.request = function(app,response){

	app.post('/jckf/user/login',function(req,res){
		console.log('...');
		// var perData = devidePage(req.body,queryResponse.BasisShowData);
		
		res.send(response.showData);
		
	});

};