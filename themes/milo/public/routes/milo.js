'use strict';

//Setting up route
angular.module('mean.milo').config(['$meanStateProvider', '$urlRouterProvider',
  function($meanStateProvider, $urlRouterProvider) {
    // states for my app
}
]).config(['$locationProvider',
  function($locationProvider) {
    //$locationProvider.hashPrefix('!');
    //$locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true).hashPrefix('!');
  }
]);
