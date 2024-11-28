// src/services/api.js
import axios from "axios";

// 创建一个Axios实例
const api = axios.create({
  baseURL: "/api", // 设置基础URL
  timeout: 10000, // 设置请求超时时间
});

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    console.log(config);

    // 可以在这里添加通用的请求配置，例如添加Token
    // config.headers.Authorization = `Bearer ${token}`;
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = token;
    }
    // 这里是看具体某支接口传配Content-Type没，如果传了，就用传进来的，没传的话，就用默认的
    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    // 这里还要判断2xx 的响应结果是否正常
    return response.data;
  },
  (error) => {
    // 在这里处理通用的错误
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在2xx范围内
      console.error("Error response:", error.response.data);
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      console.error("No response:", error.request);
    } else {
      // 其他错误
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
