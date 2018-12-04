const { app, BrowserWindow } = require('electron');

app.on('ready', () => {

    const mainWindow = new BrowserWindow({width: 800, height: 600, show: false});
    mainWindow.loadFile('index.html');

    mainWindow.webContents.openDevTools(); // open dev tools

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

});