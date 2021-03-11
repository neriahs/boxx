// constants are simliar to variable but the value doesn't change, it remains constant

const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world



function setup() {
  createCanvas(800,400);
  // we created worlds, bodies and engines. using these, we don't have to use drawSprites
  engine = Engine.create()
  world = engine.world
  object = Bodies.rectangle(200,200, 50, 50)
  World.add(world, object)
  // static means will stay still
  ground = Bodies.rectangle(400,380, 800, 20, {isStatic: true})
  World.add(world, ground)
  // restitution is bounciness. when you put the restitution faster, it gets more bouncy
  ball = Bodies.circle(300, 50 ,20, {restitution: 1})
  World.add(world, ball)

}

function draw() {
  background(0);
  Engine.update(engine)
  // rect is for rectangles
  rectMode(CENTER)
  rect(object.position.x, object.position.y, 50, 50)
  rect(ground.position.x, ground.position.y, 800, 20)
  //ellispe is for circles
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20, 20)

}
