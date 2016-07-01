var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){

    $routeProvider.
        when('/home',{
          templateUrl: 'views/home.html',
          controller: 'homeControl'
        }).
        when('/menu', {
            templateUrl: 'views/menu.html',
            controller: 'menuControl'
        }).
        when('/menu/:key',{
          templateUrl: 'views/menuitem.html',
          controller: 'menuControl'
        }).
        when('/contact', {
            templateUrl:'views/contact.html',
            controller: 'contactControl'
        }).
        when('/about', {
            templateUrl: 'views/about.html',
            controller: 'homeControl'
        })
        .otherwise({
          redirectTo: '/home'
        });
}]);

myApp.controller('homeControl', ['$scope', '$http', 'dataService', '$routeParams', function($scope, $http, dataService, $routeParams){
    
}]);

myApp.controller('menuControl', ['$scope', '$http', 'dataService', '$routeParams', function($scope, $http, dataService, $routeParams){

}]);
myApp.controller('contactControl', ['$scope', '$http', 'dataService', '$routeParams', function($scope, $http, dataService, $routeParams){

}])
