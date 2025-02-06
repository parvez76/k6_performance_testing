// tests/breakpoint.test.js
import { httpMethods } from "../utils/httpMethods.js";
import { config } from "../config/global.js";
import { handleSummary } from "../report/reportGenerator.js";

export const options = {
  vus: 1,
  iterations: 1,
};

export default function () {
  let page = 1;
  while (true) {
    const response = httpMethods.get(`${config.BASE_URL}/users?page=${page++}`);
    if (response.status !== 200) break;
  }
}
export { handleSummary };
