var app=angular.module("myApp",['ui.router']);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
    $stateProvider.state('homepage',{
        url:'/home',
        templateUrl:'templates/home.html'
       // controller:'homeController'
    });
    
     $stateProvider.state('search',{
        url:'/search',
        templateUrl:'templates/search.html',
     controller:'searchController'
    });
    
     $stateProvider.state('signup',{
        url:'/signup',
        templateUrl:'templates/signup.html'
       // controller:'homeController'
    });
     $stateProvider.state('login',{
        url:'/login',
        templateUrl:'templates/login.html'
       // controller:'homeController'
    });
     $stateProvider.state('cotactus',{
        url:'/contactus',
        templateUrl:'templates/contact.html'
       // controller:'homeController'
    });
    
     $stateProvider.state('aboutus',{
        url:'/aboutus',
        templateUrl:'templates/aboutus.html'
       // controller:'homeController'
    });
    
}).run(function($state,$http,$rootScope){
    $state.go('homepage');
});

