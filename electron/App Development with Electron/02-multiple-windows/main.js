const electron = require('electron');
const path = require('path');

const applicationWindows = {};

electron.app.on('ready', () => {
    applicationWindows.main = new electron.BrowserWindow({
        width: 800,
        height: 600
    });

    applicationWindows.main.loadURL(`file://${path.join(__dirname, 'index.html')}`);

    applicationWindows.main.on('closed', () => {
        delete applicationWindows.main;
    });


    applicationWindows.settings = new electron.BrowserWindow({
        width: 400,
        height: 300,
        parent: applicationWindows.main,
        show: false
    });

    applicationWindows.settings.loadURL(`file://${path.join(__dirname, 'settings.html')}`);

    electron.ipcMain.on('open-settings', (event, argument) => {
        applicationWindows.settings.show();
    });

    applicationWindows.settings.on('closed', () => {
        delete applicationWindows.settings;
    });


    let safeChild = new electron.BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            javascript: false
        }
    });

    safeChild.loadURL('https://google.com');

});

electron.app.on('window-all-closed', electron.app.quit);
