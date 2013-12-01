Release Guide for Amber
=======================

The following steps are required to make a release of Amber:

1. check that all tests are green
2. check that the examples are up-to-date
3. check that `API-CHANGES.txt` is up-to-date
4. check the `CHANGELOG` file and update the release notes
5. execute `cli/support/release.sh`
6. answer the question about the version number used for the release
7. answer the question about the version number for the upcoming release
8. merge the created tag into the `stable` branch
9. update the homepage to point to the latest tag on GitHub
10. send announcement to mailinglists (Amber, Pharo, what else?)
11. send announcement on Twitter
12. send announcement on G+