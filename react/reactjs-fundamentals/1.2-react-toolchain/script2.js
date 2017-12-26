/*
var doStuff = require('./script1.js');
var React = require('react');

doStuff();

console.log(React);
*/

var doStuff = require('./script1.js').doStuff;
var otherStuff = require('./script1').otherStuff;

doStuff();
otherStuff();