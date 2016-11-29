var MyApp = angular.module('MyApp');

MyApp.controller('BooksController',['$scope', '$http', '$location', '$routeParams',function ($scope, $http, $location, $routeParams) {

    console.log("Bookscontroller loaded");
    $scope.getBooks = function () {
        $http.get('/api/books').success(function (response) {
            $scope.Books = response;
        })
    };

    $scope.addBook = function () {
        $http.post('/api/books',$scope.book).success(function (response) {
            window.location.href="#/";
        })
    };
    $scope.getBook = function () {
        var id = $routeParams.id;
        console.log("Inside getBook()"+id);
        $http.get('/api/books/'+id).success(function (response) {
            $scope.book = response;
            console.log($scope.book.image_url)
        })
    };
    $scope.removeBook = function () {
        var id = $routeParams.id;
        console.log("Inside removeBook()"+id);
        $http.delete('/api/books/'+id).success(function (response) {
            window.loaction.href="#/"
        })
    };
    $scope.updateBook = function () {
        var id = $routeParams.id;
        console.log("Inside updateBook()"+id);
        $http.put('/api/books/'+id,$scope.book).success(function (response) {
            $scope.book=response;

            window.location.href="#/books/details/"+id;
        })
    };
}]);