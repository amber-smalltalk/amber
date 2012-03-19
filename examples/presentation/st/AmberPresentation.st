Smalltalk current createPackage: 'AmberPresentation' properties: #{}!
Slide subclass: #STICSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!STICSlide methodsFor: 'accessing'!

codeSnippet
	self subclassResponsibility
!

imageUrl: aFilenameString
	^'stic2012/images/', aFilenameString
! !

!STICSlide methodsFor: 'rendering'!

renderSnippet: aString on: html
	(SourceArea new 
			renderOn: html;
			editor)  setValue: aString.
!

renderCodeSnippetOn: html
	(SourceArea new 
			renderOn: html;
			editor)  setValue: self codeSnippet.
! !

Presentation subclass: #STIC2012Presentation
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!STIC2012Presentation methodsFor: 'accessing'!

description
	^'STIC 2012'
!

author
	^'JohnnyT'
!

email
	^'johnnyt@xan.do'
!

url
	^'http://amber-lang.net'
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
    width: 700px;
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

.slide.blue3d {
  background: #feffff;
  background: -moz-linear-gradient(top, #feffff 0%, #d2ebf9 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#feffff), color-stop(100%,#d2ebf9));
  background: -webkit-linear-gradient(top, #feffff 0%,#d2ebf9 100%);
  background: -o-linear-gradient(top, #feffff 0%,#d2ebf9 100%);
  background: -ms-linear-gradient(top, #feffff 0%,#d2ebf9 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#feffff", endColorstr="#d2ebf9",GradientType=0 );
  background: linear-gradient(top, #feffff 0%,#d2ebf9 100%);
}


.slide.red3d {
  background: #febbbb;
  background: -moz-linear-gradient(top, #febbbb 0%, #fe9090 71%, #ff5c5c 95%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#febbbb), color-stop(71%,#fe9090), color-stop(95%,#ff5c5c));
  background: -webkit-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);
  background: -o-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);
  background: -ms-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#febbbb", endColorstr="#ff5c5c",GradientType=0 );
  background: linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);
}


.slide.green3d {
  background: #cdeb8e;
  background: -moz-linear-gradient(top, #cdeb8e 0%, #a5c956 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#cdeb8e), color-stop(100%,#a5c956));
  background: -webkit-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);
  background: -o-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);
  background: -ms-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#cdeb8e", endColorstr="#a5c956",GradientType=0 );
  background: linear-gradient(top, #cdeb8e 0%,#a5c956 100%);
}

@-webkit-keyframes rotate-horizontal {
	0% { -webkit-transform: perspective(1000px) rotateY(-10deg);}
	100% { -webkit-transform: perspective(1000px) rotateY(10deg);}
}

.animate p{
-webkit-animation: rotate-horizontal 2s infinite alternate ease-in-out;
}

#FOSDEMAmberBackend img {
	margin: 5px;
	-webkit-animation: rotate-horizontal 2s infinite alternate ease-in-out;
}

.slide#FOSDEMContributionsSlide {
    background: white url("esug2011/images/asterix.png") 30px 130px no-repeat;
}

.slide#FOSDEMContributionsSlide .section {
    margin-left: 250px;
    margin-top: 200px;
    font-family: "Droid Sans";
    font-size: 26px;
    font-weight: bold;
}


.slide#ide {
    background: black url("esug2011/images/ide_star_wars.png") center center no-repeat;
}


.tweet {
	background-color: #aaa;
	color: black;
	padding: 10px;
	border-radius: 10px;
	border: 5px solid #eee;
	margin: 10px;
}

.tweet img {
	vertical-align: top;
	margin-right: 10px;
}

.tweet span:first-child {
	float: right;
}
'
!

slideClasses
^ {
	STICIntroSlide.
	STICAboutSlide.
	SubWarsSlide.
	SubWars2009Slide.
	SubWars2010EarlySlide.
	SubWars2010LateSlide.
	SubWars2011EarlySlide.
	SubWars2011LateSlide.
	AmberNutshellSlide.
	AmberFeaturesSlide.
	IDESlide.
	SmalltalkHeartJSSlide.
	AmberJSMappingSlide.
	JSAmberMappingSlide.
	AmberCLISlide.
	FOSDEMAmberBackend.
	
	WorkflowsSlide.
	WorkflowProblemSlide.
	WorkflowFailSlide.
	WorkflowSolutionSlide.
	WorkflowWinningSlide.
	
	ExamplesSlide.
	FOSDEMJSPlayGroundSlide.
	FOSDEMTwitter.
	FOSDEMCanvasSlide.
	ExampleTodoMVCSlide.
	ExampleAmberSiteSlide.
	ExampleSubWarsSlide.

	ThankYouSlide
}

