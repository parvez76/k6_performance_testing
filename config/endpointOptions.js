// config/endpointOptions.js
export const endpointConfig = {
  "/users": {
    methods: ["GET", "POST"],
    timeout: 5000,
  },
  "/login": {
    methods: ["POST"],
    timeout: 3000,
  },
};
