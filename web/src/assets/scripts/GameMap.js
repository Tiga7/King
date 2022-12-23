import { GameObject } from "./GameObject";
import { Snake } from "./Snake";
import { Wall } from "./Wall";

export class GameMap extends GameObject {
  //ctx 画布  parent 画布的父元素,用来修改画布的长宽
  constructor(ctx, parent) {
    super();

    this.ctx = ctx;
    this.parent = parent;
    //将画板分割成的一小格长度
    this.L = 0;

    this.rows = 13; //行数
    this.cols = 14; //列数

    this.walls = [];
    this.walls_count = 30;

    this.snakes = [
      new Snake(
        {
          id: 0,
          color: "#40A9FF",
          r: this.rows - 2,
          c: 1,
        },
        this
      ),
      new Snake(
        {
          id: 1,
          color: "#FF3B30",
          r: 1,
          c: this.cols - 2,
        },
        this
      ),
    ];

    //左下角的蛇眼睛初始朝上
    this.eye_direction = 0;
    //右上角的蛇眼睛初始朝下
    if (this.id === 1) this.eye_direction = 2;
  }

  start() {
    this.create_walls();

    this.add_listening_events();
  }

  add_listening_events() {
    this.ctx.canvas.focus();

    const [snake0, snake1] = this.snakes;

    this.ctx.canvas.addEventListener("keydown", (e) => {
      // console.log(e);
      if (e.key === "w") snake0.set_direction(0);
      else if (e.key === "d") snake0.set_direction(1);
      else if (e.key === "s") snake0.set_direction(2);
      else if (e.key === "a") snake0.set_direction(3);
      else if (e.key === "ArrowUp") snake1.set_direction(0);
      else if (e.key === "ArrowRight") snake1.set_direction(1);
      else if (e.key === "ArrowDown") snake1.set_direction(2);
      else if (e.key === "ArrowLeft") snake1.set_direction(3);
    });
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
  //动态调整画布
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

  check_valid(cell) {
    //检查目标位置是否合法 : 墙和身体
    for (const wall of this.walls) {
      if (wall.r === cell.r && wall.c === cell.c) return false;
    }

    for (const snake of this.snakes) {
      let k = snake.cells.length;
      //蛇尾前进
      if (!snake.check_tail_increasing()) {
        k--;
      }
      for (let i = 0; i < k; i++) {
        if (snake.cells[i].r === cell.r && snake.cells[i].c === cell.c) {
          return false;
        }
      }
    }

    return true;
  }

  update() {
    this.update_size();

    if (this.check_ready()) {
      this.next_step();
    }
    this.render();
  }
  //判断蛇的状态以决定蛇的移动 状态ok+方向ok
  check_ready() {
    for (const snake of this.snakes) {
      if (snake.status !== "idle") return false;
      if (snake.direction === -1) return false;
    }
    return true;
  }

  //让蛇进入下一回合
  next_step() {
    for (const snake of this.snakes) {
      snake.next_step();
    }
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
