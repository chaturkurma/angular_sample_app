let myapp =angular.module("Myapp",[]);

let mycontroller = function($scope){
    $scope.message = "Hello World";
}

myapp.controller("Mycontroller",mycontroller);
let JSONController = function($scope){
    let student = {
        FirstName : "Chatur",
        LastName :"Kurma",
        Email : "S534687@nwmissouri.edu"
    }
    $scope.student=student;

}
myapp.controller("student",JSONController);