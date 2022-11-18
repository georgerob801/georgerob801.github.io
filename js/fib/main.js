let clock = new Clock();

let clockScale = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  noSmooth();
  
  clock.setupSquares();
  windowResized();
}

function draw() {
  background(BG_COL);
  clock.setSquareCols();
  clock.render((windowWidth / 2) - ((8 * 30 * clockScale) / 2), (windowHeight / 2) - ((5 * 30 * clockScale) / 2), clockScale);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    
    while (((8 * 30 * clockScale) + 10) > windowWidth || ((5 * 30 * clockScale) + 10) > windowHeight) {
        clockScale -= 0.2;
    }

    while (((8 * 30 * clockScale) + 200) < windowWidth && ((5 * 30 * clockScale) + 200) < windowHeight) {
        clockScale += 0.1;
    }
}