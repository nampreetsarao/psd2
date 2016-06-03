'use strict';

angular.module('app.services', ['ngResource'])

.factory('LoginService', function($resource){

  var data = $resource('http://169.44.9.228:8080/mcabuddy/user/authenticate' , {}, {
      authenticateUser:{
          method:'POST',
          headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
      });
      return data;
  })

// factory for ngstorage
.factory ('StorageService', function ($localStorage) {
  $localStorage = $localStorage.$default({
  things: []
});
var _getAll = function () {
  return $localStorage.things;
};
var _add = function (thing) {
  $localStorage.things.push(thing);
}
var _remove = function (thing) {
  $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
}
return {
    getAll: _getAll,
    add: _add,
    remove: _remove
  };
});

//return $resource('http://169.44.9.228:8080/mcabuddy/user/authenticate');
