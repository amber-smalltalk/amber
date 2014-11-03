TL;DR: Setup your Amber clone
====

Amber repository contains more parts:

1. Amber language itself (in root directory). This is released.
1. Amber development helpers and CLI tool (in `external/` subdirectories). Not part of release.
1. In `internal/` directory, there are development files (`index.html` and its friends).  Not part of release.
1. A place for other modules cloned in parallel with Amber (`my`)[1]. Not part of release. Not pushed to git.

To get your clone, follow this list:

1. Create a fork of the repository on GitHub
1. Clone the fork and go to its directory.
1. Install the tools: ```npm install -g amber-cli grunt-cli bower```.
1. Run ```npm install``` to install dependencies listed in package.json. Used by development tools. See [here](https://www.npmjs.org/doc/cli/npm-install.html) for more info.
1. Run ```bower install``` to install dependencies listed in bower.json. Used by Amber in browser. See [here](http://bower.io/) for more info.
1. Get your copy of Helios IDE into directory `my/helios`, depending if you have your fork or want to use stock version:
  ```git clone git@github.com:<amber-smalltalk | your username>/helios.git my/helios```.
1. Install Helios' dependencies: ```cd my/helios && bower install && cd ../..```.
1. Run ```grunt devel```. Prepares some transient files.
1. Run ```amber serve```. Starts the integrated development server.

Now you should be able to start Amber devlopment page at `http://localhost:4000/internal/` and commit changes you do to disk.

[1] Directory `my` is in .gitignore, so it is not present after clone,
but because of being in .gitignore, it is "safe haven" to clone other repos into.
Created especially for being able to have your fork of Amber in parallel with
either you fork of Helios, to develop it in parallel, or with stock repo, just to use it.

Start Contributing by talking about Amber
=========================================

* Talk to us on [the gitter.im room](https://gitter.im/amber-smalltalk/amber)
* Join our [Mailinglist/Google Group](http://groups.google.com/group/amber-lang)
* Follow [@AmberSmalltalk](https://twitter.com/AmberSmalltalk) on Twitter
* Circle Amber Smalltalk on [Google+](https://plus.google.com/u/0/107038882958653788078)
* Talk to us on [the #amber-lang IRC channel](irc://irc.freenode.net/amber-lang)


Filing Issues
=============

If you think Amber is not working as expected, You can start by asking on gitter room, IRC or the Mailinglist.
Please make sure that you have first checked the following guides:

**TODO** update these
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
* [Helios IDE Issues](https://github.com/amber-smalltalk/helios/issues)
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

* Git (to get a clone of the repository, use Git for Windows in Windows)
* Node.js (to run the Amber development server)
* NPM (to install required Node.js packages)
* Bower (to install required client side libraries)
* Grunt-Cli (to compile Amber on the commandline)

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

Amber uses [Grunt.js](http://gruntjs.com/) as build system since version `0.10.0` (in case of Windows issues check the [Grunt.js on Windows](http://gruntjs.com/frequently-asked-questions#does-grunt-work-on-windows)).

If you created your clone according to the "Setting up your Amber clone", you should run

    grunt

in Amber directory to start building from CLI.
