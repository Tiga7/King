import { GameObject } from "./GameObject";
import { Wall } from "./Wall";
export class GameMap extends GameObject {
  //ctx 画布  parent 画布的父元素,用来修改画布的长宽
  constructor(ctx, parent) {
    super();

    this.ctx = ctx;
    this.parent = parent;
    this.L = 0;

    this.cols = 14; //列数
    this.rows = 13; //行数

    this.walls = [];
    this.walls_count = 30;
  }

  start() {
    this.create_walls();
  }

  create_walls() {
    const g = [];
    for (let r = 0; r < this.rows; r++) {
      g[r] = [];
      for (let c = 0; c < this.cols; c++) {
        g[r][c] = false;
      }
    }

    //给四周加上障碍物
    for (let r = 0; r < this.rows; r++) {
      g[r][0] = g[r][this.cols - 1] = true;
    }
    for (let c = 0; c < this.cols; c++) {
      g[0][c] = g[this.rows - 1][c] = true;
    }

    for (let i = 0; i < this.walls_count; i++) {
      for (let j = 0; j < 1000; j++) {
        let r = parseInt(Math.random() * this.rows);
        let c = parseInt(Math.random() * this.cols);
        if (
          g[r][c] ||
          r == 1 ||
          r == this.rows - 2 ||
          c == 1 ||
          c == this.cols - 2
        ) {
          continue;
        }
        g[r][c] = true;
        break;
      }
    }
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (g[r][c]) {
          this.walls.push(new Wall(r, c, this));
        }
      }
    }
  }
  update_size() {
    this.L = parseInt(
      Math.min(
        this.parent.clientWidth / this.cols,
        this.parent.clientHeight / this.rows
      )
    );
    this.ctx.canvas.width = this.L * this.cols;
    this.ctx.canvas.height = this.L * this.rows;
  }
  update() {
    this.update_size();
    this.render();
  }
  render() {
    // this.ctx.fillStyle = "green";
    // this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    const color_even = "#D7D0D9";
    const color_odd = "#D4EED3";
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if ((r + c) % 2 == 0) {
          this.ctx.fillStyle = color_even;
        } else {
          this.ctx.fillStyle = color_odd;
        }
        //渲染坐标,长,宽
        this.ctx.fillRect(c * this.L, r * this.L, this.L, this.L);
      }
    }
  }
}
