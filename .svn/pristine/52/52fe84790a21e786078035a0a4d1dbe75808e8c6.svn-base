'use strict';
(function () {
	angular.module('jckfApp')
	.filter("projectManagementStatus", function () {
		return function(value){
			switch (value + "") {
				case "0":
					return "计划中";
				case "1":
					return "进行中";
				case "2":
					return "已结束";
			}
		};
	});
})();