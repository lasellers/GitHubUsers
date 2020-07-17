#!/usr/bin/env bash

npm i

cd node_modules\protractor
npm i webdriver-manager@latest
cd ../../

npm i

# ./node_modules/.bin/webdriver-manager update
./node_modules/.bin/webdriver-manager update --versions.chrome=84.0.4147.30

npm ls webdriver-manager
./node_modules/.bin/webdriver-manager version
./node_modules/.bin/webdriver-manager status
