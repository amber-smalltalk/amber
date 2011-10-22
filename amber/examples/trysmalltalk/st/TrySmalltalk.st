Widget subclass: #TrySmalltalkWidget
	instanceVariableNames: 'workspace contents header'
	category: 'TrySmalltalk'!

!TrySmalltalkWidget methodsFor: 'accessing'!

workspace
	^ workspace ifNil: [
          	workspace := SourceArea new]
!

contents: aString
	self workspace val: aString
!

contents
	^self workspace val
!

setTitle: aString
	header contents: [:html | html with: aString]
! !

!TrySmalltalkWidget methodsFor: 'rendering'!

renderOn: html
	html div 
		class: 'profStef'; 
		with: [header := html h2];
		with: [self workspace renderOn: html];
		with: [self renderButtonsOn: html].
          ProfStef default 
		widget: self;
		showCurrentLesson
!

renderButtonsOn: html
    html button
	with: 'DoIt';
	title: 'ctrl+d';
	onClick: [self workspace doIt].
    html button
	with: 'PrintIt';
	title: 'ctrl+p';
	onClick: [self workspace printIt].
    html button
	with: 'InspectIt';
	title: 'ctrl+i';
	onClick: [self workspace inspectIt]
! !

!TrySmalltalkWidget class methodsFor: 'initialize'!

open
	self new appendToJQuery: 'body' asJQuery.
! !

Object subclass: #AbstractTutorial
	instanceVariableNames: ''
	category: 'TrySmalltalk'!
!AbstractTutorial commentStamp!
Parent class of all ProfStef tutorials.

To create your own tutorial:
- subclass AbstractTutorial
- implement a few methods which returns a Lesson instance
- implement tutorial which returns a Collection of selectors to the methods you've created.!

!AbstractTutorial methodsFor: 'accessing'!

indexOfLesson: aSelector
	^self tableOfContents indexOf: aSelector.
!

tableOfContents
^ #(
  'welcome'
  'testLesson'
  'theEnd'
)
!

lessonAt: anInteger
	| lessonSelector |
	lessonSelector := self tableOfContents at: anInteger.
	^ self perform: lessonSelector.
!

size
	^ self tableOfContents size
! !

!AbstractTutorial methodsFor: 'pages'!

welcome
	^ Lesson
		title: 'Welcome' 
		contents: '"Hi, this is a test tutorial."'
!

testLesson
	^ Lesson
		title: 'Test Lesson' 
		contents: '"This lesson is a test"'
!

theEnd
	^ Lesson
		title: 'The End' 
		contents: '"And that''d be pretty much it :)"'
! !

Object subclass: #Lesson
	instanceVariableNames: 'title contents'
	category: 'TrySmalltalk'!

!Lesson methodsFor: 'accessing'!

contents
	^ contents ifNil: [contents := '']
!

contents: aString
	contents := aString
!

title: aString
	title := aString
!

title
	^ title ifNil: [title := '']
! !

!Lesson class methodsFor: 'instance creation'!

title: aTitle contents: someContents
	^ (self new)
		title: aTitle;
		contents: someContents
! !

Object subclass: #TutorialPlayer
	instanceVariableNames: 'tutorialPosition tutorial'
	category: 'TrySmalltalk'!
!TutorialPlayer commentStamp!
I can navigate through an AbstractTutorial subclass. With #next and #previous you can go forward and backward through the tutorial.!

!TutorialPlayer methodsFor: 'accessing'!

currentLesson
	^ self tutorial lessonAt: self tutorialPosition.
!

size
	^ self tutorial size
!

tutorial
	^ tutorial  ifNil: [tutorial := SmalltalkSyntaxTutorial new]
!

tutorial: aTutorial
	tutorial := aTutorial
!

tutorialPosition 
	^ tutorialPosition  ifNil: [
		self rewind.
		tutorialPosition.
	].
!

tutorialPosition: aTutorialPosition 
	tutorialPosition := aTutorialPosition
! !

!TutorialPlayer methodsFor: 'navigation'!

first
	self rewind.
	^ self currentLesson
!

last
	tutorialPosition := self size.
	^ self currentLesson
!

next
	self tutorialPosition < self size
		ifTrue: [tutorialPosition := tutorialPosition + 1].
	^ self currentLesson
