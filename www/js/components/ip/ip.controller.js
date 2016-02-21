'use strict';

(function() {
    angular
        .module('starter')
        .controller('IpCtrl', IpCtrl);

    IpCtrl.$inject = ['$scope', '$rootScope', '$stateParams', 'worldsServices', 'trayServices'];

    function IpCtrl($scope, $rootScope, $stateParams, worldsServices, tray) {

        $scope.updateIp = function(ip) {
            $rootScope.socketIp = ip;
        }
    }
})();
