// Tests if the `amber version` command returns the expected amber version number, according to the configuration file `package.json`
// Displays 'ok' in green if test succeeds, else 'not ok' in red.

require('shelljs/global');
require('colors');

var JSON_PACKAGE_PATH = '../package.json'; // {amber directory}/external/amber-cli/package.json
var AMBER_VERSION_COMMAND = './support/amber-cli.js version';

var amberResult = exec("node " + AMBER_VERSION_COMMAND, {silent: true}).output;
var expectedAmberVersion = require(JSON_PACKAGE_PATH).version;

// tests if expected amber version is in the result of `amber version` command
if (amberResult.indexOf(expectedAmberVersion) > -1) {
	console.log("ok 1 - amber version".green);
	exit(0);
} else {
	console.log(amberResult.red);
	console.log(("not ok 1 - amber version\n\texpected : " + expectedAmberVersion).red);
	exit(1);
}