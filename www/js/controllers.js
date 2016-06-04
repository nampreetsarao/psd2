angular.module('app.controllers', [])

.controller('aboutPSD2Ctrl', function($scope) {


})

.controller('exploreAPICtrl', function($scope) {

})

.controller('aboutPSD22Ctrl', function($scope, InformationService,$state,$ionicPopup) {

    $scope.general=[];
    InformationService.general({value : 'general' }, {},
    function(message) {
          $scope.general=message;
      // function to retrive the response
      if($scope.general.status=='SUCCESS'){
        $scope.general=message;
    }
    });

    InformationService.general({value : 'ibm' }, {},
    function(message) {
          $scope.ibmInformation=message;
    });

    InformationService.general({value : 'bookmarks' }, {},
    function(message) {
          $scope.bookmarks=message.response.additionalInfo;
    });

})

.controller('profileCtrl', function($scope,StorageService) {
  $scope.userProfile = StorageService.getAll();
})


.controller('loginCtrl', function($scope, $http, $resource,LoginService, $state,$ionicPopup,StorageService, $localStorage ) {

  $scope.click =  function(){
    //clearing the userProfile at the time of user login
    $scope.dataFromService=[];
    LoginService.authenticateUser({email: this.userId, pwd: this.password}, {},

    function(message) {
      $scope.dataFromService=message;
      // function to retrive the response
      if($scope.dataFromService.status=='SUCCESS'){
        StorageService.remove($scope.dataFromService);
        //Persisting the user data in local storage
        StorageService.add($scope.dataFromService) ;
        $scope.loginSuccessful="Login was successful";
        $state.go('menu.aboutPSD22');
    }
    //else if ($scope.dataFromService.status=='ERROR') {
      // $scope.loginSuccessful="Error in call";
      // var alertPopup = $ionicPopup.alert({
      //        title: 'Authentication Failed!',
      //        template:$scope.dataFromService.errMsg
      //      });
      //    }
    });
  }
})

.controller('signupCtrl', function($scope, SignUpService,$state,$ionicPopup) {
  $scope.signUpUser =  function(){
    //clearing the userProfile at the time of user login
    $scope.signupResponse=[];
    SignUpService.signup(
      {  }, {email: this.userId,
         password: this.password,
         role: 'USER',
         firstName:  this.firstName,
         lastName: this.lastName,
         phone: this.phoneNumber

        },

    function(message) {
      $scope.signupResponse=message;
      // function to retrive the response
      if($scope.signupResponse.status=='SUCCESS'){
         var alertPopup = $ionicPopup.alert({
                title: 'Signup',
                template:'User added successfully. Please login now.'
              });
          $state.go('login');

     }
   },function(message) {
     $scope.signupResponse=message;
    }


  );
  }

})
