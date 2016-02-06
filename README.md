Amber
====

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/amber-smalltalk/amber?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/amber-smalltalk/amber.svg)](http://isitmaintained.com/project/amber-smalltalk/amber "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/amber-smalltalk/amber.svg)](http://isitmaintained.com/project/amber-smalltalk/amber "Percentage of issues still open")

[![Travis CI Status](https://secure.travis-ci.org/amber-smalltalk/amber.png)](https://travis-ci.org/#!/amber-smalltalk/amber) [![devDependency status](https://david-dm.org/amber-smalltalk/amber/dev-status.svg?style=flat)](https://david-dm.org/amber-smalltalk/amber#info=devDependencies) [![Bountysource](https://www.bountysource.com/badge/team?team_id=19271&style=raised)](https://www.bountysource.com/teams/amber-smalltalk?utm_source=amber-smalltalk&utm_medium=shield&utm_campaign=raised)


By Nicolas Petton <petton.nicolas@gmail.com> and [Amber contributors](https://github.com/amber-smalltalk/amber/contributors)

Amber is an implementation of the Smalltalk language that runs on top of the JavaScript runtime. It is designed to make client-side development faster and easier.

Try Amber online and learn more on [project page](http://amber-lang.net).

Overview
--------

Amber is written in itself, including the parser and compiler. Amber compiles into efficient JavaScript, mapping one-to-one with the equivalent JavaScript. There is no interpretation at runtime.

Some highlights:

- Amber features an IDE with a Class browser, Workspace, Transcript, a ReferencesBrowser supporting senders/implementors and class references, basic Inspector and even a beginning of a Debugger and a unit TestRunner.
- [Pharo Smalltalk](http://www.pharo-project.org) is considered as the reference implementation.
- Amber is extendable with libraries, installable preferably via `bower`:
    - `amber-contrib-web` with a canvas to generate HTML, like [Seaside](http://www.seaside.st), included in a new project by default,
    - `silk` with a stream-like wrapping of DOM elements, included in a new project by default,
    - `helios` IDE, included in a new project by default,
    - `amber-contrib-legacy` with smaller in-page "classic" IDE and some miscellany, included in a new project by default,
    - `trysmalltalk`, containing [Prof Stef](http://amber-lang.net/learn.html) interactive crash course.
    - and others. You can easily write an Amber library yourself.
- Amber can use Javascript libraries; the "classic" IDE as well as Helios are built on [jQuery](http://www.jquery.com)
- You can inline Javascript code and there are many ways to interact between Amber and Javascript


Prerequisities
-------------

Amber cli tool to create new projects and assist with development tasks is in a [npm](http://npmjs.org) package  `amber-cli`.
Amber engine and core library to be used in projects is in a [bower](https://github.com/bower/bower) package `amber`.

For the installation to work, you need to have installed `node`, `npm` and `git`.
Default `node` installers may install `npm` as well.
To have `git` in Windows, use Git for Windows and select "Run Git from Windows Command Prompt" and "Checkout Windows-style, commit Unix-style" installation options.

For UNIX-based OS (Linux distibutions, FreeBSD, ...) do

    npm config set prefix=~/npm
    export PATH="$PATH:$HOME/npm/bin"
   
to have the installation in a local subdirectory in order to avoid the otherwise necessary ``sudo`` installation of Amber. The export line needs to be added to the ~/.profile file as well so that after a new login the path is set.



Getting Amber and setting up an initial project
-----------------------------------------------

Do this to install Amber

    # Install the CLI tool `amber-cli` and supporting tools
    npm install -g grunt-cli grunt-init amber-cli


Use ``amber init``  to create a project of your own

    # Initialize your project (directory must be empty)
    cd /path/to/myproject
    amber init

    # (optional) Install backward compatibility
    bower install amber-compat-es5 --save   # be loadable in older browsers


Start developing in Amber Smalltalk

    # Serve amber on localhost:4000
    amber serve



Reporting issues
--------------

  - Report issues with the www.amber-lang.net website here: https://github.com/amber-smalltalk/amber-website/issues.
  - Report issues with the docs.amber-lang.net website here: https://github.com/amber-smalltalk/documentation/issues.
  - Report issues with `amber init` project template here: https://github.com/amber-smalltalk/grunt-init-amber/issues.
  - Report issues with Amber engine, core library or `amber` / `amberc` cli tools here: https://github.com/amber-smalltalk/amber/issues.
  - Report issues with the Helios IDE here: https://github.com/amber-smalltalk/helios/issues.

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for further details.


Developing Amber
--------------

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for further details.
It explains the Amber development setup and how to contribute.


License
-------

Amber is released under the MIT license. All contributions made for inclusion are considered to be under MIT.
