angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.urlObj = {};

  $scope.createLink = function () {
    Links.postLinkDB($scope.urlObj)
      .then(function (url) {
      });
  };
});
