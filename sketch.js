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
  ellipse(player.x, player.y, 40);
  movePlayer();
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