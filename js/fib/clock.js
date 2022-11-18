class Clock {
    Clock() {
        this.squares = new ClockSquare[5];
    }
    
    setupSquares() {
      let square1_1 = new ClockSquare(Enums.FibonacciComponents.ONE);
      let square1_2 = new ClockSquare(Enums.FibonacciComponents.ONE);
      let square2 = new ClockSquare(Enums.FibonacciComponents.TWO);
      let square3 = new ClockSquare(Enums.FibonacciComponents.THREE);
      let square5 = new ClockSquare(Enums.FibonacciComponents.FIVE);
      
      square2.purpose = Enums.HM.MINUTES;
      
      this.squares[0] = square1_1;
      this.squares[1] = square1_2;
      this.squares[2] = square2;
      this.squares[3] = square3;
      this.squares[4] = square5;
    }
    
    setSquareCols() {
      for (let i = 0; i < 5; i++) {
        this.squares[i].purpose = Enums.HM.NONE;
      }
      
      // set hour
      let hour = hour() % 12;
      
      if (hour >= 5) {
        this.squares[4].purpose = Enums.HM.HOURS;
        hour -= 5;
      }
      
      if (hour >= 3) {
        this.squares[3].purpose = Enums.HM.HOURS;
        hour -= 3;
      }
      
      if (hour >= 2) {
        this.squares[2].purpose = Enums.HM.HOURS;
        hour -= 2;
      }
      
      if (hour >= 1) {
        this.squares[0].purpose = Enums.HM.HOURS;
        hour -= 1;
      }
      
      if (hour >= 1) {
        this.squares[1].purpose = Enums.HM.HOURS;
        hour -= 1;
      }
      
      let minute = minute() / 5;
      
      if (minute >= 5) {
        if (squares[4].purpose == Enums.HM.HOURS) this.squares[4].purpose = Enums.HM.HOURS_MINUTES;
        else this.squares[4].purpose = Enums.HM.MINUTES;
        minute -= 5;
      }
      
      if (minute >= 3) {
        if (squares[3].purpose == Enums.HM.HOURS) this.squares[3].purpose = Enums.HM.HOURS_MINUTES;
        else this.squares[3].purpose = Enums.HM.MINUTES;
        minute -= 3;
      }
      
      if (minute >= 2) {
        if (squares[2].purpose == Enums.HM.HOURS) this.squares[2].purpose = Enums.HM.HOURS_MINUTES;
        else this.squares[2].purpose = Enums.HM.MINUTES;
        minute -= 2;
      }
      
      if (minute >= 1) {
        if (squares[0].purpose == Enums.HM.HOURS) this.squares[0].purpose = Enums.HM.HOURS_MINUTES;
        else this.squares[0].purpose = Enums.HM.MINUTES;
        minute -= 1;
      }
      
      if (minute >= 1) {
        if (squares[1].purpose == Enums.HM.HOURS) this.squares[1].purpose = Enums.HM.HOURS_MINUTES;
        else this.squares[1].purpose = Enums.HM.MINUTES;
        minute -= 1;
      }
    }
    
    render(x, y, scale) {
      let squarescale = scale * 30;
      stroke(STROKE_COL);
      strokeWeight(2);
      
      this.squares[0].render(x + this.squares[2].getSize(squareScale), y + this.squares[0].getSize(squareScale), squarescale);
      this.squares[1].render(x + this.squares[2].getSize(squareScale), y, squarescale);
      this.squares[2].render(x, y, squarescale);
      this.squares[3].render(x, y + this.squares[2].getSize(squareScale), squarescale);
      this.squares[4].render(x + this.squares[3].getSize(squareScale), y, squarescale);
    }
  }
  