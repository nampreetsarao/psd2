angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.aboutPSD2', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aboutPSD2.html',
        controller: 'aboutPSD2Ctrl'
      }
    }
  })

  .state('menu.exploreAPI', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/exploreAPI.html',
        controller: 'exploreAPICtrl'
      }
    }
  })

  .state('menu.aboutPSD22', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aboutPSD22.html',
        controller: 'aboutPSD22Ctrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});