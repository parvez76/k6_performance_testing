#!/bin/bash

# Set the TEST_TYPE dynamically
TEST_TYPE=$1

if [[ -z "$TEST_TYPE" ]]; then
    echo "Error: TEST_TYPE must be specified. Example: ./run-tests.sh smoke"
    exit 1
fi

echo "Running $TEST_TYPE test..."

# Run docker-compose with the specified TEST_TYPE
TEST_TYPE=$TEST_TYPE docker compose up
