import request from "./http";

// 可以加以改造;
export default {
  login: (data) => {
    return request.get("/api/user/token/", data);
  },
  //......
};
