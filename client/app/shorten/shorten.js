angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.displaySpinner = false;

  $scope.addLink = function () {
    $scope.displaySpinner = true;
    Links.postLinkDB($scope.link)
      .then(function (data) {
        $scope.displaySpinner = false;
        $scope.link.url = '';
        $scope.link.data = data;
      });
  };
});
