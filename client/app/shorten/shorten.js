angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.display = false;

  $scope.addLink = function () {
    $scope.display = true;
    Links.postLinkDB($scope.link)
      .then(function (data) {
        $scope.display = false;
        $scope.link.url = '';
        $scope.link.data = data;
      });
  };
});
