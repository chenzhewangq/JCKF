exports.logShowDate = [
							{
				             id: 0,
				             projectId: "运营项目",
				             modulePath: "xxxxx/xxx/xxx",
				             operType: "修改项目",
				             oldValue: "240Mhz",
				             newValue: "8G",
				             operTime: "2016-08-09",
				             staffName: "黄智"
				           }, {
				             id: 1,
				             projectId: "运营项目2",
				             modulePath: "xxxxx/xxx/xxx",
				             operType: "修改密码",
				             oldValue: "******",
				             newValue: "******",
				             operTime: "2016-08-10",
				             staffName: "黄智"
				           }
];




// 日志详情Test
exports.queryDetailTest = [
	//["commId", ['1', '2']],
	//["commName", ['aa', 'bb']],
	  ["oldValue", [
                   "aaaaa",
                   "111111",
                   "true",
                   "false",
                   "false",
                   "false",
                   "false",
                   "false"
                ]],
	  ["newValue", [{
                   "name":"bbbb",
                   "age":"2222222",
                   "isLog":"true",
                   "isOA":"false",
                   "isLO":"false",
                   "isLM":"false",
                   "isMN":"false",
                   "isYU":"false"
               } ]],

]

// 日志详情
exports.queryLogDetail = [
	//["commId", ['1', '2']],
	//["commName", ['aa', 'bb']],

	/*  ["filed",[
	  		"姓名",
	  		"年龄"，
	  		"邮箱",
	  		"手机"
	  ]],*/
	/* ["filed", [
                   "姓名",
                   "年龄",
                   "邮箱",
                   "手机"
                ]],
	  ["oldValue", [
                   "小明",
                   "30",
                   "22222@qq.com",
                   "1383838438"
                ]],
	  ["newValue", [
                   "小明",
                   "30",
                   "22222@qq.com",
                   "1565656456"
               ]]*/


			 {
	             id: 1,
	             projectId: "运营项目2",
	             modulePath: "xxxxx/xxx/xxx",
	             operType: "修改密码",
	             oldValue: [{
	             	"name":"小明",
                    "age":"30",
                    "email":"22222@qq.com",
                    "iphone":"1383838438"
                }],
	             newValue:  [{
	             	"name":"小明",
                    "age":"",
                    "email":"22222@qq.com",
                    "iphone":"1565656456"
                }],
	             operTime: "2016-08-10",
	             staffName: "黄智"
	          }
]



exports.queryWhere = [
							{
				             id: 0,
				             projectId: "运营项目",
				             modulePath: "xxxxx/xxx/xxx",
				             operType: "修改项目",
				             oldValue: "240Mhz",
				             newValue: "8G",
				             operTime: "2016-08-09",
				             staffName: "黄智"
				           }, {
				             id: 1,
				             projectId: "充值系统",
				             modulePath: "xxxxx/xxx/xxx",
				             operType: "修改密码",
				             oldValue: "111111111111111111",
				             newValue: "222222222222222222",
				             operTime: "2016-08-10",
				             staffName: "唐辉"
				           }, {
				             id: 2,
				             projectId: "测试项目",
				             modulePath: "xxxxx/xxx/xxx",
				             operType: "修改密码",
				             oldValue: "******",
				             newValue: "******",
				             operTime: "2016-09-10",
				             staffName: "卢博文"
				           }
];
