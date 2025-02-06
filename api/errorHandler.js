// api/errorHandler.js
export class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const handleError = (error) => {
  if (error.response) {
    throw new APIError(error.response.data.error, error.response.status);
  }
  throw new APIError(error.message, 500);
};
