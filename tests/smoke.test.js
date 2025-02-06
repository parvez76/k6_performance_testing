// tests/smoke.test.js
import { check } from "k6";
import { httpMethods } from "../utils/httpMethods.js";
import { config } from "../config/global.js";
import { handleSummary } from "../report/reportGenerator.js";

export const options = {
  vus: 1,
  iterations: 1,
};

export default function () {
  const response = httpMethods.get(`${config.BASE_URL}/users?page=1`);

  check(response, {
    "Status is 200": (r) => r.status === 200,
    "Has at least 1 user": (r) => JSON.parse(r.body).data.length > 0,
  });
}
export { handleSummary };
