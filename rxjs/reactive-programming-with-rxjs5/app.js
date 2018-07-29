window.onload = function() {
    console.log('onload');
    // var area = document.getElementById('area');
    document.body.addEventListener('click', e => {
        console.log(e.clientX, e.clientY);
    });
}
