Amber [![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/amber-smalltalk/amber?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Travis CI Status](https://secure.travis-ci.org/amber-smalltalk/amber.png)](https://travis-ci.org/#!/amber-smalltalk/amber) [![devDependency status](https://david-dm.org/amber-smalltalk/amber/dev-status.svg?style=flat)](https://david-dm.org/amber-smalltalk/amber#info=devDependencies) [![Bountysource](https://www.bountysource.com/badge/team?team_id=19271&style=raised)](https://www.bountysource.com/teams/amber-smalltalk?utm_source=amber-smalltalk&utm_medium=shield&utm_campaign=raised)
=====


By Nicolas Petton <petton.nicolas@gmail.com> and [Amber contributors](https://github.com/amber-smalltalk/amber/contributors)

Amber is an implementation of the Smalltalk language that runs on top of the JavaScript runtime. It is designed to make client-side development faster and easier.

> \o/ **Call for contributors!**  \o/
>
> The core project of Amber has enough resources, but:
> - the Helios IDE (https://github.com/amber-smalltalk/helios), as well as
> - examples (https://github.com/amber-smalltalk/amber-examples), and
> - documentation (https://github.com/amber-smalltalk/amber-documentation)
>
> would need some of your care.
>
> Thank you very much!
>
> (see [CONTRIBUTING.md](CONTRIBUTING.md) for further details)


Overview
--------

Amber is written in itself, including the parser and compiler. Amber compiles into efficient JavaScript, mapping one-to-one with the equivalent JavaScript. There is no interpretation at runtime.

Some highlights:

-    Amber features an IDE with a Class browser, Workspace, Transcript, a ReferencesBrowser supporting senders/implementors and class references, basic Inspector and even a beginning of a Debugger and a unit TestRunner.
-    [Pharo Smalltalk](http://www.pharo-project.org) is considered as the reference implementation.
-    Amber includes a canvas to generate HTML, like [Seaside](http://www.seaside.st)
-    Amber can use Javascript libraries and the current IDE is built on [jQuery](http://www.jquery.com)
-    You can inline Javascript code and there are many ways to interact between Amber and Javascript


Prerequisites
-------------

Amber is shipped as a cli tool to create new projects and assist with development tasks in a [npm](http://npmjs.org) package  `amber-cli`
and as a library to be used by projects in a [bower](https://github.com/bower/bower) package `amber`.

For the installation to work, you need to have installed `node`, `npm` and `git` (in Windows, use Git for Windows and select "Run Git from Windows Command Prompt" and "Checkout Windows-style, commit Unix-style" installation options).

For UNIX-based OS (Linux distibutions, FreeBSD, ...) do

    npm config set prefix=~/npm
    export PATH="$PATH:$HOME/npm/bin"
   
to have the installation in a local subdirectory in order to avoid the otherwise necessary ``sudo`` installation of Amber. The export line needs to be added to the ~/.profile file as well so that after a new login the path is set.



Getting Amber and setting up an initial project
-----------------------------------------------

Do this to install Amber

    # Install the CLI tool `amber-cli` and supporting tools
    npm install -g amber-cli


Use ``amber init``  to create a project of your own

    # Initialize your project (directory must be empty)
    cd /path/to/myproject
    amber init

    # (optional) Install backward compatibility
    bower install amber-compat-es5 --save   # be loadable in older browsers
    bower install amber-compat-ie8 --save   # additional tweaks to load in IE8


Start developing in Amber Smalltalk

    # Serve amber on localhost:4000
    amber serve



Reporting issues
--------------

  - Report issues with the www.amber-lang.net website here: https://github.com/amber-smalltalk/amber-website/issues.
  - Report issues with the docs.amber-lang.net website here: https://github.com/amber-smalltalk/documentation/issues.
  - Report issues with Amber itself or `amber` / `amberc` cli tools here: https://github.com/amber-smalltalk/amber/issues.
Issues related to questions during `amber init` and structure of project created should be reported
to https://github.com/amber-smalltalk/grunt-init-amber/issues instead.
  - Report issues with the Helios IDE here: https://github.com/amber-smalltalk/helios/issues.

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for further details.


Developing Amber
--------------

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for further details.
It explains the Amber development setup and how to contribute.


License
-------

Amber is released under the MIT license. All contributions made for inclusion are considered to be under MIT.


More infos
----------

More on the [project page](http://amber-lang.net)
