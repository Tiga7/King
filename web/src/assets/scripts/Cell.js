export class Cell {
  constructor(r, c) {
    this.r = r;
    this.c = c;
    //canvas画布的坐标和r c坐标存在一个变换
    this.x = c + 0.5;
    this.y = r + 0.5;
  }
}
