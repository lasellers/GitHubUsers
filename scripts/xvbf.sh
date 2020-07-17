#!/bin/bash
# chrome tests with xorg xvfb (x virtual frame buffer)
# ***********************************************
# DO NOT RUN on your dev machine. ONLY in docker.
# ***********************************************
# Creates a virtual display
# source scripts/test.xvbf.sh

# start fake display on server 1 with one display screen 0
export DISPLAY=":99.0"
export SCREEN="7680x4320x24"
Xvfb $DISPLAY -screen 0 $SCREEN & xdpyinfo -display :99

# export DISPLAY=:99.0; sh -e /etc/init.d/xvfb start; sleep 3;
export NO_AT_BRIDGE=1 # Don't use dbus accessibility bridge
#  eval $(dbus-launch --sh-syntax);
#  eval $(echo -n "" | /usr/bin/gnome-keyring-daemon --login);
#  eval $(/usr/bin/gnome-keyring-daemon --components=secrets --start);
#  /usr/bin/python -c "import gnomekeyring;gnomekeyring.create_sync('login', '');";

#rm /etc/machine-id
#ln -s /var/lib/dbus/machine-id /etc/machine-id

export CHROME_LOG_FILE="$HOME/logs/chrome.log"

#xhost local:root
xhost +

export MESA_DEBUG=1
export EGL_LOG_LEVEL=debug
export LIBGL_DEBUG=verbose

# save screenshot to test google chrome
# export HOMEURL="https://lasellers.github.io/GitHubUsers/"
export HOMEURL="http://localhost:4200"

# --no-sandbox --disable-setuid-sandbox
xvfb-run google-chrome --disable-gpu --disable-dev-shm-usage --disable-software-rasterizer --mute-audio --hide-scrollbars --enable-logging --v=1 --screenshot $HOMEURL

google-chrome --disable-gpu --disable-dev-shm-usage --disable-software-rasterizer --mute-audio --hide-scrollbars --enable-logging --v=1 --screenshot $HOMEURL
google-chrome --disable-gpu --disable-dev-shm-usage --disable-software-rasterizer --screenshot $HOMEURL
google-chrome-stable --disable-gpu --disable-dev-shm-usage --disable-software-rasterizer --screenshot --mute-audio --hide-scrollbars $HOMEURL
#google-chrome --no-sandbox --disable-setuid-sandbox --disable-gpu --disable-dev-shm-usage --disable-software-rasterizer --screenshot --mute-audio --hide-scrollbars $HOMEURL

#kill it?
kill $(ps -ef | grep chrome | grep -v grep | awk '{ print $2 }')