!

previous
	tutorialPosition >  1 ifTrue: [tutorialPosition := tutorialPosition  - 1].
	^ self currentLesson
!

rewind
	tutorialPosition := 1.
! !

Object subclass: #ProfStef
	instanceVariableNames: 'tutorialPlayer widget'
	category: 'TrySmalltalk'!
!ProfStef commentStamp!
A ProfStef is the Smalltalk teacher. To start the tutorial, evaluate:
ProfStef go.

To go to the next lesson evaluate:
ProfStef next.

To execute your own tutorial:
ProfStef goOn: MyOwnTutorial

To see a table of contents with all defined tutorials:
ProfStef contents!

!ProfStef methodsFor: 'accessing'!

tutorialPlayer
	^ tutorialPlayer ifNil: [tutorialPlayer := TutorialPlayer new]
!

progress
	^ '(', self tutorialPositionString, '/', self tutorialSizeString, ')'.
!

tutorialPositionString
	^ self tutorialPlayer tutorialPosition asString.
!

tutorialSizeString
	^ self tutorialPlayer size asString
!

widget: aWidget
	widget := aWidget
!

showCurrentLesson
	| lesson |
	lesson := self tutorialPlayer currentLesson.
	widget contents: lesson contents.
	widget setTitle: lesson title , ' ' , self progress.
! !

!ProfStef methodsFor: 'navigation'!

first
	self tutorialPlayer first.
	^ self showCurrentLesson.
!

next
	self tutorialPlayer next.
	^ self showCurrentLesson.
!

previous
	self tutorialPlayer previous.
	^ self showCurrentLesson.
! !

ProfStef class instanceVariableNames: 'instance'!

!ProfStef class methodsFor: 'initialize'!

default 
	^ instance ifNil: [instance := self new]
! !

!ProfStef class methodsFor: 'navigation'!

first
	^ self default first.
!

previous
	^ self default previous.
!

next
	^ self default next.
!

go
	self first.
! !

AbstractTutorial subclass: #SmalltalkSyntaxTutorial
	instanceVariableNames: ''
	category: 'TrySmalltalk'!
!SmalltalkSyntaxTutorial commentStamp!
The default ProfStef tutorial to learn Smalltalk syntax!

!SmalltalkSyntaxTutorial methodsFor: 'contents'!

tableOfContents
^ #(	'welcome'
	'doingVSPrinting'
	'printing'

	'basicTypesNumbers'
	"'basicTypesCharacters'"
	'basicTypesString'
	"'basicTypesSymbol'"
	'basicTypesArray'
	'basicTypesDynamicArray'

	'messageSyntaxUnary'
	'messageSyntaxBinary'
	'messageSyntaxKeyword'
	'messageSyntaxExecutionOrder'
	'messageSyntaxExecutionOrderParentheses'
	'mathematicalPrecedence'
	'messageSyntaxCascade'
	'messageSyntaxCascadeShouldNotBeHere'

	'blocks'
	'blocksAssignation'
	'conditionals'
	'loops'
	'iterators'

	'instanciation'

	'reflection'
	'reflectionContinued'
	"'pharoEnvironment'"

	"'debugger'"
	'theEnd' )
! !

!SmalltalkSyntaxTutorial methodsFor: 'pages'!

basicTypesArray
	^ Lesson
title: 'Basic types: Array' 
contents: 
'"Literal arrays are created at parse time:"

#(1 2 3).

#( 1 2 3 #(4 5 6)) size.

#(1 2 4) isEmpty.

#(1 2 3) first.

#(''hello'' ''Javascript'') at: 2 put: ''Smalltalk''; yourself.

ProfStef next.'
!

basicTypesCharacters
	^ Lesson
title: 'Basic types: Characters' 
contents: 
'"A Character can be instantiated using $ operator:"

$A.

$A class.

$B charCode.

Character cr.

Character space.

"You can print all 256 characters of the ASCII extended set:"

Character allByteCharacters.

ProfStef next.'
!

basicTypesDynamicArray
	^ Lesson
title: 'Basic types: Dynamic Array' 
contents: 
'"Dynamic Arrays are created at execution time:"

{ (2+3) . (6*6) }.

