
(function () {
'use strict';
	angular.module("adpApp")
.controller('uploadedFilesController',uploadedFilesController);
uploadedFilesController.$inject=['$scope','FileAvlDownloadService'];
function uploadedFilesController($scope,FileAvlDownloadService){
	//var uploadedFilesCtrl = this;
	alert("called");
	  $scope.placement = {
    options: [
      'top',
      'top-left',
      'top-right',
      'bottom',
      'bottom-left',
      'bottom-right',
      'left',
      'left-top',
      'left-bottom',
      'right',
      'right-top',
      'right-bottom'
    ],
    selected: 'top'
  };
  $scope.dynamicPopover = {
    content: 'Hello, World!',
    templateUrl: 'myPopoverTemplate.html',
    title: 'Title'
    
  };
  $scope.isAllSelected=false;
  $scope.sortType     = 'dateUploaded'; // set the default sort type
 	$scope.sortReverse  = false;  // set the default sort order
     
  
  ///FILES AVAIALABLE FOR DOWNLOAD
  var promise = FileAvlDownloadService.getFilesAvlForDownload ();
  
    promise.then(function (response) {
    	
    $scope.filesAvlDownload = response.data;
    
	 
    console.log($scope.filesAvlDownload);
  })
  .catch(function (error) {
    console.log("Something went terribly wrong on getFilesAvlForDownload.");
  });
  
  ///get uploaded files
  
  var uploadedFilePromise = FileAvlDownloadService.getAllUploadedFiles();
      uploadedFilePromise.then(function (response) {
    	
    $scope.filesUploaded = response.data;
    
	 
    console.log($scope.filesUploaded);
  })
  .catch(function (error) {
    console.log("Something went terribly wrong on getAllUploadedFiles.");
  });
  
  
  $scope.toggleAll = function(){
  	var toggleStatus = $scope.isAllSelected;
  	angular.forEach($scope.filesAvlDownload,function(fileAvlDownload){
  		fileAvlDownload.selected = toggleStatus;
  	});
  }
  
  $scope.downloadAllFiles = function(){
  	///
  	var downloadFiles = ["download/Affordability QT2 PT2 Reporting.csv",
  						 "download/Eligibility Q2 PTE Reporting.csv"			
  						];
  		angular.forEach(downloadFiles,function(downLoadFile){
  			console.log(downLoadFile);
  			var promise = FileAvlDownloadService.fileDownload(downLoadFile);
  			
  		});
  	
  }
  
  $scope.fileUpload = function(){
  	$("#fileToUpload").click();
  	
  }

  
  ////
	
}

})();
