jckf.directive("page", function () {
	"use strict";
	return {
		restrict: 'E',
		templateUrl: "views/common/page.html",
		replace: true,
		scope: {
			limit: "@", // 展示条目数
			currentPage: "@", // 当前页
			params: "=",
			total: "=",	
			data: "=",
			pageUrl: "="
		},
		controller: function ($scope, $attrs, $parse, $http) {
			var self = this;
			var totalPages;
			function calculateTotalPages() {
				return  Math.ceil($scope.total / $scope.params.selectCount);
			}

			function getPages(totalPage, currentPage) {
				console.log(totalPage)
				console.log(currentPage)
							var pages = [];
							totalPage = parseInt(totalPage);
							currentPage = parseInt(currentPage);
							if (totalPage <= 7){
								for(var a = 0; a < totalPage; a++){
									pages.push(a);
								}
							}else if (totalPage > 7 && currentPage < 5){
								pages.push(1);
								pages.push(2);
								pages.push(3);
								pages.push(4);
								pages.push(5);
								pages.push("...");
								pages.push(totalPage);
							}else if(totalPage > 7 && currentPage <= (totalPage-4)){
								pages.push(1);
								pages.push("...");
								pages.push(currentPage-1);
								pages.push(currentPage);
								pages.push(currentPage+1);
								pages.push("...");
								pages.push(totalPage);
							}else if(totalPage > 7 && currentPage > (totalPage-4)){
								pages.push(1);
								pages.push("...");
								pages.push(totalPage-4);
								pages.push(totalPage-3);
								pages.push(totalPage-2);
								pages.push(totalPage-1);
								pages.push(totalPage);
							}
							console.log(pages)
							return pages;
						}


			//与下拉框绑定
			$scope.pageSizeList = [10, 20, 50];
			$scope.params.currentPage = $scope.currentPage;
			$scope.params.selectCount = $scope.limit;
			
			// init
			function init() {
				totalPages = calculateTotalPages();
				$scope.pages = getPages(totalPages, $scope.params.currentPage);
				$scope.firstNum = $scope.params.selectCount * ($scope.params.currentPage-1) + 1;
				$scope.secondNum = $scope.params.selectCount * $scope.params.currentPage;
			}
			init();
			
			
			


			$scope.changeLimit = function () {
				$http.post($scope.pageUrl, $scope.params).success(function (res) {
					$scope.data = res.data;
					$scope.total = res.total;
					init();
				});
			};

			$scope.setCurrentPage = function (page) {
				$scope.params.currentPage = page;
				$http.post($scope.pageUrl, $scope.params).success(function (res) {
					// $scope.data = res.data;
					// $scope.total = res.total;
					init();
					// $scope.pages = [22,33,44,55,'...']
				});
			};
		},
		// link: function (scope, element, attrs, ctrl) {
			
		// 	ctrl.getPages = function (totalPage, currentPage) {
		// 		var pages = [];
		// 		totalPage = parseInt(totalPage);
		// 		currentPage = parseInt(currentPage);
		// 		if (totalPage <= 7){
		// 			for(var a = 0; a < totalPage; a++){
		// 				pages.push(a);
		// 			}
		// 		}else if (totalPage > 7 && currentPage < 5){
		// 			pages.push(1);
		// 			pages.push(2);
		// 			pages.push(3);
		// 			pages.push(4);
		// 			pages.push(5);
		// 			pages.push("...");
		// 			pages.push(totalPage);
		// 		}else if(totalPage > 7 && currentPage <= (totalPage-4)){
		// 			pages.push(1);
		// 			pages.push("...");
		// 			pages.push(currentPage-1);
		// 			pages.push(currentPage);
		// 			pages.push(currentPage+1);
		// 			pages.push("...");
		// 			pages.push(totalPage);
		// 		}else if(totalPage > 7 && currentPage > (totalPage-4)){
		// 			pages.push(1);
		// 			pages.push("...");
		// 			pages.push(totalPage-4);
		// 			pages.push(totalPage-3);
		// 			pages.push(totalPage-2);
		// 			pages.push(totalPage-1);
		// 			pages.push(totalPage);
		// 		}
		// 		return pages;
		// 	};
		// }
	};
});