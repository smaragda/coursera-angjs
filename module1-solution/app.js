(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

MsgController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.foodList = "5 eggs,3 toasts";

  $scope.checkFood = function () {
      if (!$scope.foodList.length) {
          $scope.checkResult = 'Please enter data first';
          return;
      }
      var exploded = $scope.foodList.split(",");
      if (exploded.length <=3) {
          $scope.checkResult = 'Enjoy!';
      } else if (exploded.length > 3) {
        $scope.checkResult = 'Too much!';
      }
  };
}

})();
