let mapData;
let tileImages = {};
let tileSize;
let mapWidth, mapHeight;

function preload() {
  mapData = loadJSON("maps.json");

  // Load images
  tileImages[0] = loadImage("assets/Dungeon Bricks/BackgroundTile.png");
  tileImages[1] = loadImage("assets/Dungeon Bricks/Tile.png");
}

function setup() {
  // Get the map dimensions
  mapWidth = mapData.map[0].length;
  mapHeight = mapData.map.length;

  tileSize = floor(min(windowWidth / mapWidth, windowHeight / mapHeight));

  createCanvas(mapWidth * tileSize, mapHeight * tileSize);

  noSmooth();
  noLoop();
}

function draw() {
  background(0);

  // draw tiles
  for (let y = 0; y < mapData.map.length; y++) {
    for (let x = 0; x < mapData.map[y].length; x++) {
      const tileType = mapData.map[y][x];
      const img = tileImages[tileType];
      if (img) {
        image(img, x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
  }
}

function windowResized() {
  tileSize = floor(min(windowWidth / mapWidth, windowHeight / mapHeight));
  resizeCanvas(mapWidth * tileSize, mapHeight * tileSize);
  redraw();
}
