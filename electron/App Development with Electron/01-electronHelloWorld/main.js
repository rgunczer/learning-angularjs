const electron = require('electron');
const path = require('path');

let win = null;

electron.app.on('ready', () => {
    win = new electron.BrowserWindow({
        width: 800,
        height: 600,

        minWidth: 200,
        minHeight: 400,

        // maxWidth: 1000,
        // maxHeight: 800,

        resizable: true,
        movable: true,
        minimizable: true,
        maximizable: true,
        closable: true,
        focusable: true,
        fullscreenable: true,

        icon: path.join(__dirname, 'myapp.png'),
        title: 'My Electron application',
        fullscreen: false,
        frame: true, // min max butons
        backgroundColor: '#eeeeee',

        show: false

    });

    win.loadURL(`file://${path.join(__dirname, 'index.html')}`);

    win.on('ready-to-show', () => {
        win.show();
    });

    win.on('closed', () => {
        win = null;
    });

    win.on('maximize', () => {
        console.log('maximize...');
    });

    win.on('minimize', () => {
        console.log('minimize');
    });

    win.on('resize', () => {
        console.log('resize');
    });

    win.on('move', () => {
        console.log('move');
    });

    win.on('show', () => {
        console.log('show');
    });

    win.on('hide', () => {
        console.log('hide');
    });

    // win.show();
    // win.hide();
    // win.focus();
    // win.close();


});

electron.app.on('window-all-closed', electron.app.quit);
