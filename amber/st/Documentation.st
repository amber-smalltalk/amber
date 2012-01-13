Smalltalk current createPackage: 'Documentation' properties: #{}!
Object subclass: #DocumentationBuilder
	instanceVariableNames: 'chapters announcer widget'
	category: 'Documentation'!

!DocumentationBuilder methodsFor: 'accessing'!

chapters
	^chapters ifNil: [chapters := self buildChapters]
!

announcer
	^announcer ifNil: [announcer := Announcer new]
!

widget
	^widget ifNil: [widget := DocumentationWidget on: self]
! !

!DocumentationBuilder methodsFor: 'building'!

buildChapters
	^((self class methodDictionary values sorted: [:a :b | a selector < b selector])
		select: [:each | each category = 'chapters'])
		collect: [:each | self perform: each selector]
!

buildOn: aCanvas
	aCanvas with: self widget.
	self 
		checkHashChange;
		checkHash
!

buildOnJQuery: aJQuery
	self buildOn: (HTMLCanvas onJQuery: aJQuery)
!

build
	self buildOnJQuery: ('body' asJQuery)
! !

!DocumentationBuilder methodsFor: 'chapters'!

ch1introduction
	^DocChapter new
		title: 'Introduction';
		contents: '

##Amber Smalltalk in a nutshell

Amber is an implementation of the Smalltalk-80 language. It is designed to make client-side web development **faster, easier and more fun** as it allows developers to write HTML5 applications in a live Smalltalk environment!!

Amber is written in itself, including the IDE and the compiler and it runs **directly inside your browser**. The IDE is fairly complete with a class browser, workspace, transcript, unit test runner, object inspectors, cross reference tools and even a debugger.

Noteworthy features:

