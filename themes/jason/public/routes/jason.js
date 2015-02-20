'use strict';

//Setting up route
angular.module('mean.jason').config(['$meanStateProvider', '$urlRouterProvider',
  function($meanStateProvider, $urlRouterProvider) {
    // states for my app
    // states for my app
    $meanStateProvider
      .state('jason', {
        url: '/jason',
        templateUrl: 'jason/views/index.html'
      });
}
]).config(['$locationProvider',
  function($locationProvider) {
    //$locationProvider.hashPrefix('!');
    //$locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true).hashPrefix('!');
  }
]);
