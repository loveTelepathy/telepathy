angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  $scope.$on('$ionicView.enter', function (e) {
    //    if (loginStatus != true)
    //      $scope.modal.show();
  });


})

.controller('LoginCtrl', function ($scope, $state, $ionicModal, $timeout) {
  var loginStatus = false;
  var userInfo = {
    'users': {
      "kim": "1111",
      "sim": "2222",
      "jang": "3333",
      "new": "4444"
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
  $scope.toggleShowLabel = function () {
    $scope.showInputLabel = !($scope.showInputLabel);
  };
  // Form data for the login modal
  $scope.loginData = {};
  $scope.registerData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/registration.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeRegister = function () {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.register = function () {
    $scope.modal.show();
  };

  $scope.doRegister = function () {
    console.log('Doing Register', $scope.registerData.username);
    console.log('Doing Register', $scope.registerData.password);
    console.log('Doing Register', $scope.registerData.password_confirm);
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function () {
      $scope.closeRegister();
      //      if (userInfo.valid($scope.loginData) === true) {
      //        console.log('login success');
      //        loginStatus = true;
      //        $state.go('app.main');
      //      } else {
      //        console.log('login failed');
      //        alert('login failed...');
      //      }
    }, 1000);
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
        loginStatus = true;
        $state.go('app.main');
      } else {
        console.log('login failed');
        alert('login failed...');
      }
    }, 1000);
  };
})

.controller('TelepathyCtrl', function ($scope, $state, $ionicModal, $stateParams) {
  $scope.changeprofile = function(){

  };
  $scope.invite = function(){
    
  };

  $scope.ncount = 0;
  $scope.heartwdt = 50;
  $scope.marginleft = 25;
  $scope.imagemargintop=25;
  $scope.textmargintop = $scope.imagemargintop + 40;
  $scope.sendTelepathy = function(){
    $scope.ncount++;
    if($scope.ncount>24)
      $scope.ncount=0;

    $scope.heartwdt = 50+50*($scope.ncount)/24;
    $scope.marginleft = (100 - $scope.heartwdt)/2;

    //$scope.textmargintop = 40+20*($scope.ncount)/24;
    $scope.imagemargintop=25-25*($scope.ncount)/24;
  }
});
