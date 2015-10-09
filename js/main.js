var app = angular.module('WebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "modules/home.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "modules/pricing.html", controller: "PageCtrl"})
    .when("/dashboard", {templateUrl: "modules/dashboard/dashboard.html", controller: "MyCtrl"})
    .when("/datatable", {templateUrl: "modules/datatable.html", controller: "PageCtrl"})
    
    .when("/login", {templateUrl: "modules/login/login.html", controller: "LoginController"})
	 .when("/register", {templateUrl: "modules/register/register.html", controller: "RegisterController"})
     
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

 

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});
