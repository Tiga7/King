import axios from "axios"; // 引入 axios
// 引入 qs 模块，用来序列化 post 类型的数据，后面会提到

import router from "@/router/index";

const baseURL = "http://localhost:3030";
// const baseURL = "http://101.34.252.81";
// const baseURL = "";

//创造一个新的axios实例
const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

//实例请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 每次发送请求之前判断 localStorage 中是否存在 token
    if (localStorage.getItem("jwt_token") != null) {
      const token = "Bearer " + localStorage.getItem("jwt_token");
      token && (config.headers.Authorization = token);
    }
    return config;
  },
  (error) => {
    return Promise.error(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 如果返回的状态码为 200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是 2 开头的的情况
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  (error) => {
    if (error.response) {
      return Promise.reject(error.response);
    }
  }
);

export default {
  get: (url, params) => {
    return new Promise((resolve, reject) => {
      instance
        .get(url, {
          params: params,
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },
  post: (url, data) => {
    return new Promise((resolve, reject) => {
      instance({
        method: "post",
        url: url,
        data: data,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  put: (url, data) => {
    return new Promise((resolve, reject) => {
      instance({
        method: "put",
        url: url,
        data: data,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  delete: (url, data) => {
    return new Promise((resolve, reject) => {
      instance({
        method: "delete",
        url: url,
        data: data,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
