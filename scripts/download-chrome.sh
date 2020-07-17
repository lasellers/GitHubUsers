#!/usr/bin/env bash
# sudo sh scripts/download-chrome.sh
if [ ! -f google-chrome-stable_current_amd64.deb ]; then wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb; fi
if [ ! -f google-chrome-unstable_current_amd64.deb ]; then wget https://dl.google.com/linux/direct/google-chrome-unstable_current_amd64.deb; fi
if [ ! -f google-chrome-beta_current_amd64.deb ]; then wget https://dl.google.com/linux/direct/google-chrome-beta_current_amd64.deb; fi

dpkg -i google*.deb
rm google*.deb
