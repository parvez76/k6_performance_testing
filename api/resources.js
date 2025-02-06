// api/resources.js
import { apiRequest } from "./apiHelpers.js";

export const ResourceService = {
  listResources: () => apiRequest("get", "/unknown"),
  getResource: (id) => apiRequest("get", `/unknown/${id}`),
};
