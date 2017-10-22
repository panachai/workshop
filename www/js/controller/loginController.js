angular.module('workshop')

  .controller('loginController', function ($scope, $state) {
    console.log('loginController Start...');
    $scope.myName = 'Panachai';

    $scope.btnAbout = function () {
      console.log('btnLogin pressed.');
      $state.go('list');
    }
  })
