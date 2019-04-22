import axios from 'axios';

const url = 'http://localhost:5000/api';

export const getUsers = () => {
  return axios.get(`${url}/users`);
};

export const getUser = (id) => {
  return axios.get(`${url}/users/${id}`);
};

export const createUser = (user) => {
  return axios.post(`${url}/users`, user);
};

export const deleteUser = (id) => {
  return axios.delete(`${url}/users/${id}`);
};

export const updateUser = (id, user) => {
  return axios.put(`${url}/users/${id}`, user);
};
