#!/bin/bash

# -- INSTALL DEPENDENCIES
#TODO if we cache these then we can move this line into the install section below and save some cycles
sudo apt-get update && sudo apt-get install libnss3 libgconf-2-4

# -- GET LATEST CHROME VERSION MAJOR & MINOR NUMBERS
LATEST_CHROME_VERSION=`cat ~/chrome-version`
LATEST_CHROME_VERSION_MAJOR=`echo $LATEST_CHROME_VERSION | cut -d. -f1`
LATEST_CHROME_VERSION_MINOR=`echo $LATEST_CHROME_VERSION | cut -d. -f2`
echo Latest version of Chrome is $LATEST_CHROME_VERSION_MAJOR.$LATEST_CHROME_VERSION_MINOR

# -- CHECK IF CHROME IS INSTALLED
INSTALL_CHROME=false
if [ -f /opt/google/chrome/google-chrome ]; then
      # GET INSTALLED CHROME VERSION MAJOR & MINOR NUMBERS
      INSTALLED_CHROME_VERSION=$(/opt/google/chrome/google-chrome --version)
      INSTALLED_CHROME_VERSION=${INSTALLED_CHROME_VERSION/Google Chrome /}
      INSTALLED_CHROME_VERSION_MAJOR=`echo $INSTALLED_CHROME_VERSION | cut -d. -f1`
      INSTALLED_CHROME_VERSION_MINOR=`echo $INSTALLED_CHROME_VERSION | cut -d. -f2`
      echo Installed version of Chrome is $INSTALLED_CHROME_VERSION_MAJOR.$INSTALLED_CHROME_VERSION_MINOR

  echo comparing [ $LATEST_CHROME_VERSION_MAJOR > $INSTALLED_CHROME_VERSION_MAJOR ] || [ $LATEST_CHROME_VERSION_MINOR > $INSTALLED_CHROME_VERSION_MINOR ]
  # -- COMPARE INSTALLED AND LATEST VERSIONS
  if [ $LATEST_CHROME_VERSION_MAJOR -gt $INSTALLED_CHROME_VERSION_MAJOR ] || [ $LATEST_CHROME_VERSION_MINOR -gt $INSTALLED_CHROME_VERSION_MINOR ]; then
    echo Latest Chrome version is newer than installed version.
    DO_INSTALL=true;
  else
    echo Installed Chrome version is the same as the latest version.
  fi
else
  echo Chrome installation not found.
  INSTALL_CHROME=true;
fi

if [ $INSTALL_CHROME == true ]; then
  echo Installing Chrome $LATEST_CHROME_VERSION_MAJOR.$LATEST_CHROME_VERSION_MINOR
  wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
  sudo dpkg -i google-chrome-stable_current_amd64.deb # this gives information to apt-get about missing dependencies
  sudo apt-get update && sudo apt-get -f -y install
  sudo dpkg -i google-chrome-stable_current_amd64.deb
fi
