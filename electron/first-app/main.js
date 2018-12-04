const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    win = new BrowserWindow({width: 800, height: 800, show: false});
    win.loadFile('index.html');

    win.webContents.openDevTools(); // open dev tools

    win.once('ready-to-show', () => {
        win.show();
    });

});