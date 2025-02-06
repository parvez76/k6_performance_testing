// config/workflowOptions.js
export const workflows = {
  BASIC_LOAD: {
    stages: [
      { duration: "1m", target: 50 },
      { duration: "2m", target: 100 },
    ],
  },
  STRESS_TEST: {
    stages: [{ duration: "5m", target: 1000 }],
  },
};
