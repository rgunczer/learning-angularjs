const ora = require('ora');

let index = 0;
const tasks = [
    'Loading unicorns',
    'Loading rainbows',
    'Making unicorns',
    'Compiling colors',
    'Adjusting tones',
    'Last tweaks'
];

const spinner = ora({
    color: 'yellow',
    text: tasks[0],
    spinner: 'arrow3'
}).start();

const intervalId  = setInterval(() => {
    spinner.text = tasks[index++];

    if (index > tasks.length) {
        clearInterval(intervalId);
        spinner.stop();
        console.log('done');
    }

}, 2000);

