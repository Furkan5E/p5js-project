let player = {
  x: 400,
  y: 300,
  speed: 5,
  health: 100
};

let score = 0;
let gameOver = false;

function setup() {
  createCanvas(900, 600);
}

function draw() {
  background("#b8b4b4");
  strokeWeight(3.5);
  fill(255, 255, 255);
  ellipse(player.x, player.y, 20 * 2);
  drawGun();
  movePlayer();
}

function drawGun() {
  translate(player.x, player.y);
  rotate(atan2(mouseY - player.y, mouseX - player.x));

  fill("#343434");
  strokeWeight(2);
  rect(21.7, - 5, 25.5, 10);
}

function movePlayer() {
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    player.x -= player.speed;
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    player.x += player.speed;
  }
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    player.y -= player.speed;
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    player.y += player.speed;
  }
}