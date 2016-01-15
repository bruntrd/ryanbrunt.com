var myApp = angular.module('myApp', ['ngRoute', 'appControllers','ui.bootstrap']);

var appControllers= angular.module('appControllers', []);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "/assets/views/routes/home.html",
            controller: "HomeController"
        }).
        when('/resume', {
            templateUrl: "/assets/views/routes/resume.html",
            controller: "ResumeController"
        }).
        when('/about', {
            templateUrl: "/assets/views/routes/about.html",
            controller: "AboutController"
        }).
        when('/projects', {
            templateUrl: "/assets/views/routes/projects.html",
            controller: "ProjectsController"
        }).
        when('/contact', {
            templateUrl: "/assets/views/routes/contact.html",
            controller: "ContactController"
        }).
        otherwise({
            redirectTo: "/home"
        });

}]);