Start Contributing by talking about Amber
=========================================

* Join our [Mailinglist/Google Group](http://groups.google.com/group/amber-lang)
* Talk to us on [the #amber-lang IRC channel](irc://irc.freenode.net/amber-lang)
* Follow [@AmberSmalltalk](https://twitter.com/AmberSmalltalk) on Twitter
* Circle Amber Smalltalk on [Google+](https://plus.google.com/u/0/107038882958653788078) 


Filing Issues
=============

If you think Amber is not working as expected, You can start by asking on IRC or the Mailinglist.
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

Afterwards, report the issue on one of the following trackers:

* [Amber Issues](https://github.com/amber-smalltalk/amber/issues)
* [Amber Examples Issues](https://github.com/amber-smalltalk/amber-examples/issues)
* [Amber Website Issues](https://github.com/amber-smalltalk/amber-website/issues)


Developing Amber
================

If you want to get started developing Amber itself there are a few links to get you started

* [The Roadmap](https://github.com/amber-smalltalk/amber/wiki/Roadmap) gives a rough idea about where Amber is heading towards
* [The Contributions Page](https://github.com/amber-smalltalk/amber/wiki/Contributions) contains some ideas which we would love to integrate into Amber
* [The Amber FAQ](https://github.com/amber-smalltalk/amber/wiki/FAQ) contains Answers to commonly arising questions
* [The Amber CookBook](https://github.com/amber-smalltalk/amber/wiki/Amber-cookbook) contains recipies about working with Amber and its IDE
* [The Amber Porting Guide](https://github.com/amber-smalltalk/amber/wiki/Porting-code-from-other-Smalltalk-dialects) contains information about porting code from other Smalltalk dialects
* [The Amber JavaScript Guide](https://github.com/amber-smalltalk/amber/wiki/From-smalltalk-to-javascript-and-back) contains information about how Amber and JavaScript are mapped to each other

If you want to get serious with Amber development you should read the [Coding Conventions](https://github.com/amber-smalltalk/amber/wiki/Coding-conventions)
and check if you have all development dependencies installed (as indicated in [Getting Started](https://github.com/amber-smalltalk/amber/wiki/Getting-started)):

* Git (to get a clone of the repository)
* Node.js (to run the Amber development server)
* NPM (to install required Node.js packages)
* Bower (to install required client side libraries)
* Grunt-Cli (to compile Amber on the commandline)

 
Setup your Amber clone
----------------------

1. Create a fork of the repository on GitHub
2. Clone the repository
3. Run ```npm install```
4. Run ```bower install``` (requires bower to be installed via ```npm install -g bower```)
5. Run ```${Amber_DIR}/bin/amber serve```

Now you should be able to commit changes to your computer.


Creating a Pull Request
-----------------------

The Amber development model currently revolves around Pull Requests which are created through GitHub

1. Update to latest Amber master (```git pull```)
2. Develop your feature or bugfix in a local branch (not in ```master```)
3. Create unittest for your feature or bugfix (your feature/fix will be integrated a lot faster if unittests are present)
4. Enhance/fix Amber
5. Run the unittests
6. Commit your changes to disk if all tests are green
7. Try to split your fix into small Git commits if multiple changes are involved (this makes it easier for us to review the changes)
8. If you created / deleted / moved API, update API-CHANGES.txt appropriately and commit.
8. Push the changes to your fork on GitHub ```git push <your repo> <your branchname>```
9. Submit Pull Request (usually for the Amber master branch)


Compiling Amber with Grunt
--------------------------

Amber uses [Grunt.js](http://gruntjs.com/) as build system since version `0.10.0`.

To install Grunt.js v0.4.x on the commandline execute the following commands:

    npm install -g grunt-cli

Make sure that you have installed all required dependencies via `npm` and `bower`.
Then you can finally compile Amber using the following command:

    cd ${Amber_DIR}
    grunt

For Windows support check the [Grunt.js on Windows](http://gruntjs.com/frequently-asked-questions#does-grunt-work-on-windows) page.
