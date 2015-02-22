'use strict';

//Setting up route
angular.module('mean.p2').config(['$meanStateProvider', '$urlRouterProvider',
  function($meanStateProvider, $urlRouterProvider) {
    // states for my app
    // states for my app
    $meanStateProvider
      .state('main.home', {
        url: '/',
        templateUrl: 'p2/views/index.html'
      })
      .state('main.jason', {
        url: '/jason/',
        templateUrl: 'ps/views/jason.html'
      });
}
]);
