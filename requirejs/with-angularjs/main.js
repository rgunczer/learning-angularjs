require.config({
    paths: {
        'jquery': '../lib/jquery-3.2.1',
        'angular': '../lib/angular',
        'app': 'app',
        'coreModule': 'core.module'
    },
    shim: {
        'angular': {
            deps: [ 'jquery' ]
        },
        'app': {
            deps: [ 'angular', 'coreModule' ]
        },
        'coreModule': {
            deps: [ 'angular' ]
        }
    }
});

require(['app'], function() {
    angular.bootstrap(document, ['app']);
});