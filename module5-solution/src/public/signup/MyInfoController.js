(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['$scope','$window','SignUpService'];
function MyInfoController($scope,$window,SignUpService) {
	var vm = {
		"testMe":"What is test driven development?",
		"signedupalready":false,
		"notsignedinalready":false,
		"userinfo":{}
	}
	$scope.vm = vm;
	var registeredInfo = SignUpService.getSignUpInfo();
	console.log("registered info ", registeredInfo);
	if(registeredInfo!==null){
		vm.signedupalready = true;
		vm.userinfo = JSON.parse(registeredInfo);
	}else{
		vm.notsignedinalready=true;
	}

  

}


})();
