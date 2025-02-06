// tests/stress.test.js
import { check } from "k6";
import { httpMethods } from "../utils/httpMethods.js";
import { config } from "../config/global.js";
import { handleSummary } from "../report/reportGenerator.js";

export const options = {
  stages: [
    { duration: "1m", target: 100 }, // Ramp-up
    { duration: "2m", target: 100 }, // Stability
    { duration: "1m", target: 0 }, // Ramp-down
  ],
  thresholds: {
    http_req_duration: ["p(95)<2000"],
    http_req_failed: ["rate<0.1"],
  },
};

export default function () {
  const response = httpMethods.get(`${config.BASE_URL}/users?page=1`);
  check(response, {
    "Status is 200": (r) => r.status === 200,
  });
}
export { handleSummary };
