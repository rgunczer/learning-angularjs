const { dialog } = require('electron').remote;

const button = document.querySelector("#selectBtn");

// button.addEventListener('click', () => {
//     alert('test');
// });

button.addEventListener('click', function (event) {
    dialog.showOpenDialog({
        properties: ['openFile', 'multiSelections']
    }, function (files) {
        if (files !== undefined) {
            console.log(files);
        }
    });
});
