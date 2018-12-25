const electron = require('electron');
const path = require('path');

let win = null;

electron.app.on('ready', () => {
    win = new electron.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL(`file://${path.join(__dirname, 'index.html')}`);

    win.webContents.openDevTools(); // open dev tools

    win.on('closed', () => {
        win = null;
    });

    electron.ipcMain.on('show-error-box', () => {
        electron.dialog.showErrorBox('Error box from main process', 'error desc');
    });

});

electron.app.on('window-all-closed', electron.app.quit);