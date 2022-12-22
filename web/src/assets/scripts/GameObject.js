const GAME_OBJECTS = [];

export class GameObject {
  constructor() {
    GAME_OBJECTS.push(this);
    this.has_call_start = false;
    //定义时间间隔
    this.timeDelta = 0;
  }
  start() {
    //初始执行一次
  }
  update() {
    //每帧执行一次
  }
  before_destroy() {
    //删除之前执行
  }
  destroy() {
    for (let i in GAME_OBJECTS) {
      const obj = GAME_OBJECTS[i];
      if (obj === this) {
        //删除当前对象
        GAME_OBJECTS.splice(i);
        break;
      }
    }
  }
}

let last_timestamp; //上一次执行的时刻
const step = (timestamp) => {
  //参数为当前执行的时刻
  for (let obj of GAME_OBJECTS) {
    if (!obj.has_call_start) {
      obj.has_call_start = true;
      obj.start();
    } else {
      obj.timeDelta = timestamp - last_timestamp;
      obj.update();
    }
  }
  last_timestamp = timestamp;
  //不断递归调用渲染
  requestAnimationFrame(step);
};
requestAnimationFrame(step);
