// api/apiHelpers.js
import { get, post, put, del } from "../utils/httpMethods.js";
import { validateResponse } from "./responseValidator.js";

export const apiRequest = async (method, endpoint, data = null) => {
  const methods = { get, post, put, delete: del };
  const response = await methods[method](endpoint, data);
  return validateResponse(response);
};
