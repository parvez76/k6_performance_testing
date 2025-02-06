# Use official k6 image as base
FROM grafana/k6:latest

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Switch to root, install Node.js and npm, and set correct permissions
USER root
RUN apk add --update --no-cache nodejs npm && \
    chown -R k6:k6 /app

# Install project dependencies as k6 user
USER k6
RUN npm install

# Copy all project files and ensure correct ownership
COPY --chown=k6:k6 . .

# Set default command (can be overridden)
CMD ["run", "tests/smoke.test.js"]