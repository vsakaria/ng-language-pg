'use strict';

/* Controllers */



var languageSnapControllers = angular.module('languageSnapControllers', []);

languageSnapControllers.controller('EnglishPharse', function($scope, Word) {

    Word.getWords().then(function(words) {
        $scope.words = words;
    });

    $scope.getRandomPharse = function() {
        return ($scope.words[Math.floor((Math.random() * 11))]).en;
    };
});