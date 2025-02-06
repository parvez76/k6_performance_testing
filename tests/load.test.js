// tests/load.test.js
import { check } from "k6";
import { httpMethods } from "../utils/httpMethods.js";
import { config } from "../config/global.js";
import { handleSummary } from "../report/reportGenerator.js";

export const options = {
  scenarios: {
    constant_load: {
      executor: "constant-vus",
      vus: 10,
      duration: "5m",
    },
  },
};

export default function () {
  const response = httpMethods.get(`${config.BASE_URL}/users?page=1`);
  check(response, {
    "Status is 200": (r) => r.status === 200,
  });
}
export { handleSummary };