"
	ExampleAceEditorSlide.
	GoogleMapsSlide.
"
! !

!STIC2012Presentation class methodsFor: 'testing'!

isConcrete
	^true
!

title
	^'STIC'
! !

STICSlide subclass: #STICIntroSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!STICIntroSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html img src: (self imageUrl: 'amber.png').
		html p: self presentation description.
		html p: self presentation author.
          	html p: self presentation email]
!

id
	^'Intro'
! !

STICSlide subclass: #SubWarsSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!SubWarsSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1: 'SubWars'.
		html p: 'A GPS based submarine game'.
		html p: 'Best side-project I have ever worked on'.
		html p: 'Not much functionality due to too many complete rewrites']
!

backgroundColor
	^'#fff'
! !

STICSlide subclass: #STICAboutSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!STICAboutSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1 with: 'About this presentation'.
		html p with: 'This presentation is written entirely in Amber.'.
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
				onClick: [Browser openOn: STICSlide].
			html with: ' to browse and edit the source code.']]
!

id
	^'About'
! !

STICSlide subclass: #GoogleMapsSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!GoogleMapsSlide methodsFor: 'accessing'!

codeSnippet
^'|url map|
url := ''//maps.googleapis.com/maps/api/js?sensor=false&callback=init''.
window at: ''init'' put: [
	map := google maps Map
		newValue: (document getElementById: ''map_canvas'')
		value: #{ ''zoom'' -> 8 } ].
jQuery getScript: url.
'.
! !

!GoogleMapsSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1: 'Google Maps Example'.
		self renderCodeSnippetOn: html.
		html div id: 'map_canvas'; style: 'width:200px; height: 50px;']
! !

STICSlide subclass: #AmberNutshellSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!AmberNutshellSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1 with: 'Amber in a nutshell'.
		html h2 with: 'Amber is an implementation of Smalltalk'.
		html h2 with: 'Amber runs on top of the JavaScript runtime'.
		html h2 with: 'Amber is an opensource project (MIT)'.
		html h2 class: 'fancy'; with: 'Amber is cool!!']
!

backgroundColor
	^'#fff'
! !

STICSlide subclass: #AmberFeaturesSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!AmberFeaturesSlide methodsFor: 'rendering'!

renderSlideOn: html
	html h1 with: 'Amber features'.
	html ul with: [
		html li with: 'Amber is (mostly) written in itself, including the parser & compiler'.
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

STICSlide subclass: #SubWars2009Slide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!SubWars2009Slide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1: 'SubWars - 2009'.
		html h1: 'Ruby on Rails'.]
! !

STICSlide subclass: #SubWars2010EarlySlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!SubWars2010EarlySlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1: 'SubWars - Early 2010'.
		html h1: 'MagLev / Sinatra'.]
! !

STICSlide subclass: #SubWars2010LateSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!SubWars2010LateSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1: 'SubWars - Late 2010'.
		html h1: 'Pharo / GemStone / Seaside ?'.]
! !

STICSlide subclass: #SubWars2011EarlySlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!SubWars2011EarlySlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1: 'SubWars - Early 2011'.
		html h1: 'Intoduced CoffeeScript'.]
! !

STICSlide subclass: #SubWars2011LateSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!SubWars2011LateSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1: 'SubWars - Late 2011'.
		html h1: 'Found Amber'.]
! !

STICSlide subclass: #AmberJSMappingSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!AmberJSMappingSlide methodsFor: 'accessing'!

backgroundColor
	^'#08C'
! !

!AmberJSMappingSlide methodsFor: 'rendering'!

renderSlideOn: html
	html h1 with: [
		html with: 'Smalltalk '.
		html span class: 'red'; with: '♥'.
		html with: ' JavaScript'].
	html h2 with: 'Amber maps one to one with the JavaScript equivalent:'.
	html ul with: [
		html li with: 'String ⇔ String'.
		html li with: 'Number ⇔ Number'.
		html li with: 'BlockClosure ⇔ function'.
		html li with: 'Dictionary ⇔ Object'.
		html li with: 'Error ⇔ Error'.
		html li with: 'etc.']
! !

STICSlide subclass: #JSAmberMappingSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!JSAmberMappingSlide methodsFor: 'accessing'!

backgroundColor
	^'#08C'
! !

