var foo = "Hello";
(function() {
  var bar = " World";
  console.log(foo + bar); // Hello World
})();
console.log(foo + bar); // Hello + (exception: bar is not defined)