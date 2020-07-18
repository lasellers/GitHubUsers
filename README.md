![Build Status](https://circleci.com/gh/lasellers/GitHubUsers.png?circle-token=e949fd7d7af872231de030feb04b73e843abd3f7)

# GitHub Users
See https://lasellers.github.io/GitHubUsers/

## Learning Angular 9, using the GitHub API

This is both a functional project and a learning experiment using Angular 9.
Because this is a learning project, different techniques are used in various parts of the code.
And this is quite on purpose. Also, though it bugs me somewhat, much of the code is left sub-optimal
as the elimination of some of it removes a path for further experimentation or review down the line.

Hopefully playing with the code will help clear up some issues you encounter as well.

Good luck.

Note: This code may change often.

--Lewis

## Run locally

`npm run start`


## Tests

`npm run test`

or

`npm run test-dev`


## Coverage

For coverage reports:

`npm run coverage`

and see coverage and reports folders.
./coverage/html/index.html and ./reports.


## Linting

For linting use:

`npm run lint`
or
`npm run lint-test`

## E2E tests

###
Before run any e2e tests you may need to update your chrome and gecko drivers as well
as latest browsers. Try:
`npm ls webdriver-manager`
`node_modules/protractor/node_modules/webdriver-manager/bin/webdriver-manager clean`
`node_modules/protractor/node_modules/webdriver-manager/bin/webdriver-manager update`
`npm ls webdriver-manager`

`npx webdriver-manager clean`
`./node_modules/.bin/webdriver-manager update`

To run e2e tests, type at the cli:

`ng e2e`


## CircleCI

CI/CD is handled by CircleCI.

Config validation is done by local cli:
`circleci config process ./.circleci/config.yml`

To test steps:
`sudo circleci local execute --job build`
and so forth.


## Manual deployment

Run:
`ng deploy`

Then visit: https://lasellers.github.io/GitHubUsers/

Note: Obviously if you fork this, you will go to your own gh page. :)


## Continuous Integration / Continuous Deploy

The original manual deployment process to gh-pages has been updated through CircleCI to a CI/CD setup.
The project now is linted on pushes to any branch.
For pushes to master we also run tests, and if that passes, run a prod build and deployment push to gh-pages.
See https://lasellers.github.io/GitHubUsers/ for the live deployment version of this repo this produces.

Also see https://circleci.com/blog/deploying-documentation-to-github-pages-with-continuous-integration for information about this process.

Optionally you can run:

`ng deploy`


### Version
* v1 2/6/2017 Angular 2.4 using npm angular cli beta.31
* v2 2/20/2017 Update to Angular 5
* v3 5/10/2020 Upgrade to Angular 9 and rewrite app extensively to experiment with different Angular features.
* v3.0.3 Changed angular.json to avoid xmlRequest send bug caused by new cli.
* v3.0.4 6/19/2020 Add several tests
* v3.0.5 Add CircleCI for CI testing + puppeteer for CHROME_BIN
* v3.0.6 Cleanup karma build issues. Look into e2e testing.
* v3.0.7 7/15/2020 Cleanup UI -- It's confusing now that I look at it again. Add e2e cucumber tests.


## Todo

* Add Material
* add variant with ngrx
* Add service workers
* Add routing so we can have a couple different variations in the the same app
* Add HTTP Interceptor for caching to simplify httpclient....
* Add Travis and Jenkins
* Add more tests for coverage

## Bugs

Yes, there is a 'minor' bug in the code. It is well known. :)

One of these days I'm going to get back to this project and practice writing some tests to catch it.
