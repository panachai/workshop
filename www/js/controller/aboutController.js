angular.module('workshop')

.controller('aboutController', function ($scope, $state) {
  console.log('aboutController Start...');

  $scope.btnList = function () {
    console.log('btnList pressed.');
    $state.go('list');
  }
})
