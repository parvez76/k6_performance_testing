// api/auth.js
import { apiRequest } from "./apiHelpers.js";

export const AuthService = {
  login: (email, password) => apiRequest("post", "/login", { email, password }),
  register: (user) => apiRequest("post", "/register", user),
};
