Widget subclass: #Slide
	instanceVariableNames: 'presentation'
	category: 'Presentation'!

!Slide methodsFor: 'accessing'!

presentation
	^presentation
!

presentation: aPresentation
	presentation := aPresentation
!

id
	self subclassResponsibility
!

cssClass
	^'slide'
!

backgroundColor
	^'#555'
! !

!Slide methodsFor: 'actions'!

show
	document location hash: self id.
	self backgroundColor ifNotNil: [
		(window jQuery: '#slides') css: 'background' color: self backgroundColor].
	(window jQuery: '.slide') hide: self presentation slideTransition options: #() duration: 300.
	(window jQuery: '#', self id) show: self presentation slideTransition options: #() duration: 300.
! !

!Slide methodsFor: 'rendering'!

renderOn: html
	html div class: self cssClass; id: self id; with: [
		self renderSlideOn: html.
		self renderMetaOn: html]
!

renderSlideOn: html
!

renderMetaOn: html
	html div 
		id: 'meta';
		with: [
			html p class: 'title'; with: self presentation title.
			html p class: 'description'; with: self presentation description.
			html a class: 'author'; with: self presentation author; href: 'mailto:', self presentation email.
			html a class: 'url'; with: self presentation url; href: self presentation url]
! !

!Slide class methodsFor: 'instance creation'!

on: aPresentation
	^self new
		presentation: aPresentation;
		yourself
! !

Widget subclass: #Presentation
	instanceVariableNames: 'currentSlide slides'
	category: 'Presentation'!

!Presentation methodsFor: 'accessing'!

title
	^ self class title.
!

author
	^'John Smith'
!

url
	^'http://jtalk-project.org'
!

description
	^'A presentation written in Jtalk'
!

email
	^'john@smith.com'
!

slides
	slides ifNil: [self initSlides].
	^slides
!

slideClasses
	^self subclassResponsibility
!

currentSlide
	^currentSlide
!

currentSlide: aSlide
	currentSlide := aSlide
!

slideTransition
	^'fade'
!

style
	"Should return a CSS style"
	^ ''
! !

!Presentation methodsFor: 'actions'!

nextSlide
	| next |
	self currentSlide ifNotNil: [
		next := self slides 
			at: (self slides indexOf: self currentSlide) + 1
			ifAbsent: [nil].
		next ifNotNil: [currentSlide := next. next show]]
!

showCurrentSlide
	self currentSlide ifNotNil: [
		'.slide' asJQuery hide.
		('#', self currentSlide id) asJQuery show.
          	'title' asJQuery text: self title, ' - ', self currentSlide id.
        ]
!

previousSlide
	| next |
	self currentSlide ifNotNil: [
		next := self slides 
			at: (self slides indexOf: self currentSlide) - 1
			ifAbsent: [nil].
		next ifNotNil: [currentSlide := next. next show]]
!

checkHash
	| hash slide |
	hash := document location hash  replace: '^#' with: ''.
	slide := self slides detect:  [:each | each id = hash] ifNone: [nil].
	slide ifNotNil: [
		self currentSlide = slide ifFalse: [
			self currentSlide: slide.
			slide show]]
! !

!Presentation methodsFor: 'initialization'!

initSlides
	slides := self slideClasses collect: [:each | each on: self]
! !

!Presentation methodsFor: 'rendering'!

renderOn: html
	html style
		type: 'text/css';
		with: self style.
	html div 
		id: 'slides';
		with: [self renderSlidesOn: html]
!

renderSlidesOn: html
	self slides do: [:each | 
		each renderOn: html].
	currentSlide ifNil: [currentSlide := self slides first].
	self showCurrentSlide
! !

Presentation class instanceVariableNames: 'current'!

!Presentation class methodsFor: 'accessing'!

concretePresentations
	^ self allSubclasses select: [:aPresentationClass| aPresentationClass isConcrete]
!

title
	^ 'Slides'
! !

!Presentation class methodsFor: 'enumerating'!

concretePresentationsDo: aBlockWithArg
	self concretePresentations do: aBlockWithArg.
