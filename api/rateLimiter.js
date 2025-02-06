// api/rateLimiter.js
export class RateLimiter {
  constructor(maxRequests, interval) {
    this.queue = [];
    this.maxRequests = maxRequests;
    this.interval = interval;
    setInterval(() => this.processQueue(), interval);
  }

  acquire() {
    return new Promise((resolve) => {
      this.queue.push(resolve);
    });
  }

  processQueue() {
    for (let i = 0; i < this.maxRequests && this.queue.length > 0; i++) {
      const resolve = this.queue.shift();
      resolve();
    }
  }
}
