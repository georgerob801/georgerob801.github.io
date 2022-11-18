clock = new Clock();

function setup() {
  createCanvas(900, 600);
  
  noSmooth();
  
  clock.setupSquares();
}

function draw() {
  background(BG_COL);
  clock.setSquareCols();
  clock.render(10, 10, 3);
}
