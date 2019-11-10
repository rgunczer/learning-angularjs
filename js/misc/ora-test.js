const ora = require('ora');

const spinner = ora({
    text: 'Loading unicorns',
    // spinner: 'dots'
    frames: ['-', '+', '-']

}).start();

setTimeout(() => {
    spinner.color = 'blue';
    spinner.text = 'Loading rainbows';
}, 1000);
