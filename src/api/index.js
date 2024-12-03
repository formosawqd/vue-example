// src/services/userService.js
import api from "./axios";

export const getUsers = () => {
  return api.get("/list", {});
};

export const uploadFile = (formData) => {
  console.log("formDataformData", formData);
  return api.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getFiles = () => {
  // 这里可以直接在后面加header设置，也可以加其他参数设置，具体要看这里的config有什么参数   具体看这里  https://www.axios-http.cn/docs/req_config
  return api.get("/files", {
    headers: {
      "Content-Type": "multipart/json",
    },
  });
};
// 下载文件
export const downloadFile = (filename) => {
  // 这里get的第二个参数，也是配置项的其中之一
  return api.get(`/download/${filename}`, {
    responseType: "blob", // 必须设置为 blob
  });
};

export const login = (params) => {
  // 这里是post的写法，单独传header进去
  return api.post("/login", params, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const isProtected = (params) => {
  return api.get("/protected");
};

export const getList = (params) => {
  return api.post("/getList", params);
};

export const getTree = (params) => {
  return api.post("/tree", params);
};
export const getLazyTree = (params) => {
  return api.get("/lazytree", params);
};

export const getRoute = (params) => {
  return api.get("/getRoute", {
    params,
  });
};

// export const getUsers = () => {
//   return api.get('/list');
// };
// export const uploadFile = (file) => {
//   const formData = new FormData();
//   formData.append('file', file);
//   return api.post('/upload', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });
// };

// export const login = (params) => {
//   return api.post('/login', params);
// };
// export const isProtected = (params) => {
//   return api.get('/protected');
// };

// export const getList = (params) => {
//   return api.post('/getList', params);
// };

// export const getTree = (params) => {
//   return api.post('/tree', params);
// };

// 以上的接口需要重写一下
// 查询列表
export const getArticles = (params) => {
  return api.get(`/admin/articles/`, {
    params: {
      currentPage: params.currentPage,
      pageSize: params.pageSize,
    },
  });
};
// 查询文章详情
export const getArticleDetail = (params) => {
  return api.get(`/admin/articles/${params.id}`);
};

// 新增文章
export const addArticles = (params) => {
  return api.post("/admin/articles", params);
};
// 更新文章
export const updateArticles = (params) => {
  return api.put(`/admin/articles/${params.id}`, params);
};
