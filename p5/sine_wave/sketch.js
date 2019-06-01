const w = 800;
const h = 200;
let ypos = 0;
let xx = 0;

let divider = 10;
let amplitude = 30;

function setup() {
    createCanvas(w, h);
}

function draw() {

    divider = document.getElementById('sineDivider').value;
    document.getElementById('sineDividerValue').innerHTML = divider;

    amplitude = document.getElementById('sineAmplitude').value;
    document.getElementById('sineAmplitudeValue').innerHTML = amplitude;

    let x = 0;
    let y = h / 2;
    background(204);
    fill(10);
    stroke(0);
    while(x < w) {
        point(x, y);
        let sinx = sin(x/divider);
        point(x, y + sinx * amplitude)

        if (xx === x) {
            ypos = y + sinx * amplitude;
        }
        x++;
    }

    ellipse(100, ypos, 10, 10)
    ++xx;
    if (xx > w) {
        xx = 0;
    }
}