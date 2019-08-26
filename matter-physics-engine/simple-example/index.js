console.log('here');

var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;



// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

engine.world.gravity.y *= 1.2;

// create two boxes and a ground
var circle = Bodies.circle(100, 100, 20, { render: { fillStyle: '#868e96'} })


var boxA = Bodies.rectangle(400, 100, 60, 80);
var boxA1 = Bodies.rectangle(400, 200, 20, 20);
var boxB = Bodies.rectangle(450, 50, 180, 30);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [boxA, boxA1, boxB, circle, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
