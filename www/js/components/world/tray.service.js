'use strict';

(function() {

    angular
        .module('starter')
        .factory('trayServices', trayServices);

    trayServices.$inject = ['$timeout', 'ngDialog'];

    function trayServices($timeout, ngDialog) {
        var tray = {
            dynosaure: [
                {
                    name: 'diplodocus',
                    color: 'magenta',
                    infos: {
                        type: 'herbivore',
                        height: '4',
                        about: 'Il vie en amerique du nord'
                    }
                },
                {
                    name: 'tyrannosaure',
                    color: 'blue',
                    infos: {
                        type: 'carnivor',
                        height: '7',
                        about: 'Il vie en amerique du nord'
                    }
                }
            ],
            active: null,
            update: update,
            openModal: openModal
        };

        return tray;

        /**
         * Update le plateau en fonction
         * de l'événement reçu
         *
         * @param {Object} event
         */
        function update(event, $scope) {
            tray.active = _.find(tray.dynosaure, {color: event.color});
            $scope.active = tray.active;
            tray.openModal($scope);

            // Ferme la popup après 10s de lecture
            $timeout(function() {
                ngDialog.close();
            }, 3000);
        }

        /**
         * Ouvre la modal d'information
         *
         */
        function openModal($scope) {
            ngDialog.open({
                template: 'information-modal',
                className: 'ngdialog-theme-default',
                showClose: false,
                scope: $scope
            });
        }
    }

})();
