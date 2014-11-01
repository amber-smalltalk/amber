// Tests if the `amber version` command returns the an amber version number

var assert = require('assert'),
    shelljs = require('shelljs');

process.env.AMBER_CLI = process.env.AMBER_CLI || "node ./support/amber-cli.js";

describe("amber version", function () {
    it("should return line with amber version", function () {
        this.timeout(7000);
        var amberResult = shelljs.exec(process.env.AMBER_CLI + " version", {silent: true}).output;

        assert.ok(amberResult.match(/[Aa]mber/));
        assert.ok(amberResult.match(/version/));
    });
});
