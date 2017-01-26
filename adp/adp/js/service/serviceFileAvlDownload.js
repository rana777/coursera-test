(function () {
'use strict';

angular.module('adpApp')
.service('FileAvlDownloadService', FileAvlDownloadService)
.constant('ApiBasePath', "data");

FileAvlDownloadService.$inject = ['$http', 'ApiBasePath','$window'];
function FileAvlDownloadService($http, ApiBasePath,$window) {
  var service = this;
  // Simulates call to server
  // Returns a promise, NOT items array directly
  	 service.getFilesAvlForDownload = function () {
		var response = $http({
		      method: "GET",
		      url: (ApiBasePath + "/filesAvailableDownload.json")
		    });
		return response;
  };

	service.fileDownload=function(filePath){
		// var response = $http({
		      // method: "GET",
		      // url: (filePath)
		    // });
		// return response;
		$http({method: 'GET', url: filePath}).
  success(function(data, status, headers, config) {
     var anchor = angular.element('<a/>');
     anchor.attr({
         href: 'data:attachment/csv;charset=utf-8,' + encodeURI(data),
         target: '_blank',
         download: filePath
     })[0].click();

  }).
  error(function(data, status, headers, config) {
    // handle error
  });
		
		
	}


	service.getAllUploadedFiles = function(){
		var response = $http({
		      method: "GET",
		      url: (ApiBasePath + "/filesTransfer.json")
		    });
		return response;
		
	};
}

})();
