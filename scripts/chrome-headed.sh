#!/bin/bash
# source scripts/chrome-headed.sh
# chrome tests with headed mode
# can be run anywhere
# export CHROME_LOG_FILE="~/logs/chrome.log"
# export CHROME_LOG_FILE="$HOME/logs/chrome.log"
export CHROME_LOG_FILE="./logs/chrome.log"

mkdir -p ./logs

# save screenshot to test google chrome
export HOMEURL="https://lasellers.github.io/GitHubUsers/"

#  --no-sandbox \
#  --disable-setuid-sandbox \

google-chrome \
  --disable-dev-shm-usage \
  --disable-software-rasterizer \
  --mute-audio \
  --hide-scrollbars \
  --screenshot $HOMEURL
mv screenshot.png ./logs/headed.png

google-chrome \
  --disable-dev-shm-usage \
  --disable-software-rasterizer \
  --mute-audio \
  --hide-scrollbars \
  --screenshot $HOMEURL \
  --window-size=1920x1080 \
  $HOMEURL
mv screenshot.png ./logs/headed.hd.png

google-chrome \
  --disable-dev-shm-usage \
  --disable-software-rasterizer \
  --mute-audio \
  --hide-scrollbars \
  --screenshot $HOMEURL \
  --window-size=4096x2160 $HOMEURL \
  $HOMEURL
mv screenshot.png ./logs/headed.4k.png
