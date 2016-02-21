'use strict';

(function() {

    angular
        .module('starter')
        .factory('worldsServices', worldsServices);

    function worldsServices() {
        var worlds = {
            active: null,
            worlds: [
                {
                    name: 'Le reigne des dinosaures',
                    slug: 'dinosaures',
                    avalaible: true
                },
                {
                    name: 'Les premiers hommes',
                    slug: 'premiers-hommes',
                    avalaible: false
                },
                {
                    name: 'Les gaulois et l\'empire de césar',
                    slug: 'gaulois',
                    avalaible: false
                }
            ],
        };

        return worlds;
    }

})();
