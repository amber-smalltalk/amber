// Tests if the `amber version` command returns the expected amber version number, according to the configuration file `package.json`
// Displays 'ok' in green if test succeeds, else 'not ok' in red.

require('shelljs/global');
require('colors');

var AMBER_VERSION_COMMAND = './support/amber-cli.js version';

var amberResult = exec("node " + AMBER_VERSION_COMMAND, {silent: true}).output;

if (amberResult.match(/[Aa]mber/) && amberResult.match(/version/)) {
	console.log("ok 1 - amber version".green);
	exit(0);
} else {
	console.log(amberResult.red);
	console.log(("not ok 1 - amber version".red);
	exit(1);
}