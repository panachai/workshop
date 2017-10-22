angular.module('workshop')

  .controller('loginController', function ($scope, $state) {
    console.log('loginController Start...');

    $scope.btnLogin = function () {
      console.log('btnLogin pressed.');
      $state.go('list');
    }
  })
