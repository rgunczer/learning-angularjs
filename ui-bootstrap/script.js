angular.module('myApp', ['ui.bootstrap'])
    .controller('myController',
        ['$scope', '$log', '$uibModal',
            function ($scope, $log, $uibModal) {
                $scope.text = 'If you can read this then AngularJS is working fine';
                $log.info('hello from myController');

                $scope.showDialog = function() {
                    $log.info('show dialog...');
                    var modalInstance = $uibModal.open({
                        templateUrl: 'dialog.html',
                        controller: function($scope, $uibModalInstance) {
                            $scope.closeDialog = function() {
                                $uibModalInstance.close('closed');
                            };
                        }
                    });

                    modalInstance.result.then(function(result) {
                        $log.info('dialog end ' + result);
                    });
                };
            }]);