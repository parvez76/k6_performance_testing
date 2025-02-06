// report/customMetrics.js
export const CustomMetrics = {
  trackErrors: (errors) => ({
    totalErrors: errors.length,
    errorTypes: errors.reduce((acc, err) => {
      acc[err.type] = (acc[err.type] || 0) + 1;
      return acc;
    }, {}),
  }),
};
