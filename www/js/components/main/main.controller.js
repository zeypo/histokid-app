'use strict';

(function() {
    angular
        .module('starter')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$rootScope'];

    function MainCtrl($scope, $rootScope) {
        $rootScope.socketIp = $rootScope.socketIp ? $rootScope.socketIp : '172.16.0.74';
    }
})();
