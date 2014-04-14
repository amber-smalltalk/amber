Release Guide for Amber
=======================

The following steps are required to make a release of Amber:

1. (not yet) check that all tests are green
1. check the `CHANGELOG` file and update the release notes, check the milestone index in issues link
1. bump version and git repo tag in `package.json`
1. Create a tag for bumped version:`git tag -a 1.2.3 -m "Version 1.2.3`
1. `git commit -a -m "Release 1.2.3" && git push && git push --tags`
1. log in to npm with write access for the Amber package
1. update the homepage to point to the latest tag on GitHub
1. send announcement to mailinglists (Amber, Pharo, what else?)
1. send announcement on Twitter
1. send announcement on G+
