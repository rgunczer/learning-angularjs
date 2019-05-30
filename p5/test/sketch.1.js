const cw = 720;
const ch = 400;
let rectColor;
let backColor;
const w = 60;
const h = 40;
let x_step = 10;
let y_step = 10;
let x = getRndBetween(0, cw-w);
let y = getRndBetween(0, ch-h);

function getRndBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
  backColor = color(255, 255, 255);
  rectColor = color(255, 0, 0);
  createCanvas(cw, ch);
}

function draw() {
  background(255);

  x+=x_step;
  y+=y_step;

  if ((x + w) > cw) {
    x_step *= -1;
  }
  if (x < 0) {
    x_step *= -1;
  }

  if ((y + h) > ch) {
    y_step *= -1;
  }
  if (y < 0) {
    y_step *= -1;
  }

  fill(rectColor);

  rect(x, y, w, h);
}