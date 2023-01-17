import axios from "axios";

const baseUrl = "https://foodapi-5k61.onrender.com";

export const apiGet = (path) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
    },
  };

  return axios.get(`${baseUrl}${path}`, config);
};

export const apiPost = (path, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
    },
  };

  return axios.post(`${baseUrl}${path}`, data, config);
};

export const apiPut = (path, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
    },
  };

  return axios.put(`${baseUrl}${path}`, data, config);
};

export const apiPatch = (path, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
    },
  };

  return axios.patch(`${baseUrl}${path}`, data, config);
};

export const apiDelete = (path) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
    },
  };

  return axios.delete(`${baseUrl}${path}`, config);
};
