// report/metricsCollector.js
export const collectMetrics = (testResults) => ({
  requests: testResults.length,
  successRate: testResults.filter((r) => r.success).length / testResults.length,
  responseTimes: testResults.map((r) => r.latency),
});
