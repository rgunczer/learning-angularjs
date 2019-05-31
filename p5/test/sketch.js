

const walls = [];
let ray;

function setup() {
  createCanvas(400, 400);
  walls.push(new Boundary(300, 100, 330, 300));
  walls.push(new Boundary(100, 90, 200, 100));
  walls.push(new Boundary(10, 10, 20, 100));
  ray = new Ray(100, 200);
}

function draw() {
  background(0);
  ray.show();

  ray.lookAt(mouseX, mouseY)

  walls.forEach((wall) => {
    wall.show();
    let pt = ray.cast(wall);
    if (pt) {
      fill(255);
      ellipse(pt.x, pt.y, 8, 8);
      line(ray.pos.x, ray.pos.y, pt.x, pt.y);
    }
  });

}