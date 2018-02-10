require.config({
    paths: {
        'angular': 'lib/angular',
        'app': 'app/app'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'app': {
            deps: ['angular']
        }
    }
});

require(['app'], function() {
    angular.bootstrap(document, ['myApp']);
});