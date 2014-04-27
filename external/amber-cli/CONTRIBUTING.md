Start Contributing by talking about Amber
=========================================

* Join our [Mailinglist/Google Group](http://groups.google.com/group/amber-lang)
* Talk to us on [the #amber-lang IRC channel](irc://irc.freenode.net/amber-lang)
* Follow [@AmberSmalltalk](https://twitter.com/AmberSmalltalk) on Twitter
* Circle Amber Smalltalk on [Google+](https://plus.google.com/u/0/107038882958653788078) 


Filing Issues
=============

If you think Amber CLI is not working as expected, You can start by asking on IRC or the Mailinglist.
Please make sure that you have first checked the following guides:

* [Getting Started](https://github.com/amber-smalltalk/amber/wiki/Getting-started)
* [Writing My First App](https://github.com/amber-smalltalk/amber/wiki/Writing-my-first-app)
* [How To Load Amber](https://github.com/amber-smalltalk/amber/wiki/How-to-load-amber)
* [Amber FAQ](https://github.com/amber-smalltalk/amber/wiki/FAQ)

If the issue can not be resolved you should file an issue on the respective tracker.

Before reporting an issue, try to reduce the issue to the bare minimum required to reproduce it.
This allows us to track down and fix the issue in an easier and faster way.

Additionally, you should give us enough information to reproduce the issue.
Therefore, include versions of your OS, Amber, Node.js, Grunt, and possibly used libraries as well as sample code.
If you don't list the exact steps required to reproduce the issue we won't be able to fix it.


Creating a Pull Request
-----------------------

The Amber development model currently revolves around Pull Requests which are created through GitHub

1. Update to latest Amber CLI master (```git pull```)
2. Develop your feature or bugfix in a local branch (not in ```master```)
3. Create unittest for your feature or bugfix (your feature/fix will be integrated a lot faster if unittests are present)
4. Enhance/fix Amber
5. Run the unittests
6. Commit your changes to disk if all tests are green
7. Try to split your fix into small Git commits if multiple changes are involved (this makes it easier for us to review the changes)
8. If you created / deleted / moved something significant, update CHANGELOG appropriately and commit.
8. Push the changes to your fork on GitHub ```git push <your repo> <your branchname>```
9. Submit Pull Request (usually for the Amber CLI master branch)


Compiling Amber CLI with Grunt
--------------------------

Amber uses [Grunt.js](http://gruntjs.com/) as build system since version `0.10.0`.

To install Grunt.js v0.4.x on the commandline execute the following commands:

    npm install -g grunt-cli

Make sure that you have installed all required dependencies via `npm` and `bower`.
Then you can finally compile Amber CLI using the following command:

    cd ${Amber_DIR}
    grunt amberc:amber_cli

For Windows support check the [Grunt.js on Windows](http://gruntjs.com/frequently-asked-questions#does-grunt-work-on-windows) page.
