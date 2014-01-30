Amber [![Travis CI Status](https://secure.travis-ci.org/amber-smalltalk/amber.png)](https://travis-ci.org/#!/amber-smalltalk/amber)
=====

By Nicolas Petton <petton.nicolas@gmail.com> and [Amber contributors](https://github.com/NicolasPetton/amber/contributors)

Amber is an implementation of the Smalltalk language that runs on top of the JavaScript runtime. It is designed to make client-side development faster and easier.

Overview
--------

Amber is written in itself, including the parser and compiler. Amber compiles into efficient JavaScript, mapping one-to-one with the equivalent JavaScript. There is no interpretation at runtime.

Some highlights:

-    Amber features an IDE with a Class browser, Workspace, Transcript, a ReferencesBrowser supporting senders/implementors and class references, basic Inspector and even a beginning of a Debugger and a unit TestRunner.
-    [Pharo Smalltalk](http://www.pharo-project.org) is considered as the reference implementation.
-    Amber includes a canvas to generate HTML, like [Seaside](http://www.seaside.st)
-    Amber can use Javascript libraries and the current IDE is built on [jQuery](http://www.jquery.com)
-    You can inline Javascript code and there are many ways to interact between Amber and Javascript

Getting Amber
-------------

Amber is shipped as a [npm](http://npmjs.org) package for its CLI tools and as a [bower](https://github.com/bower/bower) package for the client-side.

    # Install the CLI tool `amber`
    npm install -g amber
    
    # Initialize your project as bower package
    cd /path/to/myproject
    bower init

    # Load amber via bower in your project
    bower install amber --save
    
    # Serve amber on localhost:4000
    amber serve

The [Getting started](https://github.com/amber-smalltalk/amber/wiki/Getting-started) page shows more details on ways to obtain Amber and start a project.

Building Amber
--------------

This step is only used by people developing Amber itself.
Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for further details.
It explains the Amber development setup and how to contribute.


License
-------

Amber is released under the MIT license. All contributions made for inclusion are considered to be under MIT.


More infos
----------

More on the [project page](http://amber-lang.net)
