# Workers-Lite Test Suite

This directory contains comprehensive tests for the workers-lite project.

## Test Coverage

The test suite includes **90 tests** covering all major modules:

### Unit Tests

- **auth.test.js** (15 tests) - UUID validation and early data processing
- **protocol.test.js** (13 tests) - LITE protocol header parsing
- **socks5.test.js** (17 tests) - SOCKS5 configuration parsing
- **connection.test.js** (26 tests) - Connection mode handling
- **dns.test.js** (14 tests) - DNS over HTTPS handler

### Integration Tests

- **integration.test.js** (5 tests) - Module exports and interface validation

## Running Tests

### Run all tests

```bash
npm test
```

### Run tests in watch mode (for development)

```bash
npm run test:watch
```

### Run tests with coverage report

```bash
npm run test:coverage
```

### Run specific test file

```bash
npm test -- tests/auth.test.js
```

### Run specific test by name

```bash
npm test -- -t "should validate correct UUID"
```

## Test Structure

Each test file follows this pattern:

```javascript
import { describe, it, expect } from "vitest";
import { functionToTest } from "../src/module.js";

describe("module name", () => {
    describe("function name", () => {
        it("should do something specific", () => {
            // Arrange
            const input = "test data";

            // Act
            const result = functionToTest(input);

            // Assert
            expect(result).toBe(expected);
        });
    });
});
```

## Mocking

The test suite uses mocks for Cloudflare Workers-specific APIs:

- `cloudflare:sockets` - Socket connections
- `WebSocketPair` - WebSocket implementation

These mocks are configured in `tests/setup.js`.

## Test Categories

### 1. Validation Tests

Tests that verify input validation and error handling:

- UUID validation with various formats
- Invalid data rejection
- Edge cases handling

### 2. Parsing Tests

Tests that verify data parsing logic:

- Protocol header parsing
- SOCKS5 configuration parsing
- URL parameter parsing

### 3. Integration Tests

Tests that verify module interfaces and exports:

- Module exports are correct
- Functions are accessible
- Constants have correct values

## Writing New Tests

When adding new functionality:

1. Create a test file in the `tests/` directory
2. Import the necessary test utilities from vitest
3. Write descriptive test names that explain the expected behavior
4. Use arrange-act-assert pattern
5. Test both success and failure cases
6. Test edge cases and boundary conditions

Example:

```javascript
import { describe, it, expect } from "vitest";
import { newFunction } from "../src/new-module.js";

describe("new-module.js", () => {
    describe("newFunction", () => {
        it("should handle valid input", () => {
            const result = newFunction("valid");
            expect(result).toBeDefined();
        });

        it("should return null for invalid input", () => {
            const result = newFunction(null);
            expect(result).toBeNull();
        });
    });
});
```

## Continuous Integration

Tests run automatically on:

- Pull requests
- Pushes to main branch
- Manual workflow triggers

## Troubleshooting

### Tests failing locally but passing in CI

- Ensure you have the latest dependencies: `npm install`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

### Import errors

- Check that the module path is correct
- Ensure the module exports the function being tested

### Mock errors

- Verify that mocks in `tests/setup.js` match the actual API
- Update mocks if the underlying implementation changes

## Test Performance

The test suite is designed to run quickly:

- All 90 tests complete in under 1 second
- No external network calls (everything is mocked)
- Parallel test execution enabled by default
