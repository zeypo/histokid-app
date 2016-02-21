'use strict';

(function() {
    angular
        .module('starter')
        .controller('WorldCtrl', WorldCtrl);

    WorldCtrl.$inject = ['$scope', '$rootScope', '$stateParams', 'worldsServices', 'trayServices'];

    function WorldCtrl($scope, $rootScope, $stateParams, worldsServices, tray) {
        $scope.service             = worldsServices;
        $scope.service.active      = _.find(worldsServices.worlds, {slug: $stateParams.worldName});
        $scope.openModal           = openModal;
        $rootScope.isSocketStarted = false;
        ionic.Platform.fullScreen(true);
        $scope.active = tray.active;

        $rootScope.$on('colorReceive', function(e, data) {
            //$scope.service.phrase = 'Un dynosaure s\'est posé et il est ' + data.color;
            //$scope.$apply();
            tray.update(data, $scope);
        });

        if (!$rootScope.isSocketStarted) {
            startSocket();
            $rootScope.isSocketStarted = true;
        }

        $rootScope.$watch('socketIp', function(e, socketIp) {
            startSocket();
        });

        // /!\ A supprimer
        $rootScope.$emit('colorReceive', {posX : 2, posY: 2, color: 'magenta'});

        /**
         * Oouvre la modal d'information
         */
        function openModal() {
            console.log($scope);
            tray.openModal($scope);
        }

        /**
         * @private
         * Démare les sockets pour le raspberry
         */
        function startSocket() {
            console.log('socket as started on ip : ' + $rootScope.socketIp);
            return;
            var socket  = io.connect('http://' + $rootScope.socketIp + ':3008');

            socket.on('pushcolor', function (data) {
                console.log(data);
                $rootScope.$emit('colorReceive', data);
            });
        };
    }
})();
