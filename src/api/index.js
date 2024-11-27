// src/services/userService.js
import api from "./axios";

export const getUsers = () => {
  return api.get("/list");
};

export const uploadFile = (formData) => {
  console.log("formDataformData", formData);

  return api.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const login = (params) => {
  return api.post("/login", params);
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
