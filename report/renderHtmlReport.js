// report/renderHtmlReport.js
export const renderHtmlReport = (metrics) => `
<!DOCTYPE html>
<html>
<head>
  <title>Load Test Report</title>
  <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</head>
<body>
  <h1>Performance Metrics</h1>
  <div id="chart"></div>
  <script>
    Plotly.newPlot('chart', [{
      y: ${JSON.stringify(metrics.times)},
      type: 'box'
    }]);
  </script>
</body>
</html>
`;
