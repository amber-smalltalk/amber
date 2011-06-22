Widget subclass: #Counter
	instanceVariableNames: 'count, header'
	category: 'Examples'!

!Counter methodsFor: 'actions'!

increase
    count := count + 1.
    header contents: [:html | html with: count asString]
!

decrease
    count := count - 1.
    header contents: [:html | html with: count asString]
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
	onClick: [self increase].
    html button
	with: '--';
	onClick: [self decrease]

! !

Widget subclass: #Tetris
	instanceVariableNames: 'renderingContext, timer, speed, score, rows, movingPiece'
	category: 'Examples'!

!Tetris methodsFor: 'accessing'!

width
	^self class width
!

height
	^self class height
!

squares
	^self class squares
!

gluePiece: aPiece
	aPiece glueOn: self
	
!

rows
	"An array of rows. Each row is a collection of points."
	^rows
!

addRow: aCollection
	self rows add: aCollection
! !

!Tetris methodsFor: 'actions'!

startNewGame
	self newGame.
	timer ifNotNil: [timer clearInterval].
	timer := [self nextStep] valueWithInterval: speed
!

nextStep
	movingPiece ifNil: [self newPiece].
	(movingPiece canMoveIn: self)
		ifTrue: [movingPiece position: movingPiece position + (0@1)]
		ifFalse: [self newPiece].
	self redraw
	
!

redraw
	renderingContext clearRectFrom: 0@ self width to: 0@ self height.
	self 
		drawMap;
		drawPiece
!

drawMap
	renderingContext 
		fillStyle: '#fafafa';
		fillRectFrom: 0@0 to: self width@self height.
	renderingContext 
		lineWidth: 0.5;
		strokeStyle: '#999'.
	0 to: self class squares x do: [:each | | x |
		x := each * self class squareSize.
		self drawLineFrom: x@0 to: x@self height].
	0 to: self class squares y do: [:each | | y |
		y := each * self class squareSize.
		self drawLineFrom: 0@y to: self width@y].
!

drawLineFrom: aPoint to: anotherPoint
	renderingContext 
		beginPath;
		moveTo: aPoint;
		lineTo: anotherPoint;
		stroke
!

newGame
	rows := #().
	movingPiece := nil.
	speed := 200.
	score := 0
!

newPiece
	movingPiece := TetrisPiece atRandom
!

drawRows
	self rows do: [:each |].
	movingPiece ifNotNil: [movingPiece drawOn: renderingContext]
!

drawPiece
	movingPiece ifNotNil: [
		movingPiece drawOn: renderingContext]
! !

!Tetris methodsFor: 'initialization'!

initialize
	super initialize.
	self newGame
! !

!Tetris methodsFor: 'rendering'!

renderOn: html
	html div
		class: 'tetris';
		with: [
			html h3 with: 'Tetris'.
			self renderCanvasOn: html.
			self renderButtonsOn: html]
!

renderCanvasOn: html
	| canvas |
	canvas := html canvas.
	canvas at: 'width' put: self width asString.
	canvas at: 'height' put: self height asString.
	renderingContext := CanvasRenderingContext tagBrush: canvas.
	self redraw
!

renderButtonsOn: html
	html div 
		class: 'tetris_buttons';
		with: [
			html button
				with: 'New game';
				onClick: [self startNewGame].
			html button
				with: 'play/pause';
				onClick: [self update]]
! !

!Tetris class methodsFor: 'accessing'!

squareSize
	^22
!

width
	^self squareSize * (self squares x)
!

height
	^self squareSize * (self squares y)
!

squares
	^10@15
! !

Widget subclass: #TetrisPiece
	instanceVariableNames: 'rotation, position'
	category: 'Examples'!

!TetrisPiece methodsFor: 'accessing'!

rotation
	^rotation ifNil: [rotation := 1]
!

rotation: aNumber
	rotation := aNumber
!

position
	^position ifNil: [(Tetris squares x / 2) -1 @ 0]
!

position: aPoint
	^position := aPoint
!

bounds
	self subclassResponsibility
!

color
	^'#afa'
!

height
	^2
! !

!TetrisPiece methodsFor: 'drawing'!

drawOn: aRenderingContext
	aRenderingContext fillStyle: self color.
	self bounds do: [:each |
		aRenderingContext 
			fillRectFrom: each + self position* Tetris squareSize to: 1@1 * Tetris squareSize;
			strokeStyle: '#999';
			lineWidth: 2;
			strokeRectFrom: each + self position* Tetris squareSize to: 1@1 * Tetris squareSize]
! !

!TetrisPiece methodsFor: 'testing'!

canMove
	^self position y < (Tetris squares y - self height)
!

canMoveIn: aTetris
	^self position y < (aTetris squares y - self height)
! !

!TetrisPiece class methodsFor: 'instance creation'!

atRandom
	^(self subclasses at: self subclasses size atRandom) new
! !

TetrisPiece subclass: #TetrisPieceO
	instanceVariableNames: ''
	category: 'Examples'!

!TetrisPieceO methodsFor: 'accessing'!

bounds
	^Array new
		add: 0@0;
		add: 0@1;
		add: 1@0;
		add: 1@1;
		yourself
! !

TetrisPiece subclass: #TetrisPieceL
	instanceVariableNames: ''
	category: 'Examples'!

!TetrisPieceL methodsFor: 'accessing'!

bounds
	^Array new
		add: 0@0;
		add: 0@1;
		add: 0@2;
		add: 1@2;
		yourself
!

color
	^'#ffa'
!

height
	^3
! !

TetrisPiece subclass: #TetrisPieceJ
	instanceVariableNames: ''
	category: 'Examples'!

!TetrisPieceJ methodsFor: 'accessing'!

color
	^'#aaf'
!

bounds
	^Array new
		add: 1@0;
		add: 1@1;
		add: 1@2;
		add: 0@2;
		yourself
!

height
	^3
! !

TetrisPiece subclass: #TetrisPieceI
	instanceVariableNames: ''
	category: 'Examples'!

!TetrisPieceI methodsFor: 'accessing'!

color
	^'#faa'
!

bounds
	^Array new
		add: 0@0;
		add: 0@1;
		add: 0@2;
		add: 0@3;
		yourself
!

height
	^4
! !

TetrisPiece subclass: #TetrisPieceT
	instanceVariableNames: ''
	category: 'Examples'!

!TetrisPieceT methodsFor: 'accessing'!

bounds
	^Array new
		add: 0@0;
		add: 1@0;
		add: 2@0;
		add: 1@1;
		yourself
!

color
	^'#aaf'
! !

