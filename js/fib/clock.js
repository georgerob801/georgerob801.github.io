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
      
      squares[0] = square1_1;
      squares[1] = square1_2;
      squares[2] = square2;
      squares[3] = square3;
      squares[4] = square5;
    }
    
    setSquareCols() {
      for (let i = 0; i < 5; i++) {
        squares[i].purpose = Enums.HM.NONE;
      }
      
      // set hour
      let hour = hour() % 12;
      
      if (hour >= 5) {
        squares[4].purpose = Enums.HM.HOURS;
        hour -= 5;
      }
      
      if (hour >= 3) {
        squares[3].purpose = Enums.HM.HOURS;
        hour -= 3;
      }
      
      if (hour >= 2) {
        squares[2].purpose = Enums.HM.HOURS;
        hour -= 2;
      }
      
      if (hour >= 1) {
        squares[0].purpose = Enums.HM.HOURS;
        hour -= 1;
      }
      
      if (hour >= 1) {
        squares[1].purpose = Enums.HM.HOURS;
        hour -= 1;
      }
      
      let minute = minute() / 5;
      
      if (minute >= 5) {
        if (squares[4].purpose == Enums.HM.HOURS) squares[4].purpose = Enums.HM.HOURS_MINUTES;
        else squares[4].purpose = Enums.HM.MINUTES;
        minute -= 5;
      }
      
      if (minute >= 3) {
        if (squares[3].purpose == Enums.HM.HOURS) squares[3].purpose = Enums.HM.HOURS_MINUTES;
        else squares[3].purpose = Enums.HM.MINUTES;
        minute -= 3;
      }
      
      if (minute >= 2) {
        if (squares[2].purpose == Enums.HM.HOURS) squares[2].purpose = Enums.HM.HOURS_MINUTES;
        else squares[2].purpose = Enums.HM.MINUTES;
        minute -= 2;
      }
      
      if (minute >= 1) {
        if (squares[0].purpose == Enums.HM.HOURS) squares[0].purpose = Enums.HM.HOURS_MINUTES;
        else squares[0].purpose = Enums.HM.MINUTES;
        minute -= 1;
      }
      
      if (minute >= 1) {
        if (squares[1].purpose == Enums.HM.HOURS) squares[1].purpose = Enums.HM.HOURS_MINUTES;
        else squares[1].purpose = Enums.HM.MINUTES;
        minute -= 1;
      }
    }
    
    render(x, y, scale) {
      let squareScale = scale * 30;
      stroke(STROKE_COL);
      strokeWeight(2);
      
      squares[0].render(x + squares[2].getSize(squareScale), y + squares[0].getSize(squareScale), squareScale);
      squares[1].render(x + squares[2].getSize(squareScale), y, squareScale);
      squares[2].render(x, y, squareScale);
      squares[3].render(x, y + squares[2].getSize(squareScale), squareScale);
      squares[4].render(x + squares[3].getSize(squareScale), y, squareScale);
    }
  }
  