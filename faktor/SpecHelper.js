beforeEach(function () {
    jasmine.addMatchers({
        toBeDefinedFunction: function (util) {
            return {
                compare: function (actual) {
                    return {
                        pass: (void 0 !== actual) && util.equals(actual, jasmine.any(Function)),
                        message: 'expected "' + JSON.stringify(actual, true) + '" to be defined and to a be a function'
                    };
                }
            };
        }
    });
});