- Amber is semantically and syntactically very close to [Pharo Smalltalk](http://www.pharo-project.org). Pharo is considered the reference implementation.
- Amber **seamlessly interacts with JavaScript** and can use its full eco system of libraries without any glue code needed.
- Amber **has no dependencies** and can be used in any JavaScript runtime, not only inside browsers. An important example is [Node.js](http://nodejs.org).
- Amber is a live Smalltalk that **compiles incrementally into efficient JavaScript** often mapping one-to-one with JavaScript equivalents.
- Amber has a **Seaside influenced canvas library** to dynamically generate HTML.

## Arguments for using Amber
In our humble opinion the main arguments for using Amber are:

- JavaScript is quite a broken language with lots of traps and odd quirks. It is the assembler of the Internet which is cool, but we don''t want to write in it.
- Smalltalk as a language is immensely cleaner and more mature, both syntactically and semantically.
- Smalltalk has a simple class model with a lightweight syntax for closures, it is in many ways a perfect match for the Good Parts of JavaScript.
- Having a true live interactive incremental development environment where you can build your application directly in the browser is unbeatable.

## Disclaimer

This documentation doesn''t aim to teach Smalltalk. 
Knowledge of Smalltalk is needed to understand the topics covered in this documentation. 
If you want to learn the Smalltalk language, you can read the excellent [Pharo By Example](http://www.pharobyexample.org) book.
'
!

ch2differencesWithOtherSmalltalks
	^DocChapter new
		title: 'Differences with other Smalltalks';
		contents: '
Amber has some differences with other Smalltalk implementations. This makes porting code a non-trivial thing, but still quite manageable.
Because it maps Smalltalk constructs one-to-one with the JavaScript equivalent, including Smalltalk classes to JavaScript constructors, the core class library is simplified compared to Pharo Smalltalk.
And since we want Amber to be useful in building lean browser apps we can''t let it bloat too much.

But apart from missing things other Smalltalks may have, there are also things that are plain different:

- The collection class hierarchy is much simpler compared to most Smalltalk implementations.
- As of today, there is no SortedCollection. The size of arrays is dynamic, and they behave like an ordered collection. They can also be sorted with the `#sort*` methods.
- The `Date` class behaves like the `Date` and `TimeStamp` classes in Pharo Smalltalk. Therefore both `Date today` and `Date now` are valid in Amber.
- Amber does not have class Character, but `String` does implement some of Character behavior.
- Amber does support class instance variables, but not class variables.
- Amber only has global classes and packages, but not arbitrary objects. Use classes instead like `Smalltalk current` instead of `Smalltalk` etc.
- Amber does not support pool dictionaries.
- Amber uses **< ...javascript code... >** to inline JavaScript code and does not have pragmas.
- Amber does not have class categories. The left side in the browser lists real Packages, but they feel much the same.
'
!

ch3GettingStarted
	^DocChapter new
		title: 'Getting started';
		contents: '
To get started hacking in Amber you can basically take three routes, independent of your platform:

1. Just try it out at http://www.amber-lang.net (click the "Class browser" button) - but you will **not be able to save any code you write**!! 
    Still, it works fine for looking at the IDE and playing around. Just don''t press F5/reload - it will bring you back to zero. 
    (Well, if you still want to develop and save code online someone has set up this site seems for free use: https://www.screwtopdb.com/amberstore/topics?name=amberstore/amber.html )
2. Download an Amber zip-ball, install Nodejs, fire up the Amber server and then open Amber from localhost - then you **can save code**. Detailed instructions are below!!
3. Same as above but install git first and get a proper clone from http://github.com/NicolasPetton/amber instead of a zip/tar-ball. 
    If you want to **contribute to Amber itself** this is really what you want to do. It requires installing git first, but it is quite simple - although we leave this bit as an "exercise to the reader" :)

**PLEASE NOTE:** Amber core developers use Linux. 
We do not want to introduce dependencies that aren''t cross platform - but currently amberc (the command line compiler) is a bash script and we also use Makefiles 
(for building Amber itself and server side examples) written on Linux/Unix. So using Windows is currently a bit limited - you can''t run "make" in the .st directory to rebuild whole of Amber for example.
 BUT... if you only want to use Amber to build web client apps and not really get involved in hacking Amber itself - then you should be fine!!

## Downloading Amber
Currently you can download in zip or tar-ball format, either cutting edge or a release. [Downloads are available here](https://github.com/NicolasPetton/amber/archives/amber). 
At the moment of writing you have release [0.9 as zip](https://github.com/NicolasPetton/amber/zipball/0.9) or [tar](https://github.com/NicolasPetton/amber/tarball/0.9), 
or [cutting edge as zip](https://github.com/NicolasPetton/amber/zipball/amber) or [tar](https://github.com/NicolasPetton/amber/tarball/amber).

At the moment this is just a **1.5Mb download**, so its very small. Unpack wherever you like, but I would rename the directory that is unpacked to something slightly shorter - like say "amber-0.9" or just "amber". 
And yes, at this point you can double click the index.html file in the amber directory to get the IDE up, but again, **you will not be able to save code**. So please continue below :)

## Installing Node.js
[Node](http://www.nodejs.org) (for short) is simply the V8 Javascript VM from Google (used in Chrome) hooked together with some hard core C-libraries for doing "evented I/O".
 Basically it''s Javascript for the server - on asynch steroids. Amber runs fine in Node and we use it for several Amber tools, like amberc (the command line Amber compiler) or the Amber server (see below). 
There are also several Amber-Node example to look at if you want to play with running Amber programs server side. **In short - you really want to install Nodejs. :)**

- Installing Node on Linux can be done using your package tool of choice ("apt-get install nodejs" for example) or any other way described at [the download page](http://nodejs.org/#download).
- Installing Node on MacOS seems to be easiest by getting it from [here](https://sites.google.com/site/nodejsmacosx/).
- Installing Node on Windows is probably done best by using the [download from Nodejs.org](http://nodejs.org/#download). This is not an installer, it is instead simply the node executable - **node.exe**.
    - Put node.exe somewhere in your path. In Windows7 I can run a command prompt "As administrator" (right click the command prompt in Start menu) and then just "copy node.exe c:\windows\" or such.

## Starting Amber server
Nicolas has written a minimal webDAV server that is the easiest way to get up and running Amber with the ability to save code. This little server is written in... Amber!! 
And it runs on top of Node. So to start it up serving your brand new directory tree of sweet Amber you do:

    cd amber      (or whatever you called the directory you unpackaged)
    ./bin/server  (in windows you type "node server\server.js" instead)

It should say it is listening on port 4000. If it does, hooray!! That means both Node and Amber are good. In Windows you might get a question about opening that port in the local firewall - yep, do it!!

## Firing up Amber
The Amber IDE is written in... Amber. It uses JQuery and runs right in your browser as a ... well, a web page. 
We could open it up just using a file url - but the reason we performed the previous steps is so that we can load the IDE web page from a server that can handle PUTs (webDAV) of source code. 
According to web security Amber can only do PUT back to the same server it was loaded from. Thus we instead want to open it through our little server now listening on port 4000:

    http://localhost:4000/index.html

Clicking the above link should get your Amber running.

To verify that you can indeed commit - just select a Package in the browser, like say "Examples" and press "Commit package" button. **If all goes well nothing happens :)**. 
So in order to really know if it worked we can check the modified date on the files **amber/st/Examples.st**, **amber/js/Examples.js** and **amber/js/Examples.deploy.js** - they should be brand new.

NOTE: We can use any webDAV server and Apache2 has been used earlier and works fine. But the Amber server is smaller and simpler to start.

'
!

ch5Index
	^ClassesIndexChapter new
!

ch6KernelObjects
	^PackageDocChapter on: (Package named: 'Kernel-Objects')
!

ch7KernelClasses
	^PackageDocChapter on: (Package named: 'Kernel-Classes')
!

ch4Tutorials
	^TutorialsChapter new
! !

!DocumentationBuilder methodsFor: 'routing'!

checkHashChange
	(window jQuery: window) bind: 'hashchange' do: [self checkHash]
!

checkHash
	| hash presentation |
	hash := document location hash  replace: '^#' with: ''.
	self announcer announce: (ChapterSelectionAnnouncement new 
		id: hash; 
		yourself)
! !

!DocumentationBuilder methodsFor: 'updating'!

update
	chapters := nil.
	announcer := nil.
	widget := nil.
	(window jQuery: '.documentation') remove.
	self build
! !

DocumentationBuilder class instanceVariableNames: 'current'!

!DocumentationBuilder class methodsFor: 'accessing'!

current
	^current ifNil: [current := self new]
! !

!DocumentationBuilder class methodsFor: 'initialization'!

initialize
	self current build
! !

Widget subclass: #DocChapter
	instanceVariableNames: 'title contents parent'
	category: 'Documentation'!

!DocChapter methodsFor: 'accessing'!

title
	^title ifNil: ['']
!

title: aString
	title := aString
!

contents
	^contents ifNil: ['']
!

contents: aString
	contents := aString
!

htmlContents
	^(Showdown at: #converter) new makeHtml: self contents
!

chapters
	"A doc chapter can contain sub chapters"
	^#()
!

cssClass
	^'doc_chapter'
!

level
	^self parent ifNil: [1] ifNotNil: [self parent level +1]
!

level: anInteger
	level := anInteger
!

parent
	^parent
!

parent: aChapter
	parent := aChapter
!

id
	"The id is used in url fragments. 
	It must be unique amoung all chapters"
	^self title replace: ' ' with: '-'
!

announcer
	^DocumentationBuilder current announcer
! !

!DocChapter methodsFor: 'actions'!

selectClass: aClass
	DocumentationBuilder current announcer announce: (ClassSelectionAnnouncement on: aClass)
!

selectChapter: aChapter
	document location hash: aChapter id
!

displayChapter: aChapter
	DocumentationBuilder current widget displayChapter: aChapter
! !

!DocChapter methodsFor: 'initialization'!

initialize
	super initialize.
	self subscribe
! !

!DocChapter methodsFor: 'rendering'!

renderOn: html
	html div 
		class: self cssClass;
		with: [
			self renderDocOn: html.
			self renderLinksOn: html]
!

renderDocOn: html
	| div |
	html h1 with: self title.
	self renderNavigationOn: html.
	div := html div class: 'contents'.
	div asJQuery html: self htmlContents
!

renderNavigationOn: html
	self parent ifNotNil: [
		html div 
			class: 'navigation'; with: [
				html a
					with: '← back to ', self parent title;
					onClick: [self selectChapter: self parent]]]
!

renderLinksOn: html
	html ul 
		class: 'links';
		with: [
			self chapters do: [:each |
				html li with: [
					html a
						with: each title;
						onClick: [self selectChapter: each]]]]
! !

!DocChapter methodsFor: 'subscriptions'!

subscribe
	self announcer on: ChapterSelectionAnnouncement do: [:ann |
		ann id = self id ifTrue: [self displayChapter: self]]
! !

DocChapter subclass: #PackageDocChapter
	instanceVariableNames: 'package chapters'
	category: 'Documentation'!

!PackageDocChapter methodsFor: 'accessing'!

package
	^package
!

title
	^'Package ', self package name
!

chapters
	^chapters
!

contents
	^'Classes in package ', self package name, ':'
! !

!PackageDocChapter methodsFor: 'initialization'!

initializeWithPackage: aPackage
	package := aPackage.
	chapters := (aPackage classes sorted: [:a :b | a name < b name]) collect: [:each |
		(ClassDocChapter on: each)
			parent: self;
			yourself]
! !

!PackageDocChapter class methodsFor: 'instance creation'!

on: aPackage
	^self basicNew
		initializeWithPackage: aPackage;
		initialize;
		yourself
! !

DocChapter subclass: #ClassDocChapter
	instanceVariableNames: 'theClass'
	category: 'Documentation'!

!ClassDocChapter methodsFor: 'accessing'!

theClass
	^theClass
!

contents
	^self theClass comment isEmpty
		ifTrue: [self theClass name, ' is not documented yet.']
		ifFalse: [self theClass comment]
!

cssClass
	^'doc_class ', super cssClass
!

title
	^self theClass name
!

initializeWithClass: aClass
	theClass := aClass
! !

!ClassDocChapter methodsFor: 'rendering'!

renderLinksOn: html
	html ul 
		class: 'links';
		with: [
			html li with: [html a
				with: 'Browse this class';
				onClick: [Browser openOn: self theClass]]]
! !

!ClassDocChapter methodsFor: 'subscriptions'!

subscribe
	super subscribe.
	self announcer 
		on: ClassSelectionAnnouncement do: [:ann |
			ann theClass = self theClass ifTrue: [
				self selectChapter: self]]
! !

!ClassDocChapter class methodsFor: 'accessing'!

on: aClass
	^self basicNew
		initializeWithClass: aClass;
		initialize;
		yourself
! !

Widget subclass: #DocumentationWidget
	instanceVariableNames: 'builder selectedChapter chapterDiv'
	category: 'Documentation'!

!DocumentationWidget methodsFor: 'accessing'!

builder
	^builder
!

builder: aDocumentationBuilder
	builder := aDocumentationBuilder
!

chapters
	^self builder chapters
!

selectedChapter
	^selectedChapter ifNil: [selectedChapter := self chapters first]
!

selectedChapter: aChapter
	^selectedChapter := aChapter
! !

!DocumentationWidget methodsFor: 'actions'!

displayChapter: aChapter
	self selectedChapter: aChapter.
	self updateChapterDiv
!

selectChapter: aChapter
	document location hash: aChapter id
! !

!DocumentationWidget methodsFor: 'rendering'!

renderOn: html
	html div 
		class: 'documentation';
		with: [
			self renderMenuOn: html.
			chapterDiv := html div.
			self updateChapterDiv]
!

renderMenuOn: html
	html div 
		class: 'menu';
		with: [
			html ol with: [
				self chapters do: [:each |
					html li with: [
						self renderChapterMenu: each on: html]]]]
!

renderChapterMenu: aChapter on: html
	html a
		with: aChapter title;
		onClick: [
			self selectChapter: aChapter].
	html ol with: [
			aChapter chapters do: [:each |
				html li with: [
					self renderChapterMenu: each on: html]]]
! !

!DocumentationWidget methodsFor: 'updating'!

updateChapterDiv
	chapterDiv contents: [:html |
		html with: self selectedChapter]
! !

!DocumentationWidget class methodsFor: 'instance creation'!

on: aBuilder
	^self new
		builder: aBuilder;
		yourself
! !

DocChapter subclass: #ClassesIndexChapter
	instanceVariableNames: ''
	category: 'Documentation'!

!ClassesIndexChapter methodsFor: 'accessing'!

cssClass
	^'index_doc ', super cssClass
!

title
	^'Smalltalk classes by index'
!

alphabet
	^'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
! !

!ClassesIndexChapter methodsFor: 'rendering'!

renderDocOn: html
	html h1 with: self title.
	self alphabet do: [:letter || classes |
		classes := Smalltalk current classes select: [:each | each name first = letter].
		classes ifNotEmpty: [html h2 with: letter].
		html ul with: [
			(classes sorted: [:a :b | a name < b name]) 
				do: [:each |
					html li with: [html a 
						with: each name;
						onClick: [self selectClass: each]]]]]
! !

Object subclass: #ClassSelectionAnnouncement
	instanceVariableNames: 'theClass'
	category: 'Documentation'!

!ClassSelectionAnnouncement methodsFor: 'accessing'!

theClass
	^theClass
!

theClass: aClass
	theClass := aClass
! !

!ClassSelectionAnnouncement class methodsFor: 'instance creation'!

on: aClass
	^self new
		theClass: aClass;
		yourself
! !

Object subclass: #ChapterSelectionAnnouncement
	instanceVariableNames: 'id'
	category: 'Documentation'!

!ChapterSelectionAnnouncement methodsFor: 'accessing'!

id
	^id
!

id: aString
	id := aString
! !

DocChapter subclass: #TutorialsChapter
	instanceVariableNames: ''
	category: 'Documentation'!

!TutorialsChapter methodsFor: 'accessing'!

title
	^'Tutorials'
!

contents
	^'Here''s a serie of tutorials. If you are new to Smalltalk, you can also learn Amber online with [ProfStef](http://www.amber-lang.net/learn.html)'
!

chapters
	^{ self firstAppChapter. self counterChapter }
!

firstAppChapter
	^DocChapter new
		title: 'A first application';
		contents: '

Let''s make Hello World in Amber.

First, you need a place for your new project. I made a new directory under amber:

    amber/projects/hello

This will store your project files. To get started, add a new index.html file to this folder, as well as empty js and st folders.

Your index.html can be really basic. The most important thing it does is include amber.js and run loadAmber. Here is a basic index.html you can use:


    <!!DOCTYPE html>
    <html>
      <head>
        <title>My First Amber Project</title>
        <script src="../../js/amber.js" type="text/javascript"></script>
        <script type="text/javascript">
          loadAmber({
            files: [],
            prefix: ''projects/hello/js'',
            ready: function() {
              
            }}); 
        </script>
      </head>
      <body>
        <article>
          <h1>My First Amber Project</h1>
          <button onclick="smalltalk.Browser._open()">class browser</button>
          <button id="sayHello">say hello</button>
        </article>
      </body>
    </html>

Now start up amber with node.js and navigate to  http://localhost:4000/projects/hello/index.html

It''s boring so far, so lets write some code. Click the button to open the class browser. Find an existing class and change its name to Hello and its package to HelloApp. 
Then click save. This creates a new class and leaves the old one intact, it doesn''t overwrite it. Your class will look like this:

    Object subclass: #Hello
        instanceVariableNames: ''''
        package: ''HelloApp''

Now click save and navigate to your new class in its new package.
 Then click ''commit package''. You just created a new class and saved your work. 
On your file system check out your js and st folders. Your new class is now saved in both JavaScript and Smalltalk.

Now, refresh your browser page and reopen the class browser. Oh no, your new class is gone!! To load your new class automatically, you have to add it in index.html. Make your JavaScript look like this:


    loadAmber({
        files: [''HelloApp.js''],
        prefix: ''projects/hello/js'',
        ready: function() {      
    }}); 

Save and refresh again. Now your class is loaded and shows up in the class browser.

Now, let''s make this class do something. Create a new message in the class browser by navigating to your class, then clicking ''not yet classified'' and fill in a simple message. Try this for example:

    begin
	"Makes me say hello to the user."

	| msg button |
	msg := ''Hello world!!''.
	button := ''#sayHello'' asJQuery.
	button click: [button after: ''<p>'' , msg , ''</p>''].

Your message isn''t too helpful if it doesn''t get called. Save it, commit the package, then edit index.html again. You can write JavaScript code that sends a message to Smalltalk:

    loadAmber({
        files: [''HelloApp.js''],
        prefix: ''projects/hello/js'', // path for js files i think
        ready: function() {
          $(function() {
            smalltalk.Hello._new()._begin();
          });
    }}); 

From there, you can create new Smalltalk classes and messages to build up your app. Enjoy!!
'
!

counterChapter
	^DocChapter new
		title: 'The counter application';
		contents: '

This tutorial will teach you how to build HTML with Amber using jQuery and the HTMLCanvas API. It is freely adapted from 
the [Seaside counter example](http://www.seaside.st/about/examples/counter)

##The counter widget

The counter is the most basic example of a widget. It allows to increment and decrement a number by clicking a button.

Amber already comes with a counter example in the `Examples` package. To avoid class name conflict, we''ll name our counter class `TCounter`.

    Widget subclass: #TCounter
        instanceVariableNames: ''count header''
        package: ''Tutorials''

The first method is used to initialize the component with the default state, in this case we set the counter to 0:

    initialize
        super initialize.
        count := 0

The method used for rendering a widget is `#renderOn:`. It takes an instance of HTMLCanvas as parameter. 
The `header` h1 kept as an instance variable, so when the count value change, we can update it''s contents accordingly.

    renderOn: html
        header := html h1 
            with: count asString;
            yourself.
        html button
            with: ''++'';
            onClick: [self increase].
        html button
            with: ''--'';
            onClick: [self decrease]

The counter is almost ready. All we need now is to implement the two action methods `#increase` and `#decrease` to change the state 
of our counter and update its header.

    increase
        count := count + 1.
        header contents: [:html | html with: count asString]

    decrease
        count := count - 1.
        header contents: [:html | html with: count asString]


That''s it!! We can now display an instance of TCounter by rendering it on the page using jQuery:

    TCounter new appendToJQuery: ''body'' asJQuery

'
! !

