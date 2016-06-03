angular.module('app.controllers', [])

.controller('aboutPSD2Ctrl', function($scope) {

})

.controller('exploreAPICtrl', function($scope) {

})

.controller('aboutPSD22Ctrl', function($scope) {

})

.controller('loginCtrl', function($scope, $http, $resource,LoginService, $state,$ionicPopup,StorageService, $localStorage ) {

  $scope.click =  function(){
    $scope.dataFromService=[];
    //        $scope.dataFromService="Hello world";
    //    var postUsers = $http.get('http://jsonplaceholder.typicode.com/users/');
    //    postUsers.then(function(result) {
    //        $scope.dataFromService = result.data;
    //  });
    //Working code
    //$scope.dataFromService=  LoginService.query();

    LoginService.authenticateUser({email: this.userId, pwd: this.password}, {},
    function(message) {
      // function to retrive the response
      $scope.dataFromService=message;
      if($scope.dataFromService.status=='SUCCESS'){
        $scope.loginSuccessful="Login was successful";
        $state.go('menu.aboutPSD22');

        //Persisting the user data in local storage
        //Assigning $localstorage to $session.storage
        $scope.storage = $localStorage;
        StorageService.add($scope.dataFromService) ;


    }else if ($scope.dataFromService.status=='ERROR') {
      // $scope.loginSuccessful="Error in call";
      // var alertPopup = $ionicPopup.alert({
      //        title: 'Authentication Failed!',
      //        template:$scope.dataFromService.errMsg
      //      });

    }
    } );


  }

  //$scope.oneUser = UserService.get({user: 1});
})

.controller('signupCtrl', function($scope) {

})