!JSAmberMappingSlide methodsFor: 'rendering'!

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
			with: [html code with: '$(''foo'').css(''background'', ''red'')'];
			with: ' becomes ';
			with: [html br];
			with: [html code with: '''foo'' asJQuery css: ''background'' color: ''red''']]
! !

STICSlide subclass: #SmalltalkHeartJSSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!SmalltalkHeartJSSlide methodsFor: 'accessing'!

cssClass
	^'slide transparent'
!

backgroundColor
	^'#08C'
! !

!SmalltalkHeartJSSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1 with: [
			html with: 'Smalltalk '.
			html span class: 'red'; with: '♥'.
			html with: ' JavaScript']]
! !

STICSlide subclass: #AmberCLISlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!AmberCLISlide methodsFor: 'rendering'!

backgroundColor
	^'#0A1'
!

renderSlideOn: html
	html h1 with: [
		html with: 'Amber and '.
		html span class: 'blue'; with: 'the command line'].

	html h2 with: 'amberc - a fairly elaborate bash script that:'.

	html ul with: [
		html li with: 'Uses Node.js to run the Amber Compiler'.
		html li with: 'Compiles .st files to .js'.
		html li with: 'Links .js files into a single one'.
		html li with: 'Adds class initilization and/or call to main'.
		html li with: 'Optionally runs Google Closure compiler']
! !

STICSlide subclass: #WorkflowProblemSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!WorkflowProblemSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1: 'The usual client-side development workflow'.
		html p: 'Edit HTML in text editor'.
		html p: 'Switch to browser and refresh'.
		html p: 'Edit CSS in text editor'.
		html p: 'Switch to browser and refresh'.
		html p: 'Edit JavaScript in text editor'.
		html p: 'Switch to browser and refresh'.
		]
! !

STICSlide subclass: #WorkflowSolutionSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!WorkflowSolutionSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1: 'A better client-side development workflow'.
		html p: 'Edit HTML in the browser'.
		html p: 'Edit CSS in the browser'.
		html p: 'Edit JavaScript in the browser'.
		]
! !

STICSlide subclass: #WorkflowFailSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!WorkflowFailSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1: 'Workflow FAIL'.
		html img src: (self imageUrl: 'fail.jpeg').]
!

backgroundColor
	^'#c33'
! !

STICSlide subclass: #WorkflowWinningSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!WorkflowWinningSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1: 'Workflow WINNING'.
		html img src: (self imageUrl: 'winning.jpeg').]
!

backgroundColor
	^'#3c3'
! !

STICSlide subclass: #ExamplesSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!ExamplesSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1: 'Examples']
!

backgroundColor
	^'#fff'
! !

STICSlide subclass: #WorkflowsSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!WorkflowsSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1: 'Client-side development workflows']
!

backgroundColor
	^'#fff'
! !

STICSlide subclass: #ExampleTodoMVCSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!ExampleTodoMVCSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html img src: (self imageUrl: 'todomvc.png').
		html p: [ html a href: 'http://addyosmani.github.com/todomvc/'; target: '_blank'; with: 'Open TodoMVC Site' ].
		html p: [ html a href: '/examples/todomvc/index.html'; target: '_blank'; with: 'Open TodoMVC Example' ].
	]
! !

STICSlide subclass: #ExampleAmberSiteSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!ExampleAmberSiteSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html img src: (self imageUrl: 'amber-site.png').
		html p: [ html a href: 'http://amber.herokuapp.com'; target: '_blank'; with: 'Open Amber Site' ].
	]
! !

STICSlide subclass: #ExampleSubWarsSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!ExampleSubWarsSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html img src: (self imageUrl: 'subwars.png').
		html p: [ html a href: 'http://subwars.com'; target: '_blank'; with: 'Open SubWars Site' ].
	]
! !

STICSlide subclass: #ExampleAceEditorSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!ExampleAceEditorSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html img src: (self imageUrl: 'ace.png').
	].
! !

STICSlide subclass: #ThankYouSlide
	instanceVariableNames: ''
	category: 'AmberPresentation'!

!ThankYouSlide methodsFor: 'rendering'!

renderSlideOn: html
	html div class: 'section center'; with: [
		html h1: 'Thank You'.
		html p with: [
			html a href: 'http://amber-lang.net'; with: 'amber-lang.net'].
		html p with: [
			html a href: 'https://github.com/NicolasPetton/amber'; with: 'github.com/NicolasPetton/amber'].
		html p with: [
			html a href: 'http://groups.google.com/group/amber-lang'; with: 'groups.google.com/group/amber-lang']]
! !

