const { dialog } = require('electron').remote;

const button = document.querySelector("#selectBtn");

button.addEventListener('click', (event) => {
    dialog.showOpenDialog({
        properties: ['openFile', 'multiSelections']
    }, (files) => {
        if (files !== undefined) {
            console.log(files);
        }
    });
});
