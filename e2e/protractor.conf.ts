// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
process.env.NO_PROXY = 'localhost, 0.0.0.0/4201, 0.0.0.0/9876';
const puppeteer = require('puppeteer');
process.env.CHROME_BIN = puppeteer.executablePath();
console.log(puppeteer.executablePath());

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    '../e2e/src/features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  // multiCapabilities: browserConfig['multiCapabilities'],
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [
      '../e2e/src/steps/**/*.steps.ts',
      '../e2e/hooks.js'
    ],
    strict: true,
    color: true,
    format: [
      'progress',
      'json:./reports/e2e_cucumber_report.json',
      'usage:./reports/e2e_cucumber_usage.txt',
      'summary',
      // 'usage',
      //'snippets',
      //'cucumber-html-report',
      //'cucumber-html-reporter',
    ],
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function () {
    require('ts-node').register({
      project: './e2e/tsconfig.json'
    });
  },
  onPrepare: function () {
  },
  onComplete: () => {
  },
};
