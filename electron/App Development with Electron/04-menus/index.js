const electron = require('electron');

const myMenu = electron.remote.Menu.buildFromTemplate([
    {
        type: 'normal',
        label: 'Foo',
        accelerator: 'CmdOrCtrl+Shift+A',
        click: () => {
            console.log('Do Foo');
        }
    }
]);

window.addEventListener('contextmenu', () => {
    myMenu.popup(electron.remote.getCurrentWindow());
});