var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){

    $routeProvider.
        when('/tasks',{
          templateUrl: 'views/tasks.html',
          controller: 'taskList'
        }).
        when('/update/:key',{
          templateUrl: 'views/update.html',
          controller: 'updateList'
        }).
        when('/newtask', {
            templateUrl:'views/new.html',
            controller: 'taskList'
        })
        .otherwise({
          redirectTo: '/tasks'
        });
}]);

myApp.controller('taskList', ['$scope', '$http', 'dataService', '$routeParams', function($scope, $http, dataService, $routeParams){
    $scope.taskList = dataService.listGet();
    $scope.newTask = function(){
        dataService.listSet($scope);
        $('#success').show();
        $scope.newItem.$setUntouched();
    };
    $scope.remove = function(key){
        dataService.listDel(key);
    };
}]);

myApp.controller('updateList', ['$scope', '$http', 'dataService', '$routeParams', function($scope, $http, dataService, $routeParams){
    var updateData = dataService.update($scope, $routeParams);
    $scope.updatename = updateData.name;
    $scope.updatedatedue = updateData.due;
    $scope.updatedesc = updateData.desc;
    $scope.updateTask = function(){
        dataService.listUpdate($scope, $routeParams);
        document.getElementById('successUp').style.display = "block";
    }
}])
