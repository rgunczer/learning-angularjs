
let wall;
let ray;

function setup() {
  createCanvas(400, 400);
  wall = new Boundary(300, 100, 330, 300);
  ray = new Ray(100, 200);
}

function draw() {
  background(0);
  wall.show();
  ray.show();

  ray.lookAt(mouseX, mouseY)

  let pt = ray.cast(wall);
  if (pt) {
    fill(255);
    ellipse(pt.x, pt.y, 8, 8);

    // stroke(255);
    // push();
    // translate(ray.pos.x, ray.pos.y);
    line(ray.pos.x, ray.pos.y, pt.x, pt.y);
    // pop();

  }

  // console.log(pt);
}