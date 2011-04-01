Jtalk
=====

By Nicolas Petton <petton.nicolas@gmail.com>

Jtalk is an implementation of the Smalltalk language that runs on top of the JavaScript runtime. It is designed to make client-side development faster and easier.

Overview
--------

Jtalk is written in itself, including the parser and compiler. Jtalk compiles into efficient JavaScript, mapping one-to-one with the equivalent JavaScript. There is no interpretation at runtime.

Some highlights:

-    Jtalk features an IDE with a Class browser, workspace and transcript
-    [Pharo Smalltalk](http://www.pharo-project.org) is considered as the reference implementation
-    Jtalk includes a canvas to generate HTML, like [Seaside](http://www.seaside.st)
-    Jtalk includes a [jQuery](http://www.jquery.com) binding

How to commit changes from the web-based IDE
--------------------------------------------

The Jtalk class browser is able to commit changes to disk.
The "commit category" button will send a PUT request with the JS code of all classes in the selected class category in a file named js/CATEGORY.js

The easiest way to enable committing is probably to setup a webdav with Apache.

The following steps explain how to setup a webdav for Jtalk with Debian, but the setup on OSX and other Linux distros should be similar.

### Install Apache and enable the dav module

    apt-get install apache2
    a2enmod dav
    a2enmod dav_fs

### Create a password for the webdav

    htpasswd -c /etc/apache2/htpasswd-webdav USERNAME

### Setup the webdav for Jtalk

Add the following lines to the default vhost (in /etc/apache2/sites-available/default):

    Alias /jtalk/ "/path/to/jtalk/"
        <Directory "/path/to/jtalk/">
            Options Indexes MultiViews FollowSymLinks
	    DirectoryIndex index.html
	    AllowOverride None
    	    Order allow,deny
	    allow from all

	    Dav on

	    AuthType Basic
            AuthName "jtalk"
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

Jtalk is released under the MIT license.

More infos
----------

More on the [project page](http://nicolaspetton.github.com/jtalk)