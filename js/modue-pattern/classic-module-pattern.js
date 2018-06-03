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



function duplicateAndReverse(arr) {
    return arr.concat(arr.slice().reverse());
}

var de = duplicateAndReverse([1,2,3,4,5]);
console.log(de);


function duplicateEach(arr) {
    var result = [];
    arr.forEach(function(item) {
        result.push(item);
        result.push(item);
    });;
    return result;
}

var de = duplicateEach([1,2,3,4,5]);
console.log(de);


function duplicate(arr) {
    return arr.concat(arr);
}

var d = duplicate([1,2,3,4,5]);
console.log(d);

for(var i = 0; i < 100; ++i) {
    if (i % 3 === 0) {
        console.log("fizz[" + i + "]");
    }
    if (i % 5 === 0) {
        console.log("buzz[" + i + "]");
    }
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizbuzz[" + i + "]");
    }
}

var foo = [];
foo.push(1);
foo.push(2);

console.log(foo.length);

var foo = "Hello";
(function() {
  var bar = " World";
  console.log(foo + bar);
})();
console.log(foo + bar);