! !

!Presentation class methodsFor: 'testing'!

isConcrete
	^false
! !

Presentation subclass: #ESUG2011Presentation
	instanceVariableNames: ''
	category: 'Presentation'!

!ESUG2011Presentation methodsFor: 'accessing'!

description
	^'ESUG 2011, Edinburgh'
!

author
	^'Nicolas Petton'
!

email
	^'nico@objectfusion.fr'
!

url
	^'http://jtalk-project.org'
!

slideClasses
	^Array new
		add: IntroSlide;
		add: AboutSlide;
		add: WhatIsJtalkSlide;
		add: JtalkFeaturesSlide;
		add: WorkspaceSlide;
		add: IDESlide;
		add: CountersSlide;
		add: JtalkAndJavascriptSlide;
		add: JtalkAndJavascriptSlide2;
		add: JtalkAndJavascriptSlide3;
		add: JtalkAndJavascriptSlide4;
		add: JtalkAndCLI;
		add: JtalkAndNode;
		add: JtalkAndNode2;
		add: JtalkAndNode3;
		add: JtalkAndWebOS;
		add: JtalkAndEnyo;
		add: ContributionsSlide;
		yourself
!

style
	^'
body {
    font-family: Helvetica,Arial,sans;
}

#slides {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #555;
}

.slide {
    background: #fff;
    color: #444;
    text-align: left;
    font-size: 20px;
    line-height: 1.8em;
    height: 500px;
    width: 700px;
    padding: 60px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -420px;
    margin-top: -320px;
    box-shadow: 0 0 20px #111;
    -moz-box-shadow: 0 0 20px #111;
    -webkit-box-shadow: 0 0 20px #111;
}

.slide.transparent {
    background: transparent;
    box-shadow: 0 0 0 none;
    -moz-box-shadow: 0 0 0 transparent;
    -webkit-box-shadow: 0 0 0 transparent;
    color: #fff !!important;
}

.slide.black {
    background: black;
    background-image: -webkit-gradient(
	linear,
	left bottom,
	left top,
	color-stop(0.38, rgb(79,79,79)),
	color-stop(0.69, rgb(33,33,33)),
	color-stop(0.86, rgb(4,4,4))
    );
    background-image: -moz-linear-gradient(
	center bottom,
	rgb(79,79,79) 38%,
	rgb(33,33,33) 69%,
	rgb(4,4,4) 86%
    );
    color: #fff !!important;
}

.slide.black h1, .slide.black h2, .slide.black h3,
.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {
    color: #fff;
    text-shadow: 0 1px 4px #aaa;
}

.slide.black a, .slide.transparent a {
    color: #ccc;
}

.slide.white {
    color: #333 !!important;
}

.slide.white h1, .slide.white h2, .slide.white h3 {
    color: #333;
}

.slide.white a {
    color: #333;
}


.slide h1, .slide h2, .slide h3 {
    color: #333;
    /* text-align: center; */
}

.slide h1 {
    font-family: "Droid Sans";
    font-size: 36px;
    text-shadow: 0 1px 4px #aaa;
    margin-top: 30px;
    margin-bottom: 50px;
}

/* .slide ul, .slide li { */
/*     padding: 0; */
/*     margin: 0; */
/* } */

.slide button {
    font-size: 18px;
}

.slide a {
    color: #555;
    text-decoration: none;
    cursor: pointer;
}

.slide a:hover {
    color: #fff;
    background: #555;
}

.slide .right {
    text-align: right;
}

.slide .section.center {
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    width: 700px;
    height: 500px;
}

.slide code {
    font-family: "Droid Sans Mono";
    color: #444;
    border: 1px solid #ddd;
    background: #eee;
    border-radius: 4px;
    padding: 2px;
    font-size: 16px;
}

.slide .code2 {
    font-family: "Droid Sans Mono";
    line-height: 1.2em;
    color: #444;
    padding: 2px;
    font-size: 16px;
}


.slide .CodeMirror {
    width: 500px;
    height: 300px;
    text-align: left;
}

