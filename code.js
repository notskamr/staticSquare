const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var circle_options ={
    density: 0.3,
    friction: 1,
    restitution: 1
    }

    var otherCircle_options ={
restitution: 1, 
density: 1


    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
circle = Bodies.circle(200,200,20, circle_options)
World.add(world, circle)

otherCircle = Bodies.circle(100, 200, 30, otherCircle_options)
World.add(world, otherCircle)
    console.log(ground);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    ellipse(circle.position.x, circle.position.y, 20)
    ellipse(otherCircle.position.x, otherCircle.position.y, 30)
    rect(ground.position.x,ground.position.y,400,20);
}