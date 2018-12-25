const electron = require('electron');

document.querySelector('#settings')
    .addEventListener('click', () => {
        electron.ipcRenderer.send('open-settings');
    });
