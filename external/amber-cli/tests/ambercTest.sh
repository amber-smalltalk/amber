#!/bin/bash

# Tests if the `amberc` command generates a js file
# Displays 'ok' in green if test succeeds, else 'not ok' in red.

AMBERC_COMMAND="amberc"
ST_FILE_PATH="fixture/HelloApp.st"
JS_FILE_PATH="fixture/HelloApp.js"
RED="1;31"
GREEN="1;32"

function makeItColorful {
	echo -e "\e[$2m$1\e[0m"
}

function cleanJsFile {
	rm -rf $JS_FILE_PATH
}

# Asserts that test succeeded and displays the result
# Expected args: result testNumber testName
function assert {
	result=$1
	testNumber=$2
	testName=$3
	if [ $result -eq 0 ]
	then
		makeItColorful "ok $testNumber - $testName" $GREEN
	else
		makeItColorful "not ok $testNumber - $testName" $RED
	fi
}

# Compile Amber file with amberc #
$AMBERC_COMMAND $ST_FILE_PATH > /dev/null 2>&1

# Test JS file generation #
[ -f $JS_FILE_PATH ]
fileExists=$?
assert $fileExists 1 "Test js file generation"

cleanJsFile
exit $fileExists
