#!/bin/bash

# Tests if the `amberc` command generates a js file
# Displays 'ok' in green if test succeeds, else 'not ok' in red.

AMBERC_COMMAND="amberc"

RED="1;31"
GREEN="1;32"

function makeItColorful {
	echo -e "\e[$2m$1\e[0m"
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

function cleanTmpFile {
	rm -rf HelloApp.st HelloApp.js
}

# Create Amber file #
echo "Smalltalk createPackage: 'HelloApp'!
Object subclass: #Hello
	instanceVariableNames: ''
	package: 'HelloApp'!

!Hello methodsFor: 'not yet classified'!

begin
Transcript show \"Hello\"
! !" > HelloApp.st

# Compile Amber file with amberc #
$AMBERC_COMMAND HelloApp.st > /dev/null 2>&1

# Test JS file generation #
[ -f "HelloApp.js" ]
fileExists=`echo $?`
assert $fileExists "1" "Test js file generation"

cleanTmpFile
exit $fileExists