'use strict';

//Setting up route
angular.module('mean.milo').config(['$meanStateProvider', '$urlRouterProvider',
  function($meanStateProvider, $urlRouterProvider) {
    // states for my app
      
    //Add Layouts
      $meanStateProvider.state('main',{
          abstract: true,
          templateUrl: 'milo/views/layouts/main.html'
      });
      $meanStateProvider.state('admin',{
          abstract: true,
          templateUrl: 'milo/views/layouts/admin.html'
      });
      $meanStateProvider.state('admin.auth.login',{
          url: '/auth/login/',
          templateUrl: 'milo/views/logink.html'
      });
}
]);
