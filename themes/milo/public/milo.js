'use strict';

angular.module('mean.milo', ['mean-factory-interceptor'])
.config(['$viewPathProvider',function($viewPathProvider){
    $viewPathProvider.override('users/views/login.html', 'milo/views/login.html');
}]);