.slide .CodeMirror-scroll {
    text-align: left;
}

.slide .fancy {
    margin-top: 30px;
    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    transform: rotate(-10deg);
    color: red;
}

.slide .comment {
    opacity: 0.6;
    font-weight: normal;
}

.slide .red {
    color: red;
}

.slide .blue {
    color: blue;
}

.slide#WhatIsJtalk {
    background: white url("esug2011/images/balloon.jpg") 650px 50px no-repeat;
}

.slide#ide {
    background: black url("esug2011/images/ide_star_wars.png") center center no-repeat;
}

.slide#JtalkAndCLI {
    background: white url("esug2011/images/terminal.png") 620px 20px no-repeat;
}

.slide#JtalkAndNode {
    background: white url("esug2011/images/nodejs.png") 580px 40px no-repeat;
}
.slide#JtalkAndNode2 {
    background: white url("esug2011/images/nodejs.png") 580px 40px no-repeat;
}

.slide#JtalkAndNode3 {
    background: white url("esug2011/images/nodejs.png") 580px 40px no-repeat;
}

.slide#JtalkAndWebOS {
    background: white url("esug2011/images/devices.jpg") 380px 280px no-repeat;
}

.slide#JtalkAndEnyo {
    background: white url("esug2011/images/enyo.png") 130px 150px no-repeat;
}

.slide#links {
    background: white url("esug2011/images/asterix.png") 30px 130px no-repeat;
}

.slide#links .section {
    margin-left: 250px;
    margin-top: 200px;
    font-family: "Droid Sans";
    font-size: 26px;
    font-weight: bold;
}


#meta {
    position: absolute;
    font-size: 12px;
    opacity: 0.6;
    bottom: 0;
    right: 0;
    z-index: 2;
    background: #333;
    text-align: right;
    padding: 0 10px;
    line-height: 1.8em;
    color: #eee;
    border-top-left-radius: 5px;
}

#meta:hover {
    opacity: 0.8;
}

#meta p {
    display: inline;
    padding: 0 5px;
}

#meta a {
    //background: #ccc;
    color: #ccc;
    text-decoration: none;
    padding: 0 5px;
}

.slide {
    
}
'
! !

ESUG2011Presentation class instanceVariableNames: 'current'!

!ESUG2011Presentation class methodsFor: 'accessing'!

title
	^'Jtalk'
! !

!ESUG2011Presentation class methodsFor: 'testing'!

isConcrete
	^true
! !

Slide subclass: #IntroSlide
	instanceVariableNames: ''
	category: 'Presentation'!

!IntroSlide methodsFor: 'accessing'!

id
	^'intro'
!

cssClass
	^'slide black'
! !

!IntroSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1 with: 'Jtalk, the Smalltalk for Web developers'.
		html p with: self presentation author, ' & Göran Krampe - ', self presentation description.
		html p with: [
			html a
				with: self presentation email;
				href: 'mailto:', self presentation email].
		html p with: [
			html a
				with: 'goran@krampe.se';
				href: 'mailto:goran@krampe.se'].
		
          	html p with: [
			html a
				with: 'objectfusion.fr';
				href: 'http://www.objectfusion.fr']]
! !

Slide subclass: #WhatIsJtalkSlide
	instanceVariableNames: ''
	category: 'Presentation'!

!WhatIsJtalkSlide methodsFor: 'accessing'!

id
	^'WhatIsJtalk'
! !

!WhatIsJtalkSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1 with: 'Jtalk in a nutshell'.
		html h2 with: 'Jtalk is an implementation of Smalltalk'.
		html h2 with: 'Jtalk runs on top of the JavaScript runtime'.
		html h2 with: 'Jtalk is an opensource project (MIT)'.
		html h2 class: 'fancy'; with: 'Jtalk is cool!!']
! !

Slide subclass: #JtalkFeaturesSlide
	instanceVariableNames: ''
	category: 'Presentation'!

!JtalkFeaturesSlide methodsFor: 'accessing'!

id
	^'features'
! !

!JtalkFeaturesSlide methodsFor: 'rendering'!

