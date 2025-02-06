// api/users.js
import { apiRequest } from "./apiHelpers.js";

export const UserService = {
  listUsers: (page = 1) => apiRequest("get", `/users?page=${page}`),
  getUser: (id) => apiRequest("get", `/users/${id}`),
  createUser: (user) => apiRequest("post", "/users", user),
  updateUser: (id, user) => apiRequest("put", `/users/${id}`, user),
  deleteUser: (id) => apiRequest("delete", `/users/${id}`),
};
