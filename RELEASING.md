Release Guide for Amber
=======================

The following steps are required to make a release of Amber:

1. check that all tests are green
2. check that the examples are up-to-date
3. check that `API-CHANGES.txt` is up-to-date; remove the 'work in progress' from version
4. check the `CHANGELOG` file and update the release notes, check the milestone index in issues link
5. log in to npm with write access for the Amber package
6. execute `cli/support/release.sh`
7. answer the question about the version number used for the release
8. answer the question about the version number for the upcoming release
9. merge the created tag into the `stable` branch
10. update the homepage to point to the latest tag on GitHub
11. send announcement to mailinglists (Amber, Pharo, what else?)
12. send announcement on Twitter
13. send announcement on G+
