const electron = require('electron');
const path = require('path');

let win = null;

electron.app.on('ready', () => {
    win = new electron.BrowserWindow({
        width: 800,
        height: 600
    });

    win.loadURL(`file://${path.join(__dirname, 'index.html')}`)

    win.webContents.openDevTools(); // open dev tools

    let tray = new electron.Tray(path.join(__dirname, 'angular.png'));
    tray.setToolTip('My application');

    tray.on('click', () => {
        win.isVisible() ? win.hide() : win.show();
    });

    win.setProgressBar(0.1);

    const myMenu = electron.Menu.buildFromTemplate([
        {
            label: 'My first menu',
            type: 'submenu',
            submenu: [
                { type: 'normal', label: 'Foo Bar' },
                { type: 'separator' },
                { type: 'checkbox', label: 'Baz', checked: true }
            ]
        }
    ]);

    electron.Menu.setApplicationMenu(myMenu);
});

electron.app.on('window-all-closed', electron.app.quit);
