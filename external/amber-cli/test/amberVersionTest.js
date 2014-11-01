// Tests if the `amber version` command returns the an amber version number

var assert = require('assert'),
    shelljs = require('shelljs');

var AMBER_VERSION_COMMAND = './support/amber-cli.js version';

describe("amber version", function () {
    it("should return line with amber version", function () {
        this.timeout(7000);
        var amberResult = shelljs.exec("node " + AMBER_VERSION_COMMAND, {silent: true}).output;

        assert.ok(amberResult.match(/[Aa]mber/));
        assert.ok(amberResult.match(/version/));
    });
});
