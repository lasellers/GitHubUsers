var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  brandTitle: 'E2E Feature Tests',
  jsonFile: './reports/e2e_cucumber_report.json',
  output: './reports/e2e_cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  storeScreenshots: true,
  screenshotsDirectory: './reports/e2e-screenshots/',
  metadata: {
    "App Version": "3.0.8",
    "Test Environment": "DEV",
    "Browser": "Chrome 54.0.2840.98",
    "Platform": "Ubuntu 20",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);
