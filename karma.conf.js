// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    concurrency: Infinity,
    singleRun: false,
    restartOnFileChange: true,
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    // frameworks: ['jasmine', 'karma-typescript', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-summary-reporter'),
      require('karma-spec-reporter'),
      require('karma-html-detailed-reporter'),
      require('karma-junit-reporter'),
      // require('karma-typescript')
    ],
    files: [
      'src/app/**/*.ts',
      'src/app/**/*.spec.ts',
      'src/app/**/*.js'
    ],
    /* preprocessors: {
      "** / *.ts": "karma-typescript" // *.tsx for React Jsx
    }, */
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ['spec', 'kjhtml', 'coverage-istanbul', 'junit', 'htmlDetailed'],
    // reporters: ['progress', 'kjhtml', 'coverage-istanbul', 'spec', 'junit', 'htmlDetailed', 'karma-typescript'],
    // reporters: ['progress', 'kjhtml', 'coverage-istanbul', 'summary', 'spec', 'htmlDetailed', 'junit],
    coverageIstanbulReporter: {
      includeAllSource: true,
      dir: require('path').join(__dirname, './coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      combineBrowserReports: true,
      fixWebpackSourcePaths: true,
      'report-config': {
        html: {
          subdir: 'html'
        },
        lcov: {
          file: 'coverage-report.lcov'
        }
      },
      verbose: false,
      thresholds: {
        emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
        // thresholds for all files
        global: {
          statements: 50,
          lines: 50,
          branches: 50,
          functions: 50
        },
      }
    },
    htmlDetailed: {
      splitResults: true,
      dir: './reports/detailed'
    },
    junitReporter: {
      outputDir: './reports/junit/', // results will be saved as $outputDir/$browserName.xml
      outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '', // suite will become the package name attribute in xml testsuite element
      useBrowserName: true, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
      properties: {}, // key value pair of properties to add to the <properties> section of the report
      xmlVersion: null // use '1' if reporting to be per SonarQube 6.2 XML format
    },
    summaryReporter: {
      // 'failed', 'skipped' or 'all'
      show: 'failed',
      // Limit the spec label to this length
      specLength: 50,
      // Show an 'all' column as a summary
      overviewColumn: true
    },
    specReporter: {
      maxLogLines: 5,             // limit number of lines logged per test
      suppressErrorSummary: true, // do not print error summary
      suppressFailed: false,      // do not print information about failed tests
      suppressPassed: false,      // do not print information about passed tests
      suppressSkipped: true,      // do not print information about skipped tests
      showSpecTiming: false,      // print the time elapsed for each spec
      failFast: true              // test would finish with error when a first fail occurs.
    },
  });
};
