angular.module('bridgeApp')

.factory('myCache', function($cacheFactory) {
 return $cacheFactory('myData');
});