// config/constants.js
export const schemas = {
  USER: {
    type: "object",
    properties: {
      id: { type: "number" },
      email: { type: "string" },
      first_name: { type: "string" },
      last_name: { type: "string" },
    },
    required: ["id", "email"],
  },
};

export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};
