angular.module('workshop')

  .controller('listController', function ($scope, $state) {
    console.log('listController Start...');
    $scope.myName = 'NoraphatC';

    $scope.btnAbout = function () {
      console.log('btnAbout pressed.');
      $state.go('about');
    }
  })
