#!/bin/bash
# source scripts/webdriver-up.sh

#./node_modules/.bin/webdriver-manager update --chrome
#./node_modules/.bin/webdriver-manager update --gecko
#./node_modules/.bin/webdriver-manager update --ie32
#./node_modules/.bin/webdriver-manager update --ie
#./node_modules/.bin/webdriver-manager update --android

./node_modules/.bin/webdriver-manager update --versions.chrome=79.0.3945.36
./node_modules/.bin/webdriver-manager update --versions.chrome=79.0.3945.88
./node_modules/.bin/webdriver-manager update --versions.chrome=79.0.3945.117

./node_modules/.bin/webdriver-manager update --versions.chrome=84.0.4147.30
#./node_modules/.bin/webdriver-manager update --versions.chrome=84.0.4147.89

#./node_modules/.bin/webdriver-manager update

./node_modules/.bin/webdriver-manager status
./node_modules/.bin/webdriver-manager version


