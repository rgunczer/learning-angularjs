const electron = require('electron');
const path = require('path');

// Get BrowserWindow Instances from a Renderer Process
// get current window
// electron.remote.getCurrentWindow();

// get all windows
// electron.remote.BrowserWindow.getAllWindows();

// get focused window
// electron.remote.BrowserWindow.getFocusedWindow();

document.querySelector('#error-dialog-renderer-process')
    .addEventListener('click', () => {
        electron.remote.dialog.showErrorBox('Error title', 'Error description');
    });

document.querySelector('#error-dialog-main-process')
    .addEventListener('click', () => {
        electron.ipcRenderer.send('show-error-box');
    });

document.querySelector('#message-dialog')
    .addEventListener('click', () => {

        const currentWindow = electron.remote.getCurrentWindow();

        electron.remote.dialog.showMessageBox(currentWindow, {
            type: 'warning', // 'none', 'info', 'error', 'question'
            title: 'Are you sure?',
            message: 'This action is not reversible',
            detail: 'Make sure you understand...',
            icon: path.join(__dirname, 'danger.png'),
            buttons: ['OK', 'Cancel'],
            defaultId: 1,
            cancelId: 1,
            // checkboxLabel: 'Dont warn me again',
            // checkboxChecked: false
        }, (response/*, checkboxChecked*/) => {
            if (response == 0) { // index of the clicked button
                console.log('User Clicked OK');
            } else {
                console.log('User Clicked Cancel');
            }
            // if (checkboxChecked) {
            //     console.log('The checkbox was checked');
            // }
        });

    });


document.querySelector('#open-file-dialog')
    .addEventListener('click', () => {
        // alert('open file dialog');

        const currentWindow = electron.remote.getCurrentWindow();

        electron.remote.dialog.showOpenDialog(currentWindow, {
            title: 'Open a file',
            buttonLabel: 'Load file',
            filters: [
                { name: 'Pictures', extensions: ['png', 'jpg', 'gif'] },
                { name: 'All Files', extensions: ['*'] }
            ],
            // properties: ['openFile', 'openDirectory', 'multiSelections']
            properties: ['openFile', 'multiSelections']
        }, (selectedFiles) => {
            selectedFiles.forEach((selectedFile) => {
                console.log(selectedFile);
            });
        });
    });


document.querySelector('#save-file-dialog')
    .addEventListener('click', () => {

        const currentWindow = electron.remote.getCurrentWindow();

        electron.remote.dialog.showSaveDialog(currentWindow, {
            title: 'Save file',
            buttonLabel: 'OK',
            filters: [
                { name: 'Pictures', extensions: [ 'png', 'jpg', 'gif' ]}
            ]
        }, (filePath) => {
            console.log(filePath);
        });

    });