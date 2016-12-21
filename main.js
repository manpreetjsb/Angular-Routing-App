var app = angular.module('myApp', ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/portfolio", {
        templateUrl : "portfolio.html"
    })
    .when("/about", {
        templateUrl : "aboutus.html"
    })
    .when("/contact", {
        templateUrl : "contact.html"
    });
});