{ (2+3) . (6*6) . ''hello'', '' Stef''} size.


{ ProfStef } first next.'
!

basicTypesNumbers
	^ Lesson
title: 'Basic types: Numbers' 
contents: 
'"You now know how to execute Smalltalk code. 

Now let''s talk about basic objects.

1, 2, 100, 2/3 ... are Numbers, and respond to many messages evaluating mathematical expressions.
Evaluate these ones:"

2.

(1/3).

(1/3) + (4/5).

(18/5) rounded.

1 class.

1 negated.

1 negated negated.

(1 + 3) odd.

ProfStef next.'
!

basicTypesString
	^ Lesson
title: 'Basic types: Strings' 
contents: 
'"A String is a collection of characters. Use single quotes to create a String object. Print these expressions:"

''ProfStef''.

''ProfStef'' size.

''abc'' asUppercase.

''Hello World'' reversed. 

"You can access each character using at: message"

''ProfStef'' at: 1.

"String concatenation uses the comma operator:"

''ProfStef'', '' is cool''.

ProfStef next.'
!

basicTypesSymbol
	^ Lesson
title: 'Basic types: Symbols' 
contents: 
'"A Symbol is a String which is guaranteed to be globally unique. 

There is one and only one Symbol #ProfStef. There may be several ''ProfStef'' String objects.

(Message == returns true if the two objects are the SAME)"

''ProfStef'' asSymbol.

#ProfStef asString.

(2 asString) == (2 asString).

(2 asString) asSymbol == (2 asString) asSymbol.


