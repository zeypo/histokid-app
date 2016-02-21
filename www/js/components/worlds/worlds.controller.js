'use strict';

(function() {
    angular
        .module('starter')
        .controller('WorldsCtrl', WorldsCtrl);

    WorldsCtrl.$inject = ['$scope', 'worldsServices'];

    function WorldsCtrl($scope, worldsServices) {
        $scope.service = worldsServices;
    }
})();