renderSlideOn: html
	html h1 with: 'Jtalk features'.
	html ul with: [
		html li with: 'Jtalk is (mostly) written in itself, including the parser & compiler'.
		html li with: 'Full Smalltalk object system, including classes & metaclasses, etc'.
		html li with: 'Core libraries (streams, collections, RegExp, etc)'.
		html li with: 'Web related libraries: HTML Canvas, DOM manipulation'.
		html li with: 'Full featured IDE'.
		html li with: [
			html with:'Advanced Smalltalk features, including '.
			html code with: '#doesNotUnderstand:'.
			html with: ' support and '.
			html code with: 'thisContext']]
! !

Slide subclass: #AboutSlide
	instanceVariableNames: ''
	category: 'Presentation'!

!AboutSlide methodsFor: 'accessing'!

id
	^'about'
!

cssClass
	^'slide transparent white'
!

backgroundColor
	^'white'
! !

!AboutSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1 with: 'About this presentation'.
		html p with: 'This presentation is entirely written in Jtalk and is licensed under CC BY-SA.'.
		html p with: [
			html with: 'Press '.
			html code with: '←'.
			html with: ' to move backward and '.
			html code with: ' →'.
			html with: ' to move forward.'].
		html p with: [
			html with: 'Open a '.
			html button 
				with: 'browser';
				onClick: [Browser openOn: Presentation].
			html with: ' to edit the source code.']]
! !

Slide subclass: #JtalkAndJavascriptSlide3
	instanceVariableNames: ''
	category: 'Presentation'!

!JtalkAndJavascriptSlide3 methodsFor: 'accessing'!

id
	^'jtalkAndJs3'
!

backgroundColor
	^'#08C'
! !

!JtalkAndJavascriptSlide3 methodsFor: 'rendering'!

renderSlideOn: html
	html h1 with: [
		html with: 'Smalltalk '.
		html span class: 'red'; with: '♥'.
		html with: ' JavaScript'].
	html h2 with: 'Smalltalk ⇒ JavaScript'.
	html ol with: [
		html li 
			with: 'Unary messages begin with an underscore: ';
			with: [html code with: 'yourself'];
			with: ' becomes ';
			with: [html code with: '_yourself()'].
		html li 
			with: 'Binary messages are prefixed with 2 underscores: ';
			with: [html code with: '3@4'];
			with: ' becomes ';
			with: [html code with: '(3).__at(4)'].
		html li 
			with: 'Keyword message follow the same rules as unary messages, with a final underscore: ';
			with: [html code with: 'aDictionary at: 3 put: 4'];
			with: ' becomes ';
			with: [html code with: 'aDictionary._at_put_(3, 4)']]
! !

Slide subclass: #JtalkAndJavascriptSlide2
	instanceVariableNames: ''
	category: 'Presentation'!

!JtalkAndJavascriptSlide2 methodsFor: 'accessing'!

id
	^'jtalkAndJs2'
!

backgroundColor
	^'#08C'
! !

!JtalkAndJavascriptSlide2 methodsFor: 'rendering'!

renderSlideOn: html
	html h1 with: [
		html with: 'Smalltalk '.
		html span class: 'red'; with: '♥'.
		html with: ' JavaScript'].
	html h2 with: 'Jtalk maps one to one with the JavaScript equivalent:'.
	html ul with: [
		html li with: 'String ⇔ String'.
		html li with: 'Number ⇔ Number'.
		html li with: 'BlockClosure ⇔ function'.
		html li with: 'Dictionary ⇔ Object'.
		html li with: 'Error ⇔ Error'.
		html li with: 'etc.']
! !

Slide subclass: #JtalkAndJavascriptSlide
	instanceVariableNames: ''
	category: 'Presentation'!

!JtalkAndJavascriptSlide methodsFor: 'accessing'!

id
	^'jtalkAndJs'
!

cssClass
	^'slide transparent'
!

backgroundColor
	^'#08C'
! !

!JtalkAndJavascriptSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1 with: [
			html with: 'Smalltalk '.
			html span class: 'red'; with: '♥'.
			html with: ' JavaScript']]
