PATH_JSON_PACKAGE="../package.json" # {amber directory}/external/amber-cli/pacakge.json
NODE_COMMAND="../support/amber-cli.js version" # amber version

RED="1;31"
GREEN="1;32"
BLUE="1;36"

makeItColorFul(){
	echo -e "\e[$2m$1\e[0m"
}

# GET VERSION #
regexVersion='[0-9]\+\(\.[0-9]\+\)*[-_a-z]*' # regular expression used to find amber version

expectedAmberVersion=$(cat $PATH_JSON_PACKAGE | grep 'version' | grep -oe $regexVersion)
expectedNodeVersion=$(node -v | grep -oe $regexVersion)

currentAmberVersion=$(node $NODE_COMMAND | grep -oe "version\ $regexVersion" | grep -oe $regexVersion)
currentNodeVersion=$(node $NODE_COMMAND | grep -oe "NodeJS\ $regexVersion" | grep -oe $regexVersion)

# display expected and current version
makeItColorFul "\n\t Expected Amber version $expectedAmberVersion (current : $currentAmberVersion)" $BLUE
makeItColorFul "\t Expected NodeJS version $expectedNodeVersion (current : $currentNodeVersion)" $BLUE

# TEST AMBER VERSION #
amberResult=$(node $NODE_COMMAND)

echo $amberResult | grep $expectedAmberVersion > /dev/null 2>&1 && echo $amberResult | grep $expectedNodeVersion > /dev/null 2>&1 

if [ $? -eq 0 ]
then 
	makeItColorFul "\n----------------------------\nSuccess - Test amber version\n" $GREEN && exit 0
else 
	makeItColorFul "\n----------------------------\nFailure - Test amber version\n" $RED && exit 1
fi

