Smalltalk createPackage: 'Examples'!
Object subclass: #AH
	instanceVariableNames: ''
	package: 'Examples'!

!AH methodsFor: 'async halting'!

asyncBlockHalt
	""
	self createBlock valueWithTimeout:200
!

create2LevelBlock
	""
	|outerLocal|
	outerLocal:='I am not in your call stack but in your outer context.'.
	^[|c|
		[|cc|
			c:=1.
			cc:=c*2.
			self halt.
			c:=c+5.
		] valueWithTimeout:200
	]
!

createBlock
	""
	|outerLocal|
	outerLocal:='I am not in your call stack but in your outer context.'.
	^ [|c|
		c:=1.
		self halt.
		c:=c+5.
	  ]
!

localAsyncBlockHalt
	""
	|outerLocal|
	outerLocal:='I am not in your call stack but in your outer context.'.
	[|c|
		c:=1.
		self halt.
		c:=c+5] valueWithTimeout:200
!

localBlockHalt
	""
	|theBlock|

	theBlock:=self createBlock.
	
	theBlock value
!

twoLevelAsyncBlockHalt
	""
	self create2LevelBlock valueWithTimeout:200
! !

Widget subclass: #Counter
	instanceVariableNames: 'count header'
	package: 'Examples'!
!Counter commentStamp!
This is a trivial Widget example mimicking the classic Counter example in Seaside.
In order to play with it, just evaluate the doit below in a workspace.
Then take a look in the HTML document above the IDE.

		Counter tryExample!

!Counter methodsFor: 'actions'!

decrease
	count := count - 1.
	header contents: [ :html | html with: count asString ]
!

increase
	count := count + 1.
	header contents: [ :html | html with: count asString ]
! !

!Counter methodsFor: 'initialization'!

initialize
	super initialize.
	count := 0
! !

!Counter methodsFor: 'rendering'!

renderOn: html
	header := html h1
		with: count asString;
		yourself.
	html button
		with: '++';
		onClick: [ self increase ].
	html button
		with: '--';
		onClick: [ self decrease ]
! !

!Counter class methodsFor: 'example'!

tryExample
	"In order to play with the Counter, just select the
	doit below and press the Do it button. Then take a
	look in the HTML document above the IDE."

	"Counter tryExample"
		self new appendToJQuery: 'body' asJQuery
! !

