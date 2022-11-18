class Clock {
    constructor() {
        this.squares = [];
    }
    
    setupSquares() {
      let square1_1 = new ClockSquare(Enums.FibonacciComponents.ONE);
      let square1_2 = new ClockSquare(Enums.FibonacciComponents.ONE);
      let square2 = new ClockSquare(Enums.FibonacciComponents.TWO);
      let square3 = new ClockSquare(Enums.FibonacciComponents.THREE);
      let square5 = new ClockSquare(Enums.FibonacciComponents.FIVE);
      
      square2.purpose = Enums.HM.MINUTES;
      
      this.squares.push(square1_1);
      this.squares.push(square1_2);
      this.squares.push(square2);
      this.squares.push(square3);
      this.squares.push(square5);
    }
    
    setSquareCols() {
      for (let i = 0; i < 5; i++) {
        this.squares[i].purpose = Enums.HM.NONE;
      }
      
      // set hour
      let h = hour() % 12;
      
      if (h >= 5) {
        this.squares[4].purpose = Enums.HM.HOURS;
        h -= 5;
      }
      
      if (h >= 3) {
        this.squares[3].purpose = Enums.HM.HOURS;
        h -= 3;
      }
      
      if (h >= 2) {
        this.squares[2].purpose = Enums.HM.HOURS;
        h -= 2;
      }
      
      if (h >= 1) {
        this.squares[0].purpose = Enums.HM.HOURS;
        h -= 1;
      }
      
      if (h >= 1) {
        this.squares[1].purpose = Enums.HM.HOURS;
        h -= 1;
      }
      
      let m = minute() / 5;
      
      if (m >= 5) {
        if (this.squares[4].purpose == Enums.HM.HOURS) this.squares[4].purpose = Enums.HM.HOURS_MINUTES;
        else this.squares[4].purpose = Enums.HM.MINUTES;
        m -= 5;
      }
      
      if (m >= 3) {
        if (this.squares[3].purpose == Enums.HM.HOURS) this.squares[3].purpose = Enums.HM.HOURS_MINUTES;
        else this.squares[3].purpose = Enums.HM.MINUTES;
        m -= 3;
      }
      
      if (m >= 2) {
        if (this.squares[2].purpose == Enums.HM.HOURS) this.squares[2].purpose = Enums.HM.HOURS_MINUTES;
        else this.squares[2].purpose = Enums.HM.MINUTES;
        m -= 2;
      }
      
      if (m >= 1) {
        if (this.squares[0].purpose == Enums.HM.HOURS) this.squares[0].purpose = Enums.HM.HOURS_MINUTES;
        else this.squares[0].purpose = Enums.HM.MINUTES;
        m -= 1;
      }
      
      if (m >= 1) {
        if (this.squares[1].purpose == Enums.HM.HOURS) this.squares[1].purpose = Enums.HM.HOURS_MINUTES;
        else this.squares[1].purpose = Enums.HM.MINUTES;
        m -= 1;
      }
    }
    
    render(x, y, scale) {
      let squareScale = scale * 30;
      stroke(STROKE_COL);
      strokeWeight(2);
      
      this.squares[0].render(x + this.squares[2].getSize(squareScale), y + this.squares[0].getSize(squareScale), squareScale);
      this.squares[1].render(x + this.squares[2].getSize(squareScale), y, squareScale);
      this.squares[2].render(x, y, squareScale);
      this.squares[3].render(x, y + this.squares[2].getSize(squareScale), squareScale);
      this.squares[4].render(x + this.squares[3].getSize(squareScale), y, squareScale);
    }
  }
  