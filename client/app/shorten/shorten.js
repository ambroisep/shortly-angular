angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function () {
    Links.postLinkDB($scope.link)
      .then(function (url) {
        $scope.link.url = '';
      });
  };
});