! !

Slide subclass: #WorkspaceSlide
	instanceVariableNames: ''
	category: 'Presentation'!

!WorkspaceSlide methodsFor: 'accessing'!

id
	^'workspace'
!

backgroundColor
	^'#18bd7d'
!

renderSlideOn: html
	| workspace |
	workspace := SourceArea new.
	html div class: 'section center'; with: [
		html h1 with: 'Give Jtalk a try!!'.
		workspace renderOn: html.
		html div with: [
			html button
				with: 'DoIt';
				onClick: [workspace doIt].
			html button
				with: 'PrintIt';
				onClick: [workspace printIt].
			html button
				with: 'InspectIt';
				onClick: [workspace inspectIt]]]
! !

Slide subclass: #CountersSlide
	instanceVariableNames: ''
	category: 'Presentation'!

!CountersSlide methodsFor: 'accessing'!

id
	^'counters'
!

backgroundColor
	^'#18bd7d'
! !

!CountersSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1 with: 'The counter example'.
		html div with: [
			2 timesRepeat: [Counter new renderOn: html]]]
! !

Slide subclass: #JtalkAndJavascriptSlide4
	instanceVariableNames: ''
	category: 'Presentation'!

!JtalkAndJavascriptSlide4 methodsFor: 'accessing'!

id
	^'jtalkAndJs4'
!

backgroundColor
	^'#08C'
! !

!JtalkAndJavascriptSlide4 methodsFor: 'rendering'!

renderSlideOn: html
	html h1 with: [
		html with: 'JavaScript '.
		html span class: 'red'; with: '♥'.
		html with: ' Smalltalk too!! ';
		with: [html span class: 'comment'; with: '(how cute)']].
	html h2 with: 'JavaScript ⇒ Smalltalk'.
	html ol with: [
		html li 
			with: [html code with: 'someUser.name'];
			with: ' becomes ';
			with: [html code with: 'someUser name'].
		html li 
			with: [html code with: 'someUser name = "John"'];
			with: ' becomes ';
			with: [html code with: 'someUser name: ''John'''].
		html li 
			with: [html code with: 'console.log(''hello world'')'];
			with: ' becomes ';
			with: [html code with: 'console log: ''hello world'''].
		html li 
			with: [html code with: 'window.jQuery(''foo'').css(''background'', ''red'')'];
			with: ' becomes ';
			with: [html br];
			with: [html code with: '(window jQuery: ''foo'') css: ''background'' color: ''red''']]
! !

Slide subclass: #IDESlide
	instanceVariableNames: ''
	category: 'Presentation'!

!IDESlide methodsFor: 'accessing'!

id
	^'ide'
!

backgroundColor
	^'black'
!

cssClass
	^'slide transparent'
! !

!IDESlide methodsFor: 'rendering'!

renderSlideOn: html
"	html div class: 'section center'; with: [
		html h1 
			with: 'The wonderful Jtalk ';
			with: [
				html a 
					with: 'development tools';
					onClick: [TabManager current open]];
			with: '.']
"
! !

Slide subclass: #ContributionsSlide
	instanceVariableNames: ''
	category: 'Presentation'!

!ContributionsSlide methodsFor: 'accessing'!

id
	^'links'
! !

!ContributionsSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section'; with: [
		html p with: [
			html a href: 'http://jtalk-project.org'; with: 'jtalk-project.org'].
		html p with: [
			html a href: 'https://github.com/NicolasPetton/jtalk'; with: 'github.com/NicolasPetton/jtalk'].
		html p with: [
			html a href: 'http://http://groups.google.com/group/jtalk-project'; with: 'groups.google.com/group/jtalk-project']]
! !

Slide subclass: #JtalkAndCLI
	instanceVariableNames: ''
	category: 'Presentation'!

!JtalkAndCLI methodsFor: 'not yet classified'!

backgroundColor
	^'#0A1'
!

id
	^'JtalkAndCLI'
!

