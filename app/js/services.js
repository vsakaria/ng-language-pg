'use strict';
/* Services */
languageSnap.service('Word', function($http) {

    var words = {}

    this.getWords = function() {
        return $http.get('data/words.json')
            .then(function(result) {
                words = result.data;
                return words;
            });
    };

    this.getRandWord = function() {
        return (words[Math.floor((Math.random() * 11))]);
    };
})