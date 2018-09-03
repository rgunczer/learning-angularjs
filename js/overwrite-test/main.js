console.log('here');

var orig = window.setTimeout;

window.setTimeout = function() {
    console.log('patched setTimeout...');
    return orig.apply(this, arguments);
}

setTimeout(() => {
    console.log('here in timer');
}, 1000);