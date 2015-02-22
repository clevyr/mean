'use strict';

angular.module('mean.jason', ['mean-factory-interceptor', 'mean.system'])
.config(['$viewPathProvider',function($viewPathProvider){
    $viewPathProvider.override('system/views/index.html', 'jason/views/index.html');
}]);
