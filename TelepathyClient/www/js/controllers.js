angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  $scope.$on('$ionicView.enter', function (e) {
    if (loginStatus != true)
      $scope.modal.show();
  });

  var loginStatus = false;
  var userInfo = {
    'users': {
      "kim": "1111",
      "lee": "2222",
      "park": "3333",
      "sim": "5555",
      "jang": "6666"
    },
    'valid': function (logindata) {
      for (var user in this.users) {
        if (logindata.username === user && logindata.password === this.users[user]) {
          return true;
        }
      }
      return false;
    }
  };

  $scope.showInputLabel = false;
  $scope.toggleShowLabel = function(){
    $scope.showInputLabel = !($scope.showInputLabel);
  };
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function () {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function () {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function () {
    console.log('Doing login', $scope.loginData.username);
    console.log('Doing login', $scope.loginData.password);
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function () {
      if (userInfo.valid($scope.loginData) === true) {
        console.log('login success');
        $scope.closeLogin();
        loginStatus = true;
        alert('login success...');
      } else {
        console.log('login failed');
        alert('login failed...');
      }
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function ($scope) {
  $scope.playlists = [
    {
      title: 'Reggae',
      id: 1
    },
    {
      title: 'Chill',
      id: 2
    },
    {
      title: 'Dubstep',
      id: 3
    },
    {
      title: 'Indie',
      id: 4
    },
    {
      title: 'Rap',
      id: 5
    },
    {
      title: 'Cowbell',
      id: 6
    }
  ];
})

.controller('PlaylistCtrl', function ($scope, $stateParams) {});