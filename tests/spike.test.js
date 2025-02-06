// tests/spike.test.js
import { check } from "k6";
import { httpMethods } from "../utils/httpMethods.js";
import { config } from "../config/global.js";
import { handleSummary } from "../report/reportGenerator.js";

export const options = {
  stages: [
    { duration: "1s", target: 1000 }, // Instant spike
    { duration: "1m", target: 1000 },
    { duration: "1s", target: 0 },
  ],
};

export default function () {
  const response = httpMethods.get(`${config.BASE_URL}/users?page=1`);
  check(response, {
    "Status is 200": (r) => r.status === 200,
  });
}
export { handleSummary };
