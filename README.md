# Playwright Automation Framework

Automated testing framework built with Playwright and TypeScript for API and E2E testing.

The framework supports test categorization, environment configuration, Allure reporting, and CI execution through GitHub Actions.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Allure Report
- GitHub Actions
- Faker
- dotenv
- cross-env

## Features

- API testing
- End-to-end testing
- Smoke testing
- Regression testing
- Negative testing
- Test tagging
- Environment-based configuration
- Allure reporting
- CI pipeline with GitHub Actions
- Playwright `forbidOnly` protection

## Project Structure

```text
playwright-automation-framework/
│
├── .github/
│   └── workflows/
│       └── main.yml
│
├── tests/
│
├── config/
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git

Check the installed versions:

```bash
node --version
npm --version
git --version
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd playwright-automation-framework
```

Install dependencies:

```bash
npm ci
```

Install Playwright browsers:

```bash
npx playwright install
```

For Linux/CI environments:

```bash
npx playwright install --with-deps
```

## Environment Configuration

The framework uses environment variables to configure test execution.

Example:

```text
NODE_ENV=dev
ENVIRONMENT=test
```

Environment-specific configuration can be stored in `.env` files.

Do not commit sensitive credentials or secrets to the repository.

## Running Tests

### Run all tests

```bash
npm test
```

### Run API tests

```bash
npm run api
```

### Run E2E tests

```bash
npm run e2e
```

### Run Smoke tests

```bash
npm run smoke
```

### Run Regression tests

```bash
npm run regression
```

### Run API Smoke tests

```bash
npm run api:smoke
```

### Run API Regression tests

```bash
npm run api:regression
```

### Run API Negative tests

```bash
npm run api:negative
```

### Run E2E Smoke tests

```bash
npm run e2e:smoke
```

### Run E2E Regression tests

```bash
npm run e2e:regression
```

### Run E2E Negative tests

```bash
npm run e2e:negative
```

### Run tests in UI mode

```bash
npm run debug
```

## Test Tags

Tests are organized using Playwright tags.

Examples:

```text
@API
@E2E
@Smoke
@Regression
@Negative
```

You can combine tags to run a specific group of tests.

Example:

```bash
npx playwright test --grep "@API.*@Smoke"
```

## Allure Report

The project uses `allure-playwright` for test reporting.

After test execution, Allure results are generated in:

```text
allure-results/
```

Generate the HTML report:

```bash
npm run allureGenerate
```

Open the report:

```bash
npm run allureOpen
```

The generated Allure report should not be committed to Git.

The following directories should be ignored:

```text
allure-results/
allure-report/
```

## CI/CD

The project uses GitHub Actions for Continuous Integration.

The CI pipeline automatically:

1. Checks out the repository.
2. Installs Node.js.
3. Installs project dependencies.
4. Installs Playwright browsers and system dependencies.
5. Runs Playwright tests.
6. Generates test reports.

Example workflow:

```text
Pull Request
      ↓
GitHub Actions
      ↓
Install dependencies
      ↓
Install Playwright
      ↓
Run tests
      ↓
Generate report
      ↓
Tests passed
      ↓
Merge Pull Request
```

The CI pipeline helps prevent broken or incomplete automation code from being merged into the `main` branch.

## Pull Request Workflow

Recommended development workflow:

```text
Create feature branch
        ↓
Implement changes
        ↓
Run tests locally
        ↓
Push changes
        ↓
Create Pull Request
        ↓
GitHub Actions
        ↓
Tests pass
        ↓
Code Review
        ↓
Merge into main
```

## Important Playwright Configuration

The project uses Playwright's `forbidOnly` option to prevent accidentally committing focused tests such as:

```typescript
test.only(...)
```

This ensures that CI fails if a focused test is accidentally left in the codebase.

## Useful Commands

| Command                  | Description                  |
| ------------------------ | ---------------------------- |
| `npm ci`                 | Install project dependencies |
| `npm test`               | Run all tests                |
| `npm run api`            | Run API tests                |
| `npm run e2e`            | Run E2E tests                |
| `npm run smoke`          | Run smoke tests              |
| `npm run regression`     | Run regression tests         |
| `npm run debug`          | Run Playwright UI mode       |
| `npm run allureGenerate` | Generate Allure report       |
| `npm run allureOpen`     | Open Allure report           |

## Author

Alexander Silanov
