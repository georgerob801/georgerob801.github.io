const BG_COL = "#efefef";
const HOUR_COL = "#ff0000";
const MINUTE_COL = "#00ff00";
const HOUR_MINUTE_COL = "#0000ff";
const UNSET_COL = "#ffffff";
const STROKE_COL = "#000000";

class ClockSquare {
    constructor(num) {
      this.fibonacciNum = num;
      
      this.purpose = Enums.HM.HOURS;
    }
    
    getSize(scale) {
      let calcScale;
      switch (this.fibonacciNum) {
        case Enums.FibonacciComponents.ONE:
          calcScale = 1 * scale;
          break;
        case Enums.FibonacciComponents.TWO:
          calcScale = 2 * scale;
          break;
        case Enums.FibonacciComponents.THREE:
          calcScale = 3 * scale;
          break;
        case Enums.FibonacciComponents.FIVE:
          calcScale = 5 * scale;
          break;
        default:
          throw new Error("aaaaaaaaa");
      }
      return calcScale;
    }
    
    render(x, y, scale) {
      let col;
      switch (this.purpose) {
        case Enums.HM.HOURS:
          col = HOUR_COL;
          break;
        case Enums.HM.MINUTES:
          col = MINUTE_COL;
          break;
        case Enums.HM.HOURS_MINUTES:
          col = HOUR_MINUTE_COL;
          break;
        default:
          col = UNSET_COL;
          break;
      }
      
      fill(col);
      
      let calcScale = this.getSize(scale);
      
      square(x, y, calcScale);
    }
  }
  