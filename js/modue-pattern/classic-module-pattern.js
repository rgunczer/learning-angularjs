// classic module pattern
var foo = (function() {
    var o = { bar: 'bar' };

    return {
        bar: function() {
            console.log(o.bar);
        }
    };

})();


foo.bar(); // "bar"

// modified module pattern Kyle Simpson
var oo = (function() {
    var publicAPI = {
        bar: function() {
            publicAPI.baz();
        },
        baz: function() {
            console.log("baz");
        }
    };
    return publicAPI;
})();

oo.bar();