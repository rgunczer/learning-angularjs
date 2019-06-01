const w = 800;
const h = 200;

let divider = 10;

function setup() {
    createCanvas(w, h);
}

function draw() {

    divider = document.getElementById('sineDivider').value;
    document.getElementById('sineDividerValue').innerHTML = divider;

    let x = 0;
    let y = h / 2;
    background(204);
    fill(10);
    stroke(0);
    while(x < w) {
        point(x, y);
        //  // sin() returns number between -1 and 1
        let sinx = sin(x/divider);
        // console.log(sinx);
        point(x, y + sinx * 30)
        x++;
    }

}