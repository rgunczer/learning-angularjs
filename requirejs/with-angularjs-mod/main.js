require.config({
    paths: {
        'jquery': 'lib/jquery-2.2.3.min',
        'angular': 'lib/angular',
        'app': 'app',
        'ui-bootstrap': 'lib/ui-bootstrap-tpls-2.5.0'
    },
    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'ui-bootstrap': {
            deps: ['angular']
        },
        'app': {
            deps: ['angular', 'ui-bootstrap']
        },

    }
});

require(['app'], function() {
    angular.bootstrap(document, ['myApp']);
})