angular.module('workshop')

  .controller('listController', function ($scope, $state) {
    console.log('listController Start...');
    $scope.myName = 'Panachai';

    $scope.btnAbout = function () {
      console.log('btnAbout pressed.');
      $state.go('about');
    }
  })
