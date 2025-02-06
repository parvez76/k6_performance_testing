// utils/timeUtils.js
export const Timer = {
  sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  measure: async (fn) => {
    const start = Date.now();
    await fn();
    return Date.now() - start;
  },
};
