exports.config = {
    directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tab.js'],
    capabilities: {
        //browserName: 'internet explorer',
        //platform: 'ANY',
        //version: '11'
        browserName: 'chrome'
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    resultJsonOutputFile: 'result.json',
};