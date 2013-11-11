#!/bin/sh

# ATTENTION: Be logged into npm before running this script,
# as a user with write access to amber npm package.

cd `dirname "$0"`
cp release-worker.sh /tmp
cd ../..
exec sh /tmp/release-worker.sh