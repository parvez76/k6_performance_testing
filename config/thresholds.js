// config/thresholds.js
export const thresholds = {
  http_req_duration: ["p(95)<2000"],
  http_req_failed: ["rate<0.01"],
};
