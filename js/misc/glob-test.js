const glob = require('glob');

const pattern0 = '{,!(node_modules)/**/}*.js';
const pattern1 = '{,!(node_modules)**/}*.js';
const pattern2 = '{,!(node_modules)**/}{*.js,!(*-lock)*.json}';
// const pattern = '{,!(node_modules)**/}{,!(*-lock)}+(.js|.json)';
const pattern = '{,!(node_modules)**/}*.{js,json}';

glob(pattern, (err, matches) => {
    console.log('matches', matches);
});

