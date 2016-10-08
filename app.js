(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.lunch = "";
  $scope.lunchMessage ="";
  $scope.sayMessage = function () {
  	if($scope.lunch != "")
  	{
	  	var msg = $scope.lunch.split(',');
	  	if(msg.length>3)
	    	$scope.lunchMessage = "Too much!";
	    else
	    	$scope.lunchMessage = "Enjoy!";
	}
	else
	{
		$scope.lunchMessage = "Please enter data first";
	}
//$scope.lunchMessage = $scope.lunch;
  };

 
}

})();
