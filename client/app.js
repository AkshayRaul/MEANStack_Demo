var MyApp = angular.module('MyApp',['ngRoute']);

MyApp.config(function($routeProvider){

    $routeProvider.when('/',{
        controller : 'BooksController',
        templateUrl : ' views/Books.html'
        
    })
        .when('/books',{
            controller : 'BooksController',
            templateUrl : 'views/Books.html'
        })
        .when('/books/details/:id',{
            controller : 'BooksController',
            templateUrl : 'views/viewBooks.html'
        })
        .when('/books/add',{
            controller : 'BooksController',
            templateUrl : ' views/addBooks.html'
        })
        .when('/books/edit/:id',{
            controller : 'BooksController',
            templateUrl : ' views/editBook.html'
        })
        .otherwise({
            redirectTo : '/'
        });
});