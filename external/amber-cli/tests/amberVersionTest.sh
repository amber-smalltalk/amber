#!/bin/bash

# Tests if the `amber version` command returns the expected amber version number, according to the configuration file `package.json`
# Displays 'ok' in green if test succeeds, else 'not ok' in red.

JSON_PACKAGE_PATH='../package.json' # {amber directory}/external/amber-cli/package.json
AMBER_VERSION_COMMAND='../support/amber-cli.js version'

RED="1;31"
GREEN="1;32"

function makeItColorful {
	echo -e "\e[$2m$1\e[0m"
}

amberResult=`node $AMBER_VERSION_COMMAND`

expectedAmberVersion=`node --eval "console.log(require('./$JSON_PACKAGE_PATH').version)"`

# tests if expected amber version is in the result of `amber version` command
echo $amberResult | grep $expectedAmberVersion > /dev/null 2>&1
if [ $? -eq 0 ]
then
	makeItColorful "ok 1 - amber version" $GREEN
	exit 0
else
	makeItColorful "not ok 1 - amber version\n\texpected : $expectedAmberVersion" $RED
	exit 1
fi