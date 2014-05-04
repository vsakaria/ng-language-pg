'use strict';
/* Services */
languageSnap.service('enWord', function($http) {
    console.log('Started Services')

    this.getWords = function() {
        console.log('Started HTTP')
        return $http.get('data/words.json')
            .then(function(result) {
                console.log('Completed HTTP')

                return result.data
            });
    };



    this.getRandWord = function() {
        return "Hello I am a Service!"
    };
})