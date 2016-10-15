'use strict';
(function () {
	angular.module('jckfApp')
	.filter("projectManagementFilter", function () {
		return function(value){
			switch (value + "") {
				case "0":
					return "已结束";
				case "1":
					return "进行中";
				case "2":
					return "计划中";
			}
		};
	});
})();