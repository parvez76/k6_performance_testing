// report/reportGenerator.js
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

const getTestName = () => {
  const testType = __ENV.TEST_TYPE || "default";
  return `${testType}-report-${Date.now()}`;
};

export function handleSummary(data) {
  return {
    [`reports/${getTestName()}.html`]: htmlReport(data),
  };
}
