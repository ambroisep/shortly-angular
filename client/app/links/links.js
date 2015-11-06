angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.getLinks = function () {
    Links.getDBLinks()
      .then(function (linksArray) {
        $scope.data.links = linksArray;
      });
  };

  $scope.getLinks();
});
