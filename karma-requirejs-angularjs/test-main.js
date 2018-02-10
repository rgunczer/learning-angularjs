var allTestFiles = [];
var TEST_REGEXP = /(.spec)\.js$/i;
for (var file in window.__karma__.files) {
    if (TEST_REGEXP.test(file)) {
        allTestFiles.push(file);
    }
}

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start,

    paths: {
        angular: '/base/lib/angular',
        angularMocks: '/base/lib/angular-mocks',
        testApp: 'test/unit/test-app'
    },
    shim: {
        angular: { exports: 'angular' },
        angularMocks: { deps: ['angular'] },
        testApp: { deps: ['angularMocks'] }
    }
});
