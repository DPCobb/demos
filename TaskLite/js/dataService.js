angular.module('myApp').service('dataService', function(){
    var tasks;
    if (localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = angular.fromJson(localStorage.getItem('tasks'));
    }

    // Get list Items
    this.listGet =  function(){
        return tasks;
    };

    // Set new list Item
    this.listSet = function($scope){
        var list = {
            name: $scope.listname,
            due: $scope.datedue,
            desc: $scope.desc
        };
        tasks.push(list);
        var data = angular.toJson(tasks);
        localStorage.setItem('tasks',data);
        $scope.listname = '';
        $scope.datedue = '';
        $scope.desc = '';
    };

    this.update = function($scope,$routeParams){
        var key = $routeParams.key;
        return tasks[key];
    };

    this.listUpdate = function($scope, $routeParams){
        var index = $routeParams.key;
        tasks[index].name = $scope.updatename;
        tasks[index].due = $scope.updatedatedue;
        tasks[index].desc = $scope.updatedesc;
        var data = angular.toJson(tasks);
        localStorage.setItem('tasks',data);
    };
    this.listDel = function(key){
        console.log(key);
        tasks.splice(key, 1);
        var data = angular.toJson(tasks);
        localStorage.setItem('tasks',data);
    };
});
