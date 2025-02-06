// config/environments.js
export const environments = {
  staging: {
    baseUrl: "https://staging.reqres.in/api",
    timeout: 10000,
  },
  production: {
    baseUrl: "https://reqres.in/api",
    timeout: 15000,
  },
};
