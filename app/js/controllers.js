'use strict';

/* Controllers */



var languageSnapControllers = angular.module('languageSnapControllers', []);

languageSnapControllers.controller('EnglishPharse', function($scope, enWord) {
    console.log('Started Controller');
    enWord.getWords().then(function(words) {
        $scope.words = words;
    });
    console.log('End Controller');
});