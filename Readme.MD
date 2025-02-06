# Load Testing Framework with k6

## Installation (Ubuntu/Linux)

1. **Node.js & npm**:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. **k6**:

```bash
sudo gpg -k
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
```

3. **Project Dependencies**:

```bash
npm install
```

## Running Tests

```bash
# Example smoke test
BASE_URL=https://api.yoursite.com npm run test:smoke

# Full test suite
npm run test:smoke && npm run test:stress && npm run test:soak
```

## Reports

HTML reports auto-generate in `reports/` directory after each test run.

## Running Tests from Dockerfile

- 1. Build Docker Image

```bash
      docker build -t k6-reqres .
```

- 2. Run Tests Inside Docker:

```bash
      sudo docker run -it --rm -v $(pwd)/reports:/app/reports -e BASE_URL=https://reqres.in/api -e TEST_TYPE=smoke k6-reqres run tests/smoke.test.js

```

## Running Tests from Docker Compose

- Specify the test name in the terminal while running tests.

```bash
      ./run-test.sh smoke  # For Smoke test
      ./run-test.sh stress # For Stress test
      ./run-test.sh soak   # For Soak test
```

## Adapting to Other Websites

To use this framework with different systems, modify:

1. **API Endpoints**:

   - Update endpoints in `api/*.js` files
   - Modify request payloads in test files

2. **Environment Config**:

   - Update `config/global.js` with new base URLs
   - Adjust thresholds in `config/thresholds.js`

3. **Test Parameters**:

   - Modify virtual users and duration in test files' `options`
   - Update workflow stages in `config/workflowOptions.js`

4. **Data Generation**:

   - Customize mock data templates in `utils/dataGeneration.js`

5. **Assertions**:
   - Update response validation checks in test files
   - Modify schema validations in `config/constants.js`

## Maintenance

- Review reports in `reports/` directory
- Monitor test thresholds in `config/thresholds.js`
- Update rate limiting rules in `api/rateLimiter.js`
