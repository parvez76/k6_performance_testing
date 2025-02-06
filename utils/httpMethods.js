// utils/httpMethods.js
import http from "k6/http";
import { check } from "k6";
import { logger } from "./logger.js";

export const httpMethods = {
  get: (url, params) => {
    const res = http.get(url, params);
    logRequest("GET", url, res);
    return res;
  },

  post: (url, body) => {
    const res = http.post(url, JSON.stringify(body), {
      headers: { "Content-Type": "application/json" },
    });
    logRequest("POST", url, res);
    return res;
  },
};

function logRequest(method, url, response) {
  logger.info(`${method} ${url} - Status: ${response.status}`);
}
