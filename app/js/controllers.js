'use strict';

/* Controllers */

var languageSnapControllers = angular.module('languageSnapControllers', []);

languageSnapControllers.controller('EnglishPharse', function($scope, $http) {
    $http.get('data/words.json').success(function(data) {
        $scope.words = data;
    });
});