#!/bin/bash
# source scripts/versions.sh
echo -e "\nnode";
node -v
echo -e "\nnodeJs";
nodejs --version
echo -e "\nnpm";
npm --version
echo -e "\njava";
java --version
echo -e "\nProtractor";
./node_modules/.bin/protractor --version

echo -e "\ngoogle chrome unstable";
google-chrome-unstable -version
echo -e "\ngoogle chrome beta";
google-chrome-beta -version
echo -e "\ngoogle chrome stable";
google-chrome-stable -version
echo -e "\ngoogle chrome";
google-chrome -version
echo -e "\ngoogle chromium";
./node_modules/puppeteer/.local-chromium/linux-756035/chrome-linux/chrome --version

echo -e "\ngulp";
./node_modules/.bin/gulp --version
echo -e "\nWebdriver manager";
./node_modules/.bin/webdriver-manager version
./node_modules/.bin/webdriver-manager status
echo -e "\nzdpyinfo";
xdpyinfo -version
echo -e "\nxvfb display 0";
xdpyinfo -display :0 >/dev/null 2>&1 && echo "In use" || echo "Free"

npm ls webdriver-manager

