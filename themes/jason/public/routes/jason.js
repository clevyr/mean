'use strict';

//Setting up route
angular.module('mean.jason').config(['$meanStateProvider', '$urlRouterProvider',
  function($meanStateProvider, $urlRouterProvider) {
    // states for my app
    // states for my app
    $meanStateProvider
      .state('main.home', {
        url: '/',
        templateUrl: 'jason/views/index.html'
      })
      .state('main.jason', {
        url: '/jason/',
        templateUrl: 'jason/views/jason.html'
      });
}
]);
