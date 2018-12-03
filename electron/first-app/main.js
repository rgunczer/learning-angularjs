const electron = require('electron');

// const { dialog } = require('electron').remote;

const { app, BrowserWindow, dialog } = require('electron');

// const getFileFromUser = () => {
//     const files = dialog.showOpenDialog({
//         properties: ['openFile']
//     });
//     if (!files) {
//         return;
//     }
//     console.log(files);
// };

app.on('ready', () => {
    win = new BrowserWindow({width: 800, height: 800, show: false});
    win.loadFile('index.html');

    // open dev tools
    win.webContents.openDevTools();

    win.once('ready-to-show', () => {
        win.show();
        // getFileFromUser();
    });

    // document.querySelector('#selectBtn').addEventListener('click', function (event) {
    //     dialog.showOpenDialog({
    //         properties: ['openFile', 'multiSelections']
    //     }, function (files) {
    //         if (files !== undefined) {
    //             console.log(files);
    //         }
    //     });
    // });

});