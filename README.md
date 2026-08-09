# Playwright Automation Framework

# 🧪 E-Commerce Test Automation

[![Playwright](https://img.shields.io/badge/Playwright-45ba4b?logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=githubactions&logoColor=white)](https://github.com/features/actions)
[![Allure](https://img.shields.io/badge/Allure_Report-FF6A00?logo=allure&logoColor=white)](https://allurereport.org/)

[![Tests](https://github.com/alexSilanov/playwright-automation-framework/actions/workflows/main.yml/badge.svg)](https://github.com/alexSilanov/playwright-automation-framework/actions/workflows/main.yml)

Automated UI and API testing framework built with Playwright and TypeScript.

Playwright automation framework for **API and E2E testing** with **Allure reporting**, **Docker** and **GitHub Actions CI/CD**.

## 🚀 Tech Stack

- Playwright
- TypeScript
- Node.js
- Allure Report
- GitHub Actions
- GitHub Pages
- Docker

## 📁 Project Structure

```text
playwright-automation-framework/
├── .github/
│   └── workflows/
│       └── main.yml
├── config/
├── src/
├── tests/
│   ├── api.spec.ts
│   └── e2e.spec.ts
├── Dockerfile
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/alexSilanov/playwright-automation-framework.git
cd playwright-automation-framework
```

Install dependencies:

```bash
npm ci
```

Install Playwright browsers:

```bash
npx playwright install --with-deps
```

## 🧪 Running Tests

Run all tests:

```bash
npm run test
```

Run API tests:

```bash
npm run api
```

Run E2E tests:

```bash
npm run e2e
```

Run smoke tests:

```bash
npm run smoke
```

Run regression tests:

```bash
npm run regression
```

Open Playwright UI:

```bash
npm run debug
```

## 🏷️ Test Tags

Tests are organized using tags:

- `@API`
- `@E2E`
- `@Smoke`
- `@Regression`
- `@Negative`

Examples:

```bash
npm run api:smoke
npm run api:regression
npm run api:negative
```

## 📊 Allure Report

Generate the Allure report:

```bash
npm run allureGenerate
```

Open the report locally:

```bash
npm run allureOpen
```

The Allure report contains:

- Test execution results
- Test suites
- Categories
- Test duration
- Environment information
- Failed test details

## 🌐 Allure Report

View the latest test execution report:

[![Allure Report](https://img.shields.io/badge/Allure-Report-orange?logo=allure)](https://alexSilanov.github.io/playwright-automation-framework/)

👉 [Open Allure Report](https://alexSilanov.github.io/playwright-automation-framework/)

## 🔄 CI/CD

The project uses **GitHub Actions** for continuous integration.

The workflow runs automatically on:

- Push to `main` or `master`
- Pull requests to `main` or `master`
- Manual workflow execution

### CI/CD Pipeline

```text
Git Push / Pull Request
        ↓
GitHub Actions
        ↓
Install dependencies
        ↓
Install Playwright
        ↓
Run Playwright tests
        ↓
Generate Allure report
        ↓
Upload Allure report
        ↓
Deploy to GitHub Pages
```

## 🐳 Docker

Build the Docker image:

```bash
docker build -t playwright-automation .
```

Run tests in Docker:

```bash
docker run --rm playwright-automation
```

## 📋 Available npm Scripts

| Command                  | Description            |
| ------------------------ | ---------------------- |
| `npm run test`           | Run all tests          |
| `npm run api`            | Run API tests          |
| `npm run e2e`            | Run E2E tests          |
| `npm run smoke`          | Run smoke tests        |
| `npm run regression`     | Run regression tests   |
| `npm run debug`          | Open Playwright UI     |
| `npm run allureGenerate` | Generate Allure report |
| `npm run allureOpen`     | Open Allure report     |

## 📄 Author

Alexander Silanov
