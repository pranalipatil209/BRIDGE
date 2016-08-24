
/**
 *  Main Controller 
 * */

angular.module('bridgeApp')

    /** Injecting all JSON to the Controller
     * 
     * */
    .controller('bridgeCtrl', ['$scope', '$http', 'myCache', function ($scope, $http, myCache) {

        var cache = myCache.get('myData');
       
        if (cache) {

            //Fellow Service
            $scope.fellow = cache.fellow;

            //Fellow Service1
            $scope.fellow1 = cache.fellow1;

            //Team Service
            $scope.team = cache.team;

            //Parteners Service
            $scope.Parteners = cache.parterners;


        }

else{
        $http.get('json/Details.json').success(function (data) {


            //Fellow Service
            $scope.fellow = data.fellow;

            //Fellow Service1
            $scope.fellow1 = data.fellow1;

            //Team Service
            $scope.team = data.team;

            //Parteners Service
            $scope.Parteners = data.parterners;

            myCache.put('myData', data);
            
    
        });
}
    }]);







