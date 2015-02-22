'use strict';

// $viewPathProvider, to allow overriding system default views
angular.module('mean.system').provider('$viewPath', function() {
  function ViewPathProvider() {
    var overrides = {};

    this.path = function(path) {
      return function() {
        return overrides[path] || path;
      };
    };

    this.override = function(defaultPath, newPath) {
      if (overrides[defaultPath]) {
        throw new Error('View already has an override: ' + defaultPath);
      }
      overrides[defaultPath] = newPath;
      return this;
    };

    this.$get = function() {
      return this;
    };
  }

  return new ViewPathProvider();
});

// $meanStateProvider, provider to wire up $viewPathProvider to $stateProvider
angular.module('mean.system').provider('$meanState', ['$stateProvider', '$viewPathProvider', function($stateProvider, $viewPathProvider) {
  function MeanStateProvider() {
    this.state = function(stateName, data) {
      if (data.templateUrl) {
        data.templateUrl = $viewPathProvider.path(data.templateUrl);
      }
      $stateProvider.state(stateName, data);
      return this; 
    };

    this.$get = function() {
      return this;
    };
  }

  return new MeanStateProvider();
}]);

//Setting up route
angular.module('mean.system').config(['$meanStateProvider', '$urlRouterProvider',
  function($meanStateProvider, $urlRouterProvider) {
    // For unmatched routes:
    //$urlRouterProvider.otherwise('/');
    
    // // Dynamically add states/routes for themes
    // // 1) Layouts
    // for(var index in window.themeLayouts){
    //     $meanStateProvider.state(window.themeLayouts[index].stateName,{
    //         abstract: true,
    //         templateUrl: window.themeLayouts[index].templateUrl
    //     });
    // }
    // // 2) Other - Static
    // for(var other in window.themeOther){
    //     $meanStateProvider.state(window.themeOther[other].stateName, {
    //         url: window.themeOther[other].url,
    //         templateUrl: window.themeOther[other].templateUrl
    //     });
    //
    //     //attach layouts to other static
    //     for(var layout in window.themeLayouts){
    //         // console.log(window.themeLayouts[layout].stateName);
    //         // console.log('/' + window.themeLayouts[layout].stateName + window.themeOther[other].url);
    //         $meanStateProvider.state(window.themeLayouts[layout].stateName + '.' + window.themeOther[other].stateName, {
    //             url: '/' + window.themeLayouts[layout].stateName + window.themeOther[other].url,
    //             templateUrl: window.themeOther[other].templateUrl
    //         });
    //     }
    // }

    // states for my app
    // $meanStateProvider
    //   .state('home', {
    //     url: '/',
    //     templateUrl: 'system/views/index.html'
    //   });    
  }
]).config(['$locationProvider',
  function($locationProvider) {
    //$locationProvider.hashPrefix('!');
    //$locationProvider.html5Mode(true);
    $locationProvider.html5Mode(true).hashPrefix('!');
  }
]).run(function($rootScope){
    $rootScope.$on('$stateNotFound',function(event,unfoundState,fromState,fromParams){
        console.log('State not found');
    });
    $rootScope.$on('$stateChangeError',function(event,toState,toParams,fromState,fromParams, error){
        console.log('State Change Error');
    });
});
