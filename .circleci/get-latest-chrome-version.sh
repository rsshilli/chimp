#!/bin/bash

echo $(wget -qO- https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm | head -c96 | strings | rev | awk -F"[:-]" '/emorhc/ { print $1 "-" $2 }' | rev) > ~/chrome-version
echo Latest Chrome version is `cat ~/chrome-version`