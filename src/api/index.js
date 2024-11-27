// src/services/userService.js
import api from "./axios";

export const getUsers = () => {
  return api.get("/list");
};

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("file", file);
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
