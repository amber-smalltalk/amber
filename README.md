Amber
=====

By Nicolas Petton <petton.nicolas@gmail.com>

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

How to commit changes from the web-based IDE
--------------------------------------------

The Amber class browser is able to commit changes to disk.
The "commit category" button will send a PUT request with the JS code of all classes in the selected class category in a file named js/CATEGORY.js and also send the corresponding .st files to the st directory.

The easiest way to enable committing is probably to use the nodejs server or to setup a webdav with Apache.

To start the local server:

./bin/server

then go to http://localhost:4000

The following steps explain how to setup a webdav for Amber with Debian, but the setup on OSX and other Linux distros should be similar.

### Install Apache and enable the dav module

    apt-get install apache2
    a2enmod dav
    a2enmod dav_fs

### Create a password for the webdav

    htpasswd -c /etc/apache2/htpasswd-webdav USERNAME

### Setup the webdav for Amber

Add the following lines to the default vhost (in /etc/apache2/sites-available/default):

    Alias /amber/ "/path/to/amber/"
        <Directory "/path/to/amber/">
            Options Indexes MultiViews FollowSymLinks
	    DirectoryIndex index.html
	    AllowOverride None
    	    Order allow,deny
	    allow from all

	    Dav on

	    AuthType Basic
            AuthName "amber"
            AuthUserFile /etc/apache2/htpasswd-webdav
	    <LimitExcept GET OPTIONS>
                Require valid-user
	    </LimitExcept>

        </Directory>


Make sure the group www-data has required rights to modify files in the webdav directory.

### Restart Apache
    
    /etc/init.d/apache2 restart

License
-------

Amber is released under the MIT license. All contributions made for inclusion are considered to be under MIT.

More infos
----------

More on the [project page](http://nicolaspetton.github.com/amber)
