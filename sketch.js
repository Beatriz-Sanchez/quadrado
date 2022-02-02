var quadrado;

function setup() {
  createCanvas(400,400);

  quadrado = createSprite(200,200,30,30);
  quadrado.shapeColor = "red";
}

function draw() {
  background(30);
  drawSprites();

  if (keyIsDown(DOWN_ARROW)) {
    quadrado.y += 3;
  }
  if (keyIsDown(UP_ARROW)) {
    quadrado.y -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    quadrado.x += 3;
  }
  if (keyIsDown(LEFT_ARROW)) {
    quadrado.x -= 3;
  }
}




