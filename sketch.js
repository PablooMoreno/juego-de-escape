var brick;
var bricks; 
var ball;
var score = 0;
var vidas = 5;
var paddle;

function setup() {
  createCanvas(windowWidth, windowHeight);
bricks = new Group();

  createBrickRow(65, "red");
  createBrickRow(65+29, "orange");
  createBrickRow(65+29+29, "green");
  createBrickRow(65+29+29+29, "yellow");


}


function draw() {
  background("black");
  console.log("windowWidth"+windowWidth);
  drawSprites();
}

function createBrickRow(y, color) {
  var numero = Math.round((windowWidth-65)/50);
  console.log("numero"+numero);
  for(c=0; c<numero-2; c++)
  {
    brick = createSprite(65+54*c,y,50, 25);
    brick.shapeColor = color;
    bricks.add(brick);
  }
}