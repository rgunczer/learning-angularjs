// Reference:
//
// https://docs.wso2.com/display/IS530/Invoking+an+Endpoint+from+a+Different+Domain
//
// Instructions:
//
// -    copy this script into your wso2 directory
//
//      eg: "c:\Program Files\WSO2\Identity Server\5.8.0"
//
// -    run it like this:
//
//      "c:\Program Files\WSO2\Identity Server\5.8.0\node ./cors.js"
//

'use strict';

const corsXMLSetupSection = [
    '<filter>',
    '    <filter-name>CORS</filter-name>',
    '    <filter-class>com.thetransactioncompany.cors.CORSFilter</filter-class>',
    '    <init-param>',
    '        <param-name>cors.allowOrigin</param-name>',
    '        <param-value>*</param-value>',
    '    </init-param>',
    '</filter>',
    '',
    '<filter-mapping>',
    '    <filter-name>CORS</filter-name>',
    '    <url-pattern>*</url-pattern>',
    '</filter-mapping>'
];

const fs = require('fs');
const path = require('path');
var readline = require('readline');

function dumpCommandLineArgs() {
    for (let j = 0; j < process.argv.length; j++) {
        console.log(j + ' -> ' + (process.argv[j]));
    }
}
// dumpCommandLineArgs();

function getCurrentDir() {
    // for debug only -d flag
    if (process.argv.length === 3 && process.argv[2] == '-d') {
        return "c:\\Program Files\\WSO2\\Identity Server\\5.8.0";
    }
    return __dirname;
}

let currentDir = getCurrentDir();
const pathToConfigXML = path.join(currentDir, '\\repository\\deployment\\server\\webapps\\oauth2\\WEB-INF\\web.xml');

if (fs.existsSync(pathToConfigXML)) {
    console.log('Processing...');
    console.log(pathToConfigXML);
    console.log('File exists.');
    const destToBackup = pathToConfigXML + '.bak';
    console.log('Creating backup.');
    fs.copyFileSync(pathToConfigXML, destToBackup);
    readFileAndAddRule();
} else {
    console.log('ERROR');
    console.log(pathToConfigXML);
    console.log('File NOT found.');
}

function readFileAndAddRule() {

    function insertRuleSection() {
        buffer.push('');
        buffer.push('<!-- [CORS] RULE BEGIN -->');
        buffer.push('');
        corsXMLSetupSection.forEach(x => buffer.push(x));
        buffer.push('');
        buffer.push('<!-- [CORS] RULE END -->');
        buffer.push('');
    }

    const buffer = [];
    let ruleInserted = false;

    readline.createInterface({
        input: fs.createReadStream(pathToConfigXML),
        terminal: false
    }).on('line', function (line) {
        // console.log('Line: ' + line);

        if (!ruleInserted && line.trim() === '<servlet>') {
            insertRuleSection()
            ruleInserted = true;
        }

        buffer.push(line);

    }).on('close', function (line) {
        console.log('Writing file...');
        fs.writeFileSync(pathToConfigXML, buffer.join('\n'), { encoding: 'utf8', flag: 'w' });
        if (ruleInserted) {
            console.log('Done!');
        } else {
            console.log('Warning! Rule not inserted');
        }
    });
}