(Smalltalk at: #ProfStef) next.'
!

blocks
	^ Lesson
title: 'Blocks' 
contents: 
'"Cascade is cool !! Let''s talk about blocks.

Blocks are anonymous methods that can be stored into variables and executed on demand.

Blocks are delimited by square brackets: []"

[Transcript open].

"does not open a Transcript because the block is not executed.

Here is a block that adds 2 to its argument (its argument is named x):"

[:x | x+2].

"We can execute a block by sending it value messages."

[:x | x+2] value: 5.

[Transcript open] value.

[:x | x+2] value: 10.

[:x :y| x + y] value:3 value:5.

[ProfStef next] value.'
!

blocksAssignation
	^ Lesson
title: 'Block assignation' 
contents: 
'"Blocks can be assigned to a variable then executed later.

Note that |b| is the declaration of a variable named ''b'' and that '':='' assigns a value to a variable.

Select the three lines then Print It:"

|b|
b := [:x | x+2].
b value: 12.


ProfStef next.'
!

conditionals
	^ Lesson
title: 'Conditionals' 
contents: 
'"Conditionals are just messages sent to Boolean objects"

1 < 2
  ifTrue: [100]
  ifFalse: [42].

"Here the message is ifTrue:ifFalse

Try this:"

Transcript open.

3 > 10 
	ifTrue: [Transcript show: ''maybe there''''s a bug ....'']
	ifFalse: [Transcript show: ''No : 3 is less than 10''].

3 = 3 ifTrue: [ProfStef next].'.
!

debugger
	^ Lesson
title: 'Debugger' 
contents: '"The Debugger may be the most famous tool of Smalltalk environments. It will open as soon as an unmanaged Exception occurs. 

The following code will open the debugger.

***This should be rethought completely***"


 '
!

doingVSPrinting 
	^ Lesson
title: 'Doing VS Printing: Doing' 
contents: 
'"Cool !! (I like to say Cooool :) ). You''ve just executed a Smalltalk expression. More precisely, you sent the message ''next'' to
ProfStef class (it''s me !!).

Note you can run this tutorial again by evaluating: ''ProfStef go''. 
''ProfStef previous'' returns to the previous lesson.

You can also Do It using the keyboard shortcut ''CTRL d''

Try to evaluate this expression:"

window alert: ''hello world!!''.

"Then go to the next lesson:"

ProfStef next.'
!

instanciation
	^ Lesson
title: 'Instanciation' 
contents: 
'"Objects are instances of their class. Usually, we send the message #new to a class for creating an instance of this class.

For example, let''s create an instance of the class Array:"

Array new
	add: ''Some text'';
	add: 3.;
	yourself.

"See the array we''ve created? Actually, #(''Some text'' 3) is just a shorthand for instantiating arrays."

"If we use a variable to keep track of this object, we''ll be able to do stuff with it."

"The following code must be ran all at one, as the ''anArray'' variable will cease to exist once the execution finishes:"

|anArray|

anArray := Array new
	add: ''Some text'';
	add: 3;
	yourself;

Transcript show: anArray; cr.

anArray remove: 3.

Transcript show: anArray; cr.

anArray add: ''Some more text!!''.

Transcript show: anArray; cr.
	
"I''ll put myself in an instance of a class named Dictionary and go to the next lesson:"

((Dictionary new add: (''move on!!'' -> ProfStef)) at: ''move on!!'') next'
!

iterators
	^ Lesson
title: 'Iterators' 
contents: 
'"The message do: is sent to a collection of objects (Array, Dictionary, String, etc), evaluating the block for each element.

Here we want to print all the numbers on the Transcript (a console)"

#(11 38 3 -2 10) do: [:each |
     Transcript show: each printString; cr].

"Some other really nice iterators"

#(11 38 3 -2 10) collect: [:each | each negated].

#(11 38 3 -2 10) collect: [:each | each odd].

#(11 38 3 -2 10) select: [:each | each odd].

#(11 38 3 -2 10) select: [:each | each > 10].

#(11 38 3 -2 10) reject: [:each | each > 10].

#(11 38 3 -2 10) 
     do: [:each | Transcript show: each printString]
     separatedBy: [Transcript show: ''.''].


(Smalltalk current classes select: [:eachClass | eachClass name = ''ProfStef'']) do: [:eachProfstef | eachProfstef next].'
!

loops
	^ Lesson
title: 'Loops' 
contents: 
'"Loops are high-level collection iterators, implemented as regular methods."

"Basic loops:
  to:do:
  to:by:do"

1 to: 100 do:
  [:i | Transcript show: i asString; cr ].

1 to: 100 by: 3 do: [:i | Transcript show: i asString; cr].

100 to: 0 by: -2 do: 
    [:i | Transcript show: i asString; cr].

1 to: 1 do: [:i | ProfStef next].'
!

mathematicalPrecedence
	^ Lesson
title: 'Mathematical precedence'
contents: 
'"Traditional precedence rules from mathematics do not follow in Smalltalk."

2 * 10 + 2.

"Here the message * is sent to 2, which answers 20, then 20 receive the message +

Remember that all messages always follow a simple left-to-right precedence rule, * without exceptions *."

2 + 2 * 10.

2 + (2 * 10).

8 - 5 / 2.

(8 - 5) / 2.

8 - (5 / 2).

ProfStef next.'
!

messageSyntaxBinary
	^ Lesson
title: 'Message syntax: Binary messages' 
contents: 
'"Binary messages have the following form:
    anObject + anotherObject"

3 * 2.

Date today year = 2011.

false | false.

true & true.

true & false.

10 @ 100.

10 <= 12.

''ab'', ''cd''.

ProfStef next.'
!

messageSyntaxCascade
	^ Lesson
title: 'Message syntax: Cascade' 
contents: 
'"; is the cascade operator. It''s useful to send message to the SAME receiver
Open a Transcript (console):"

Transcript open.

"Then:"

Transcript show: ''hello''.
Transcript show: ''Smalltalk''.
Transcript cr.

"is equivalent to:"

Transcript 
	   show: ''hello'';
	   show: ''Smalltalk'' ;
	   cr.

"You can close the development tools by clicking on the red circle with a cross at the bottom left of the website.
Try to go to the next lesson with a cascade of two ''next'' messages:"

ProfStef'.
!

messageSyntaxCascadeShouldNotBeHere
	^ Lesson
title: 'Lost ?' 
contents: 
'"Hey, you should not be here !!!! 

Go back and use a cascade !!"

ProfStef previous.'.
!

messageSyntaxExecutionOrder
	^ Lesson
title: 'Message syntax: Execution order' 
contents: 
'"Unary messages are executed first, then binary messages and finally keyword messages:
    Unary > Binary > Keywords"

2.5 + 3.8 rounded.

3 max: 2 + 2.
  
(0@0) class.

0@0 x: 100.

(0@0 x: 100) class.

"Between messages of similar precedence, expressions are executed from left to right"

-12345 negated asString reversed.

ProfStef next.'
!

messageSyntaxExecutionOrderParentheses
	^ Lesson
title: 'Message syntax: Parentheses'
contents: 
'"Use parentheses to change order of evaluation"

(2.5 + 3.8) rounded.

(3 max: 2) + 2.

ProfStef next.'
!

messageSyntaxKeyword
	^ Lesson
title: 'Message syntax: Keyword messages' 
contents: 
'"Keyword Messages are messages with arguments. They have the following form:
    anObject akey: anotherObject akey2: anotherObject2"

''Web development is a good deal of pain'' copyFrom: 1 to: 30

"The message is copyFrom:to: sent to the String ''Web development is a good deal of pain''"

1 max: 3.

Array with: ''hello'' with: 2 with: Smalltalk.

"The message is with:with:with: implemented on class Array. Note you can also write"

Array
	with: ''Hi there!!''
	with: 2
	with: Smalltalk.
	
ProfStef perform: ''next''.'
!

messageSyntaxUnary
	^ Lesson
title: 'Message syntax: Unary messages' 
contents: 
'"Messages are sent to objects. There are three types of message: Unary, Binary and Keyword.

Unary messages have the following form:
    anObject aMessage 

You''ve already sent unary messages. For example:"

1 class.

false not.

Date today.

Number pi.

"And of course: "

ProfStef next.'
!

pharoEnvironment
	^ Lesson
title: 'Pharo environment' 
contents: 
'"Every Smalltalk system is full of objects. There are windows, text, numbers, dates, colors, points and much more. You can interact with objects in a much more direct way than is possible with other programming languages.

Every object understands the message ''explore''. As a result, you get an Explorer window that shows details about the object."

Date today explore.

"This shows that the date object consists of a point in time (start) and a duration (one day long)."

ProfStef explore.

"You see, ProfStef class has a lot of objects. Let''s take a look at my code:"

ProfStef browse.

ProfStef next.'
!

printing 
	^ Lesson
title: 'Doing VS Printing: Printing' 
contents: 
'"Now you''re a Do It master !! Let''s talk about printing. It''s a Do It which prints the result next to the expression you''ve selected.
For example, select the text below, and click on ''PrintIt'':"

1 + 2.

"As with ''DoIt'', there is also a shortcut to execute this command.

Try CTRL-p on the following expressions:"

Date today.

"The result is selected, so you can erase it using the backspace key. Try it !!"

Date today asDateString.

Date today asTimeString.

ProfStef next.'
!

reflection
	^ Lesson
title: 'Reflection' 
contents: 
'"You can inspect and change the system at runtime.

Take a look at the source code of the method #and: of the class Boolean:"

(Boolean methodDictionary at: ''and:'') source.

"Or all the methods it sends:"

(Boolean methodDictionary at: ''and:'') messageSends.

"Here''s all the methods I implement:"

ProfStef methodDictionary.

"Let''s create a new method to go to the next lesson:"

|newMethod|
newMethod := Compiler new load: ''goToNextLesson ProfStef next.'' forClass: ProfStef.
ProfStef class addCompiledMethod: newMethod

"Wow!! I can''t wait to use my new method!!"

ProfStef goToNextLesson.'
!

reflectionContinued
	^ Lesson
title: 'Reflection continued' 
contents: 
'"So cool, isn''t it ?  Before going further, let''s remove this method:"

ProfStef class methodAt: #goToNextLesson.

ProfStef class removeCompiledMethod: (ProfStef class methodAt: #goToNextLesson).

ProfStef class methodAt: #goToNextLesson.


"Then move forward:"

ProfStef perform:#next'
!

theEnd
	^ Lesson
title: 'Tutorial done !!' 
contents: 
'"This tutorial is done. Enjoy programming Smalltalk with Amber. 

You can run this tutorial again by evaluating: ProfStef go.

See you soon !!"
'
!

welcome
	^ Lesson
title: 'Welcome' 
contents: 
' "Hello!! I''m Professor Stef. 

You must want me to help you learn Smalltalk.

So let''s go to the first lesson.  Select the text below and click on the ''DoIt'' button"

ProfStef next.'
! !

