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

/*	  ["filed",[
	  		"姓名",
	  		"年龄"，
	  		"邮箱",
	  		"手机"
	  ]],*/
	 ["filed", [
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
               ]],

]



// 统计信息展示
exports.statisticsData = [
	{resourceId:'1111',resourceName:'aaaa',resourceNumber:'',changeNumber:'',currentState:''}
];

exports.managerData = [
	{id:1,name:'aaaa',type:'bbbb'}
];