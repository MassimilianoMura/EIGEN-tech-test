'use strict';

MassiTechTest.controller('firstCtrl', function($scope) {

  $scope.educations = [];

  $scope.addEdu = function () {
    $scope.educations.push({
    });
  };

  $scope.removeEdu = function (index) {
    $scope.educations.splice(index,1);
  };


  $scope.experiences = [];

  $scope.addExp = function () {
    $scope.experiences.push({
    });
  };

  $scope.removeExp = function (index) {
    $scope.experiences.splice(index,1);
  };

});