renderSlideOn: html
	html h1 with: [
		html with: 'Jtalk and '.
		html span class: 'blue'; with: 'the command line'].

	html h2 with: 'jtalkc - a fairly elaborate bash script that:'.

	html ul with: [
		html li with: 'Uses Node.js to run the Jtalk Compiler'.
		html li with: 'Compiles .st files to .js'.
		html li with: 'Links .js files into a single one'.
		html li with: 'Adds class initilization and/or call to main'.
		html li with: 'Optionally runs Google Closure compiler']
! !

Slide subclass: #JtalkAndNode
	instanceVariableNames: ''
	category: 'Presentation'!

!JtalkAndNode methodsFor: 'not yet classified'!

backgroundColor
	^'#0A1'
!

id
	^'JtalkAndNode'
!

renderSlideOn: html
	html h1 with: [
		html with: 'Jtalk and '.
		html span class: 'blue'; with: 'Node.js'].

	html h2 with: 'Hello.st:'.
	html pre with: [
		html div class: 'code2'; with:  'Object subclass: #Hello
        instanceVariableNames: ''''
        category: ''Hello''!!

!!Hello class methodsFor: ''main''!!
main
	console log: ''Hello world from JTalk in Node.js''
!! !!']
! !

Slide subclass: #JtalkAndNode2
	instanceVariableNames: ''
	category: 'Presentation'!

!JtalkAndNode2 methodsFor: 'not yet classified'!

backgroundColor
	^'#0A1'
!

id
	^'JtalkAndNode2'
!

renderSlideOn: html
	html h1 with: [
		html with: 'Jtalk and '.
		html span class: 'blue'; with: 'Node.js'].

	html h2 with: 'Makefile:'.
	html pre with: [
		html div class: 'code2'; with:  'Program.js: Hello.st
	../../bin/jtalkc -N -m Hello Hello.st Program

run: Program.js
	./hello

clean:
	rm -f Program.js Hello.js
'].
html h2 with: 'hello:'.
	html pre with: [
		html div class: 'code2'; with:  'node Program.js $@']
! !

Slide subclass: #JtalkAndNode3
	instanceVariableNames: ''
	category: 'Presentation'!

!JtalkAndNode3 methodsFor: 'not yet classified'!

backgroundColor
	^'#0A1'
!

id
	^'JtalkAndNode3'
!

renderSlideOn: html
	html h1 with: [
		html with: 'Jtalk and '.
		html span class: 'blue'; with: 'Node.js'].

	html h2 with: 'make clean && make run:'.

	html pre with: [
		html div class: 'code2'; with:  'rm -f Program.js Hello.js
../../bin/jtalkc -N -m Hello Hello.st Program
Loading libraries  /home/gokr/jtalk/js/boot.js /home/gokr/jtalk/js/Kernel.js
/home/gokr/jtalk/js/Parser.js /home/gokr/jtalk/js/Compiler.js
/home/gokr/jtalk/js/init.js /home/gokr/jtalk/nodejs/nodecompile.js
and compiling ...
Compiling in debugMode: false
Reading file Hello.st
Exporting category Hello as Hello.js
Adding libraries  /home/gokr/jtalk/js/boot.js /home/gokr/jtalk/js/Kernel.js  ...
Adding Jtalk code Hello.js ...
Adding initializer /home/gokr/jtalk/js/init.js ...
Adding call to Hello class >> main ...
Writing Program.js ...
Done.
./hello'.
html span class: 'blue'; with:'Hello world from JTalk in Node.js']
! !

Slide subclass: #JtalkAndWebOS
	instanceVariableNames: ''
	category: 'Presentation'!

!JtalkAndWebOS methodsFor: 'not yet classified'!

backgroundColor
	^'#0A1'
!

id
	^'JtalkAndWebOS'
!

renderSlideOn: html
	html h1 with: [
		html with: 'Jtalk and '.
		html span class: 'blue'; with: 'webOS'].

	html h2 with: 'A really cool mobile OS based on Linux:'.

	html ul with: [
		html li with: 'The primary language in webOS is Javascript'.
		html li with: 'The new UI framework for webOS 3.0 is called Enyo'.
		html li with: 'Regular apps run in V8 + Webkit'.
		html li with: 'Background services run in Node.js']
! !

Slide subclass: #JtalkAndEnyo
	instanceVariableNames: ''
	category: 'Presentation'!

!JtalkAndEnyo methodsFor: 'not yet classified'!

id
	^'JtalkAndEnyo'
!

backgroundColor
	^'#0A1'
!

renderSlideOn: html
	html h1 with: [
		html with: 'Jtalk and '.
		html span class: 'blue'; with: 'Enyo'].
! !

Widget subclass: #PresentationNavigator
	instanceVariableNames: 'presentationBrush currentPresentation'
	category: 'Presentation'!

!PresentationNavigator methodsFor: 'accessing'!

currentPresentation: aPresentation
	currentPresentation := aPresentation.
!

currentPresentation
	^  currentPresentation ifNil: [currentPresentation := Presentation concretePresentations first new].
!

style
	^ '
#navigator {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 50%;
    margin-left: -150px;
    padding: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    background: #333;
    opacity: 0.3;
    color: #eee;
}

#navigator a {
    font-weight: bold;
    color: #eee;
    text-decoration: none;
    cursor: pointer;
    padding: 0 2px;
    font-size: 14px;
}

#navigator:hover {
    opacity: 0.8;
}
'
! !

!PresentationNavigator methodsFor: 'callbacks'!

selectPresentation: aPresentationClass
	self currentPresentation: aPresentationClass new.
	self renderCurrentPresentation.
!

selectPresentationNamed: aString
	|presentationClass|
	presentationClass :=  (Smalltalk current at: aString).
	presentationClass ifNotNil: [ self selectPresentation: presentationClass ].
!

previousSlide
	self currentPresentation previousSlide
!

nextSlide
	self currentPresentation nextSlide
!

reload
	self currentPresentation: self currentPresentation class new.
	self renderCurrentPresentation.
! !

!PresentationNavigator methodsFor: 'hash'!

checkHash
	self currentPresentation checkHash
!

checkHashChange
	(window jQuery: window) bind: 'hashchange' do: [self checkHash]
! !

!PresentationNavigator methodsFor: 'keybindings'!

setKeybindings
	(window jQuery: document) keyup: [:e || node |
		node := e target nodeName asLowercase.
		(node = 'textarea' or: [node = 'input']) ifFalse: [
			e keyCode = 39 ifTrue: [self nextSlide].
			e keyCode = 37 ifTrue: [self previousSlide]]]
! !

!PresentationNavigator methodsFor: 'rendering'!

renderToolsOn: html
	html a 
		with: 'IDE';
		onClick: [TabManager current open].
	html a
		with: 'Reload';
		onClick: [self reload].
	html a
		with: '←';
		onClick: [self previousSlide].
	html a
		with: '→';
		onClick: [self nextSlide].
!

renderPresentationSelectOn: html
	|presentationSelect|
	presentationSelect := html select.
	presentationSelect
		onChange: [self  selectPresentationNamed:  presentationSelect asJQuery val];
		with: [	Presentation concretePresentationsDo: [:aPresentationClass |   
                                                              							html option
                                                              								value: aPresentationClass name;
                                                              								with: aPresentationClass title ] ].
!

open
	(window jQuery: document)  ready: [
          	self 
          		appendToJQuery: 'body' asJQuery;
          		setKeybindings;
          		checkHashChange.
        ].
!

renderOn: html
	html style
		type: 'text/css';
		with: self style.
	html div
		id: 'navigator';
		with: [	self
					renderToolsOn: html;
					renderPresentationSelectOn: html	].

	presentationBrush := html div 
							id: 'presentation';
							yourself.

	self renderCurrentPresentation.
!

renderCurrentPresentation
	presentationBrush contents: [:html |
        	self currentPresentation
                                     	renderOn: html;
                                     	checkHash.
        ].
! !

!PresentationNavigator class methodsFor: 'initialize'!

initialize
	^ self open
!

open
	^ self new open
! !

