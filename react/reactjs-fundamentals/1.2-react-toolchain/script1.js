function doStuff() {
    console.log('Hello');
}

function otherStuff() {
    console.log('another function');
}

//module.exports = doStuff; // commonjs

exports.doStuff = doStuff;
exports.otherStuff = otherStuff;