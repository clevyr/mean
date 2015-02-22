'use strict';

angular.module('mean.p2', ['mean-factory-interceptor', 'mean.system'])
.config(['$viewPathProvider',function($viewPathProvider){
    $viewPathProvider.override('system/views/index.html', 'p2/views/index.html');
}]);
