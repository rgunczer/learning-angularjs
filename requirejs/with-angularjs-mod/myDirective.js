define(function() {
    return function(CoPlayer) {
        return {
            restrict: 'E',
            replace: true,
            template: '<h1>MY DIRECTIVE >' + CoPlayer + '</h1>',
            scope: {}
        };
    };
});