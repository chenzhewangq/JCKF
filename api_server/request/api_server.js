var express = require('express');
// var path = require('path');
/*var logger = require('morgan');*/
var bodyParser = require('body-parser');
var app = express();
var http = require('http').createServer(app);
app.set('port', process.env.PORT || 19001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// var queryResponse = require('../response/res_comm');
http.listen(app.get('port'), function() {
	console.log('API服务器已启动，开始监听端口' + app.get('port'));
});

// app.post('/om/resource/show/basisShowQuery',function(req,res){
// 	console.log('...');
// 	// var perData = devidePage(req.body,queryResponse.BasisShowData);
// 	setTimeout(function() {
// 		var resData  = {
// 			success:true,
// 			data: {
// 				page:{totalCount:11},
// 			}
// 		};
// 		res.send(resData);
// 	},1000);
// });

var res_cz = require('../response/res_cz');
var api_cz = require('./api_cz');
api_cz.request(app, res_cz);


var res_yf = require('../response/res_yf');
var api_yf = require('./api_yf');
api_yf.request(app, res_yf);


var res_wyj = require('../response/res_wyj');
var api_wyj = require('./api_wyj');
api_wyj.request(app, res_wyj);


var res_lbw = require('../response/res_lbw');
var api_lbw = require('./api_lbw');
api_lbw.request(app, res_lbw);


var res_xzt = require('../response/res_xzt');
var api_xzt = require('./api_xzt');
api_xzt.request(app, res_xzt);

var res_zsj = require('../response/res_zsj');
var api_zsj = require('./api_zsj');
api_zsj.request(app, res_zsj);

var res_hz = require('../response/res_hz');
var api_hz = require('./api_hz');
api_hz.request(app, res_hz);
