'use strict';

angular.module('myApp', [])
    .config(function(myProviderProvider, myConstant, myOtherProvider) { // config block, only provider and constant available
        //myOtherProvider.options.name = 'Luigi';
        switch(myConstant.gameName) {
            case 'LastOfUs':
                myProviderProvider.setup(['Joel', 'Ellie']);
                break;

            case 'HZD':
                myProviderProvider.setup(['Aloy', 'Rost']);
                break;
        }
        console.log('configure block...');
    })
    .run(function($log) { // run block everything is available
        $log.info('run block...');
    })
    .controller('myController', ['$log', '$scope', 'myService', 'myFactory', 'myProvider', 'myConstant', 'myValue', 'myOther',
    function ($log, $scope, myService, myFactory, myProvider, myConstant, myValue, myOther) {
        $scope.text = "If you can read this then AngularJS is working fine";
        $log.info('myController');

        $log.info('myConstant is: ' + angular.toJson(myConstant, true));
        $log.info('myValue is: ' + angular.toJson(myValue, true));
        $log.info('myProvider is: ' + angular.toJson(myProvider, true));
        $log.info('myService is: ' + myService.getName());
        $log.info('myFactory is: ' + myFactory.getName());

        $log.info('myOther is: ' + myOther.name);
    }])
    .service('myService', ['$log', function($log) {
        $log.info('myService...');
        this.getName = function() {
            return 'getName from service';
        }
    }])
    .factory('myFactory', ['$log', function($log) {
        $log.info('myFactory...');
        return {
            getName: function() {
                return 'getName from factory';
            }
        };
    }])
    // providers (provider, constant, value)
    .provider('myProvider', function() {
        console.log('myProvider...');
        var name = ['Default', 'Name'];
        this.setup = function(value) {
            name = value;
        }
        this.$get = function() {
            return name;
        }
    })
    //.constant('myConstant', 42)
    .constant('myConstant', { gameName: 'HZD' })
    //.value('myValue', 'some value')
    .value('myValue', { number: 43, name: 'Ellie' })

    .provider('myOther', function() {
        var myOtherProvider = {
            options: {
                name: 'mario'
            },
            $get: function() {
                return {
                    name: myOtherProvider.options.name
                };
            }
        };
        return myOtherProvider;
    })
