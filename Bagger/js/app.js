var myApp = angular.module('myApp',[]);
myApp.controller('listControl', ['$scope', '$http', function($scope, $http){
    //Check if item is in localStorage, if not create array
    if (localStorage.getItem("gList") === null) {
            console.log('Local Storage item does not exist.');
            var gListLocal=[{
                    item : "Milk",
                    department : "Dairy"
            },{
                    item : "Eggs",
                    department : "Dairy"
            },{
                    item : "Bread",
                    department : "Grocery"
            }];
        }
        // If localStorage does exist set to array
    else{
        var gListLocal = angular.fromJson(localStorage.getItem('gList'));
    }

    var departmentOptions = ["Bakery", "Dairy", "Deli", "Frozen", "Grocery", "Health and Beauty", "Meat", "Non Foods", "Produce", "Seafood", "Other"];
    $scope.item = gListLocal;
    $scope.sortBy = 'department';
    $scope.deptOpt = departmentOptions;
    $scope.selectedOption = $scope.deptOpt[0];
    // Auto select first department in select menu
    var select = function(){
        $scope.deptOpt[0].selected = 'true';
    };
    select();
    // Add New item to list
    $scope.addItem = function(){
        // If form is valid...
        if($scope.formSub.$valid){
            // Hide Alert Box and set duplication check array, and new list item array
            var alertBox = document.getElementById('alertBox');
            alertBox.style.display = "none";
            var checklist = [];
            var newListItem = {
                    item : $scope.itemNew,
                    department : $scope.deptNew
            };
            //Push current list items into duplication check list in all lowercase letters
            for(i = 0; i < $scope.item.length; i++){
                var listItem = $scope.item[i].item;
                listItem = listItem.toLowerCase();
                checklist.push(listItem);
            };
            //Set new item to lowercase and check for index in duplication array
            var checkStr = $scope.itemNew.toLowerCase();
            //If item exists display alert box
            if(checklist.indexOf(checkStr) >= 0){
                alertBox.style.display = "block";
            }
            //If item does not exist push to local storage
            else{
                $scope.item.push(newListItem);
                var data = angular.toJson($scope.item);
                localStorage.setItem('gList',data);
                $scope.itemNew = ' ';
                $scope.deptNew = ' ';
            }
        }
        // If form is not valid alert invalid entry
        else{
            alert('Invalid entry.');
        }
    };
    //Remove Item
    $scope.removeItem = function(item){
        var index = $scope.item.indexOf(item);
        $scope.item.splice(index,1);
        var data = angular.toJson($scope.item);
        localStorage.setItem('gList',data);
    };
}]);
