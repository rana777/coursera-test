(function(){
  angular.module("lunchApp",[])
  .controller("lunchController",lunchController);
  lunchController.$inject = ['$scope'];


  function lunchController($scope){
    $scope.lunchMenu = "";
    $scope.dietMessage="";
    $scope.checkIfTooMuch = function(){
      var lunch = $scope.lunchMenu;

      if(lunch.length===0){
        $scope.dietMessage = "Please enter data first";
      }else{
          var lunchArr = lunch.split(",");
          if(lunchArr.length <=3){
            $scope.dietMessage = "Enjoy!";
          }else if(lunchArr.length>=4){
            $scope.dietMessage = "Too much!";
          }
      }


    }

  }

})();
