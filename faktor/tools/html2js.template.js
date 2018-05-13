// FIXME: works on windows only

let fs = require('fs');

const newLine = '\r\n';

function getPathToHtmlFiles(currentDir) {
    let path = currentDir.substring(0, currentDir.lastIndexOf('\\'));
    path += '\\src';
    return path;
}

function getPathToWriteJS(currentDir) {
    let path = currentDir.substring(0, currentDir.lastIndexOf('\\'));
    path += '\\src\\htmls.module.js';
    return path;
}

function writeHeader(ws) {
    var d = new Date();
    ws.write('"use strict"; // generated on: ' +  d.toISOString() + newLine);
    ws.write(newLine);
    ws.write('angular' + newLine);
    ws.write('\t.module("htmls", [])' + newLine);
    ws.write('\t.run(function($templateCache) {' + newLine);
    ws.write(newLine);
}

function writeFooter(ws) {
    ws.write('});');
}

function processDir(files) {
    let ws = fs.createWriteStream(getPathToWriteJS(__dirname));
    writeHeader(ws);

    files.forEach((file) => {
        if (file.lastIndexOf('.html') !== -1) {
            processFile(pathToHtmlFiles + '\\' + file, ws);
        }
    });

    writeFooter(ws);

    ws.end();
}

function getFileNameFromFullPath(fullPath) {
    const pos = fullPath.lastIndexOf('\\') + 1;
    let path = fullPath.substring(pos);
    return path;
}

function processFile(fullPathToFile, ws) {
    //console.log(fullPathToFile);
    let lines = fs.readFileSync(fullPathToFile, 'utf-8')
        .split(newLine);

    const fileName = 'src/' + getFileNameFromFullPath(fullPathToFile);

    ws.write('$templateCache.put("' + fileName + '",' + newLine);

    for(let i = 0; i < lines.length; ++i) {
        ws.write('"' + lines[i].replace(/"/g, '\\"') + '\\n"' + ' +' + newLine);
    }
    ws.write('"");\n');
    ws.write(newLine);
}

let pathToHtmlFiles = getPathToHtmlFiles(__dirname);

fs.readdir(pathToHtmlFiles, (error, files) => {
    processDir(files);
});