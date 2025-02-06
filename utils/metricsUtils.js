// utils/metricsUtils.js
export const Metrics = {
  calculateStats: (values) => ({
    min: Math.min(...values),
    max: Math.max(...values),
    avg: values.reduce((a, b) => a + b, 0) / values.length,
    p95: percentile(values, 95),
  }),
};

function percentile(arr, p) {
  const sorted = [...arr].sort((a, b) => a - b);
  const index = (sorted.length - 1) * (p / 100);
  return sorted[Math.floor(index)];
}
