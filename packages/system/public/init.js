'use strict';

angular.element(document).ready(function() {
  //Fixing facebook bug with redirect
  if (window.location.hash === '#_=_') window.location.hash = '#!';

  //Then init the app
  angular.bootstrap(document, ['mean']);

});

// Dynamically add angular modules declared by packages
var packageModules = [];
for (var index in window.modules) {
  angular.module(window.modules[index].module, window.modules[index].angularDependencies || []);
  packageModules.push(window.modules[index].module);
}

// Dynamically add themes (parent and the discovered client associated theme)
var themeModules = [];
for (var index in window.themes) {
  angular.module(window.themes[index].module, window.themes[index].angularDependencies || []);
  themeModules.push(window.themes[index].module);
}

// Default modules
var modules = ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.router'];
modules = modules.concat(packageModules);
modules = modules.concat(themeModules);

// Combined modules
angular.module('mean', modules);
