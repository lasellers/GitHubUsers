![Build Status](https://circleci.com/gh/lasellers/GitHubUsers.png?circle-token=e949fd7d7af872231de030feb04b73e843abd3f7)
![Build Status](https://travis-ci.org/lasellers/GitHubUsers.svg?branch=master)

# GitHub Users

## Learning Angular 9, using the GitHub API

This is both a functional project and a learning experiment using Angular 9.
Because this is a learning project, different techniques are used in various parts of the code.
And this is quite on purpose. Also, though it bugs me somewhat, much of the code is left sub-optimal
as the elimination of some of it removes a path for further experimentation or review down the line.

Hopefully playing with the code will help clear up some issues you encounter as well.

Good luck.

Note: This code may change often.

--Lewis

### Version
* v1 2/6/2017 Angular 2.4 using npm angular cli beta.31
* v2 2/20/2017 Update to Angular 5
* v3 5/10/2020 Upgrade to Angular 9 and rewrite app extensively to experiment with different Angular features.
* v3.0.4 6/19/2020 Add several tests
* v3.0.5 Add CircleCI for CI testing + puppeteer for CHROME_BIN

### Deploy
See [https://lasellers.github.io/GitHubUsers/] for the live version of this repo posted to gh-pages.

To publish to gh-pages yourself, the procedure used was:

```
ng build
git subtree push --prefix dist origin gh-pages
```

## Tests

`npm run test`
or 
`npm run test-dev`

## Coverage
For coverage reports:
`npm run coverage`
and see coverage and reports folders.

## Continuous Deploy

(todo next)

## source map

`ng test --source=map=false`
Changed ng test to avoid xmlRequest send bug caused by new cli.

## Todo

* Add Material
* add variant with ngrx
* Add service workers
* Add routing so we can have a couple different variations in the the same app
* Add HTTP Interceptor for caching to simplify httpclient....
* clean up observables ....
