
describe('firstCtrl', function(){

  var $scope, $controller;

  beforeEach(function (){

    module('TechTest');

    inject(function($rootScope, $controller) {

      $scope = $rootScope.$new();

      ctrl = $controller('firstCtrl', {
        $scope: $scope
      });
    });

  });

  it('should initialize a empty education\'s list', function() {
    expect($scope.educations).toEqual([]);
  });

  it('can add a item to education\'s list', function() {
    $scope.addEdu();
    expect($scope.educations.length).toEqual(1);
  });

  it('can remove a item from education\'s list', function() {
    $scope.addEdu();
    $scope.addEdu();
    $scope.removeEdu(1);
    expect($scope.educations.length).toEqual(1);
  });

  it('should initialize a empty experience\'s list', function() {
    expect($scope.experiences).toEqual([]);
  });

  it('can add a item to experience\'s list', function() {
    $scope.addExp();
    expect($scope.experiences.length).toEqual(1);
  });

  it('can remove a item from experience\'s list', function() {
    $scope.addExp();
    $scope.addExp();
    $scope.addExp();
    $scope.removeExp(1);
    expect($scope.experiences.length).toEqual(2);
  });

});
