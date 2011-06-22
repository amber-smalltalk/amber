Object subclass: #PPParser
	instanceVariableNames: 'memo'
	category: 'Parser'!

!PPParser methodsFor: 'accessing'!

memo
	^memo

! !

!PPParser methodsFor: 'initialization'!

initialize
	memo := Dictionary new

! !

!PPParser methodsFor: 'operations'!

flatten
	^PPFlattenParser on: self

!

withSource
	^PPSourceParser on: self

!

==> aBlock
	^PPActionParser on: self block: aBlock

!

, aParser
	^PPSequenceParser with: self with: aParser

!

/ aParser
	^PPChoiceParser with: self with: aParser

!

plus
	^PPRepeatingParser on: self min: 1

!

star
	^PPRepeatingParser on: self min: 0

!

not
	^PPNotParser on: self

!

optional
	^self / PPEpsilonParser new

!

memoizedParse: aStream
	| start end node |
	start := aStream position.
	^self memo at: start 
	    ifPresent: [:value |
		aStream position: (self memo at: start) second.
		value first]
	    ifAbsent: [
		node := self parse: aStream.
		end := aStream position.
		self memo at: start put: (Array with: node with: end).
		node]

! !

!PPParser methodsFor: 'parsing'!

parse: aStream
	self subclassResponsibility

!

parseAll: aStream
	| result |
	result := (PPSequenceParser with: self with: PPEOFParser new) memoizedParse: aStream.
	^result isParseFailure 
	    ifTrue: [self error: (result messageFor: aStream contents)]
	    ifFalse: [result first]

! !

PPParser subclass: #PPEOFParser
	instanceVariableNames: ''
	category: 'Parser'!

!PPEOFParser methodsFor: 'parsing'!

parse: aStream
	^aStream atEnd 
	    ifFalse: [
		PPFailure new reason: 'EOF expected' at: aStream position]
	    ifTrue: [nil]

! !

PPParser subclass: #PPAnyParser
	instanceVariableNames: ''
	category: 'Parser'!

!PPAnyParser methodsFor: 'parsing'!

parse: aStream
	^aStream atEnd
	    ifTrue: [PPFailure new
			 reason: 'did not expect EOF' at: aStream position]
	    ifFalse: [aStream next]

! !

PPParser subclass: #PPEpsilonParser
	instanceVariableNames: ''
	category: 'Parser'!

!PPEpsilonParser methodsFor: 'parsing'!

parse: aStream
	^nil

! !

PPParser subclass: #PPStringParser
	instanceVariableNames: 'string'
	category: 'Parser'!

!PPStringParser methodsFor: 'accessing'!

string
	^string

!

string: aString
	string := aString

! !

!PPStringParser methodsFor: 'parsing'!

parse: aStream
	| position result |
	position := aStream position.
	result := aStream next: self string size.
	^result = self string
	    ifTrue: [result]
	    ifFalse: [
		aStream position: position.
		PPFailure new reason: 'Expected ', self string, ' but got ', (result at: position) printString; yourself]

! !

PPParser subclass: #PPCharacterParser
	instanceVariableNames: 'regexp'
	category: 'Parser'!

!PPCharacterParser methodsFor: 'accessing'!

string: aString
	regexp := RegularExpression fromString: '[', aString, ']'

! !

!PPCharacterParser methodsFor: 'parsing'!

parse: aStream
	^(aStream peek notNil and: [self match: aStream peek])
	    ifTrue: [aStream next]
	    ifFalse: [PPFailure new reason: 'Could not match' at: aStream position]

! !

!PPCharacterParser methodsFor: 'private'!

match: aString
	^aString match: regexp

! !

PPParser subclass: #PPListParser
	instanceVariableNames: 'parsers'
	category: 'Parser'!

!PPListParser methodsFor: 'accessing'!

parsers
	^parsers ifNil: [#()]

!

parsers: aCollection
	parsers := aCollection

! !

!PPListParser methodsFor: 'copying'!

copyWith: aParser
	^self class withAll: (self parsers copyWith: aParser)

! !

!PPListParser class methodsFor: 'instance creation'!

withAll: aCollection
	    ^self new
		parsers: aCollection;
		yourself

!

with: aParser with: anotherParser
	    ^self withAll: (Array with: aParser with: anotherParser)

! !

PPListParser subclass: #PPSequenceParser
	instanceVariableNames: ''
	category: 'Parser'!

!PPSequenceParser methodsFor: 'copying'!

, aRule
	^self copyWith: aRule

! !

!PPSequenceParser methodsFor: 'parsing'!

parse: aStream
	| start elements element |
	start := aStream position.
	elements := #().
	self parsers 
	    detect: [:each |
		element := each memoizedParse: aStream.
		elements add: element.
		element isParseFailure] 
	    ifNone: [].
	^element isParseFailure
	    ifFalse: [elements]
	    ifTrue: [aStream position: start. element]

! !

PPListParser subclass: #PPChoiceParser
	instanceVariableNames: ''
	category: 'Parser'!

!PPChoiceParser methodsFor: 'copying'!

/ aRule
	^self copyWith: aRule

! !

!PPChoiceParser methodsFor: 'parsing'!

parse: aStream
	| result |
	self parsers
    	    detect: [:each |
		result := each memoizedParse: aStream.
		result isParseFailure not]
	    ifNone: [].
	^result

! !

PPParser subclass: #PPDelegateParser
	instanceVariableNames: 'parser'
	category: 'Parser'!

!PPDelegateParser methodsFor: 'accessing'!

parser
	^parser

!

parser: aParser
	parser := aParser

! !

!PPDelegateParser methodsFor: 'parsing'!

parse: aStream
	^self parser memoizedParse: aStream

! !

!PPDelegateParser class methodsFor: 'instance creation'!

on: aParser
	    ^self new
		parser: aParser;
		yourself

! !

PPDelegateParser subclass: #PPAndParser
	instanceVariableNames: ''
	category: 'Parser'!

!PPAndParser methodsFor: 'parsing'!

parse: aStream
	^self basicParse: aStream

!

basicParse: aStream
	| element position |
	position := aStream position.
	element := self parser memoizedParse: aStream.
	aStream position: position.
	^element

! !

PPAndParser subclass: #PPNotParser
	instanceVariableNames: ''
	category: 'Parser'!

!PPNotParser methodsFor: 'parsing'!

parse: aStream
	| element |
	element := self basicParse: aStream.
	^element isParseFailure 
	    ifTrue: [nil]
	    ifFalse: [PPFailure reason: element at: aStream position]

! !

PPDelegateParser subclass: #PPActionParser
	instanceVariableNames: 'block'
	category: 'Parser'!

!PPActionParser methodsFor: 'accessing'!

block
	^block

!

block: aBlock
	block := aBlock

! !

!PPActionParser methodsFor: 'parsing'!

parse: aStream
	| element |
	element := self parser memoizedParse: aStream.
	^element isParseFailure
	    ifFalse: [self block value: element]
	    ifTrue: [element]

! !

!PPActionParser class methodsFor: 'instance creation'!

on: aParser block: aBlock
	    ^self new
		parser: aParser;
		block: aBlock;
		yourself

! !

PPDelegateParser subclass: #PPFlattenParser
	instanceVariableNames: ''
	category: 'Parser'!

!PPFlattenParser methodsFor: 'parsing'!

parse: aStream
	| start element stop |
	start := aStream position.
	element := self parser memoizedParse: aStream.
	^element isParseFailure
	    ifTrue: [element]
	    ifFalse: [aStream collection 
		copyFrom: start + 1 
		to: aStream position]

! !

PPDelegateParser subclass: #PPSourceParser
	instanceVariableNames: ''
	category: 'Parser'!

!PPSourceParser methodsFor: 'parsing'!

parse: aStream
	| start element stop result |
	start := aStream position.
	element := self parser memoizedParse: aStream.
	^element isParseFailure
		ifTrue: [element]
		ifFalse: [result := aStream collection copyFrom: start + 1 to: aStream position.
			Array with: element with: result].

! !

PPDelegateParser subclass: #PPRepeatingParser
	instanceVariableNames: 'min'
	category: 'Parser'!

!PPRepeatingParser methodsFor: 'accessing'!

min
	^min

!

min: aNumber
	min := aNumber

! !

!PPRepeatingParser methodsFor: 'parsing'!

parse: aStream
	| start element elements failure |
	start := aStream position.
	elements := Array new.
	[(elements size < self min) and: [failure isNil]] whileTrue: [
	    element := self parser memoizedParse: aStream.
	    element isParseFailure
			ifFalse: [elements addLast: element]
			ifTrue: [aStream position: start.
				 failure := element]].
	^failure ifNil: [
	    [failure isNil] whileTrue: [
			element := self parser memoizedParse: aStream.
	 		element isParseFailure
				ifTrue: [failure := element]
				ifFalse: [elements addLast: element]].
				elements]
		ifNotNil: [failure].

! !

!PPRepeatingParser class methodsFor: 'instance creation'!

on: aParser min: aNumber
	    ^self new
		parser: aParser;
		min: aNumber;
		yourself

! !

Object subclass: #PPFailure
	instanceVariableNames: 'position, reason'
	category: 'Parser'!

!PPFailure methodsFor: 'accessing'!

position
	^position ifNil: [0]

!

position: aNumber
	position := aNumber

!

reason
	^reason ifNil: ['']

!

reason: aString
	reason := aString

!

reason: aString at: anInteger
	self 
	    reason: aString; 
	    position: anInteger

! !

!PPFailure methodsFor: 'testing'!

isParseFailure
	^true

! !

!PPFailure class methodsFor: 'instance creation'!

reason: aString at: anInteger
	    ^self new
		reason: aString at: anInteger;
		yourself

! !

Object subclass: #SmalltalkParser
	instanceVariableNames: ''
	category: 'Parser'!

!SmalltalkParser methodsFor: 'grammar'!

parser
	| method expression separator comment ws identifier keyword className string symbol number literalArray variable reference classReference literal ret methodParser expressionParser keyword unarySelector binarySelector keywordPattern unaryPattern binaryPattern assignment temps blockParamList block expression expressions subexpression statements sequence operand unaryMessage unarySend unaryTail binaryMessage binarySend binaryTail keywordMessage keywordSend keywordPair cascade message jsStatement |
	
	separator := (String cr, String space, String lf, String tab) asChoiceParser.
	comment := ('"' asCharacterParser, ('"' asParser not, PPAnyParser new) star, '"' asCharacterParser) flatten.

	ws := (separator / comment) star.
	
	identifier := ('a-z' asCharacterParser, 'a-zA-Z0-9' asCharacterParser star) flatten.

	keyword := (identifier, ':' asParser) flatten.

	className := ('A-Z' asCharacterParser, 'a-zA-Z0-9' asCharacterParser star) flatten.

	string := '''' asParser, ('''''' asParser / ('''' asParser not, PPAnyParser new)) star flatten, '''' asParser
		==> [:node | ValueNode new value: ((node at: 2) replace: '''''' with: '''')].

	symbol := '#' asParser, 'a-zA-Z0-9' asCharacterParser plus flatten
		==> [:node | ValueNode new value: node second].

	number := ('0-9' asCharacterParser plus, ('.' asParser, '0-9' asCharacterParser plus) optional) flatten
		==> [:node | ValueNode new value: node asNumber].

	literal := PPDelegateParser new.

	literalArray := '#(' asParser, (ws, literal, ws) star, ')' asParser
		==> [:node | ValueNode new value: (Array withAll: (node second collect: [:each | each second value]))].

	variable := identifier ==> [:token | VariableNode new value: token].

	classReference := className ==> [:token | ClassReferenceNode new value: token].

	reference := variable / classReference.

	binarySelector := '+*/=><,@%~-' asCharacterParser plus flatten.

	unarySelector := identifier.

	keywordPattern := (ws, keyword, ws, identifier) plus
		==> [:nodes | Array
				  with: ((nodes collect: [:each | each at: 2]) join: '')
				  with: (nodes collect: [:each | each at: 4])].

	binaryPattern := ws, binarySelector, ws, identifier
		==> [:node | Array with: node second with: (Array with: node fourth)].

	unaryPattern := ws, unarySelector
		==> [:node | Array with: node second with: Array new].
	
	expression := PPDelegateParser new.

	expressions := expression, ((ws, '.' asParser, ws, expression) ==> [:node | node fourth]) star
		==> [:node || result |
		    result := Array with: node first.
		    node second do: [:each | result add: each].
		    result].

	assignment := reference, ws, ':=' asParser, ws, expression
		==> [:node | AssignmentNode new left: node first; right: (node at: 5)].

	ret := '^' asParser, ws, expression, ws, '.' asParser optional
	    ==> [:node | ReturnNode new
			     addNode: node third;
			     yourself].

	temps := '|' asParser, (ws, identifier) star, ws, '|' asParser
		==> [:node | node second collect: [:each | each second]].

	blockParamList := (':' asParser, identifier, ws) plus, '|' asParser
		==> [:node | node first collect: [:each | each second]].

	subexpression := '(' asParser, ws, expression, ws, ')' asParser
		==> [:node | node third].

	statements := (ret ==> [:node | Array with: node]) / (expressions, ws, '.' asParser, ws, ret ==> [:node | node first add: (node at: 5); yourself]) / (expressions , '.' asParser optional ==> [:node | node first]).

	sequence := temps optional, ws, statements optional, ws
		==> [:node | SequenceNode new
				 temps: node first;
				 nodes: node third;
				 yourself].

	block := '[' asParser, ws, blockParamList optional, ws, sequence optional, ws, ']' asParser
		==> [:node |
		    BlockNode new
			parameters: node third;
			addNode: (node at: 5) asBlockSequenceNode].

	operand := literal / reference / subexpression.

	literal parser: number / string / literalArray / symbol / block.

	unaryMessage := ws, unarySelector, ':' asParser not
		==> [:node | SendNode new selector: node second].

	unaryTail := PPDelegateParser new.
	unaryTail parser: (unaryMessage, unaryTail optional
			       ==> [:node |
				   node second
					   ifNil: [node first]
					   ifNotNil: [node second valueForReceiver: node first]]).

	unarySend := operand, unaryTail optional
		==> [:node |
		    node second 
			ifNil: [node first]
			ifNotNil: [node second valueForReceiver: node first]].

	binaryMessage := ws, binarySelector, ws, (unarySend / operand)
		==> [:node |
		    SendNode new
			selector: node second;
			arguments: (Array with: node fourth)].

	binaryTail := PPDelegateParser new.
	binaryTail parser: (binaryMessage, binaryTail optional
				    ==> [:node |
					node second 
					    ifNil: [node first]
					    ifNotNil: [ node second valueForReceiver: node first]]).

	binarySend := unarySend, binaryTail optional
		==> [:node |
		    node second
			ifNil: [node first]
			ifNotNil: [node second valueForReceiver: node first]].

	keywordPair := keyword, ws, binarySend.

	keywordMessage := (ws, keywordPair) plus
		==> [:nodes |
		    SendNode new
			selector: ((nodes collect: [:each | each second first]) join: '');
			arguments: (nodes collect: [:each | each second third])].

	keywordSend := binarySend, keywordMessage
		==> [:node |
		    node second valueForReceiver: node first].

	message := binaryMessage / unaryMessage / keywordMessage.

	cascade := (keywordSend / binarySend), (ws, ';' asParser, message) plus
		==> [:node |
		    node first cascadeNodeWithMessages: 
			(node second collect: [:each | each third])].

	jsStatement := '{' asParser, ws, string, ws, '}' asParser
	    ==> [:node | JSStatementNode new
			     source: node third;
			     yourself].

	expression parser: assignment / cascade / keywordSend / binarySend / jsStatement.

	method := (ws, (keywordPattern / binaryPattern / unaryPattern), ws, sequence optional, ws) withSource
	    ==> [:node |
		MethodNode new
		    selector: node first second first;
		    arguments: node first second second;
		    addNode: node first fourth;
		    source: node second;
		    yourself].
	
	^method, PPEOFParser new ==> [:node | node first]

! !

!SmalltalkParser methodsFor: 'parsing'!

parse: aStream
	^self parser parse: aStream

! !

!SmalltalkParser class methodsFor: 'instance creation'!

parse: aStream
	    ^self new
		parse: aStream

! !

Object subclass: #Chunk
	instanceVariableNames: 'contents'
	category: 'Parser'!

!Chunk methodsFor: 'accessing'!

contents
	^contents ifNil: ['']

!

contents: aString
	contents := aString

! !

!Chunk methodsFor: 'testing'!

isEmptyChunk
	^false

!

isInstructionChunk
	^false

! !

Chunk subclass: #InstructionChunk
	instanceVariableNames: ''
	category: 'Parser'!

!InstructionChunk methodsFor: 'testing'!

isInstructionChunk
	^true

! !

Chunk subclass: #EmptyChunk
	instanceVariableNames: ''
	category: 'Parser'!

!EmptyChunk methodsFor: 'testing'!

isEmptyChunk
	^true

! !

Object subclass: #ChunkParser
	instanceVariableNames: 'parser, separator, eof, ws, chunk, emptyChunk, instructionChunk'
	category: 'Parser'!

!ChunkParser methodsFor: ''!

instructionChunk
	^instructionChunk ifNil: [
	    instructionChunk := self ws, '!' asParser, self chunk
	    ==> [:node | InstructionChunk new contents: node last contents]]

! !

!ChunkParser methodsFor: 'accessing'!

parser
	^parser ifNil: [
	    parser := self instructionChunk / self emptyChunk / self chunk / self eof]

!

eof
	^eof ifNil: [eof := self ws, PPEOFParser new ==> [:node | nil]]

!

separator
	^separator ifNil: [separator := (String cr, String space, String lf, String tab) asChoiceParser]

!

ws
	^ws ifNil: [ws := self separator star]

!

chunk
	^chunk ifNil: [chunk := self ws, ('!!' asParser / ('!' asParser not, PPAnyParser new)) plus flatten, '!' asParser ==> [:node | Chunk new contents: (node second replace: '!!' with: '!')]]

!

emptyChunk
	^emptyChunk ifNil: [emptyChunk := self separator plus, '!' asParser, self ws ==> [:node | EmptyChunk new]]

! !

Object subclass: #Importer
	instanceVariableNames: 'chunkParser'
	category: 'Parser'!

!Importer methodsFor: 'accessing'!

chunkParser
	^chunkParser ifNil: [chunkParser := ChunkParser new parser]

! !

!Importer methodsFor: 'fileIn'!

import: aStream
	aStream atEnd ifFalse: [
	    | nextChunk |
	    nextChunk := self chunkParser parse: aStream.
	    nextChunk ifNotNil: [
		nextChunk isInstructionChunk 
		    ifTrue: [(Compiler new loadExpression: nextChunk contents)
					 scanFrom: aStream]
		    ifFalse: [Compiler new loadExpression: nextChunk contents].
		self import: aStream]]

! !

Object subclass: #Exporter
	instanceVariableNames: ''
	category: 'Parser'!

!Exporter methodsFor: 'fileOut'!

exportCategory: aString
	| stream |
	stream := '' writeStream.
	(Smalltalk current classes 
	    select: [:each | each category = aString])
	    do: [:each | stream nextPutAll: (self export: each)].
	self exportCategoryExtensions: aString on: stream.
	^stream contents
!

export: aClass
	| stream |
	stream := '' writeStream.
	self exportDefinitionOf: aClass on: stream.
	self exportMethodsOf: aClass on: stream.
	self exportMetaDefinitionOf: aClass on: stream.
	self exportMethodsOf: aClass class on: stream.
	^stream contents

! !

!Exporter methodsFor: 'private'!

exportDefinitionOf: aClass on: aStream
	aStream 
	    nextPutAll: 'smalltalk.addClass(';
	    nextPutAll: '''', (self classNameFor: aClass), ''', ';
	    nextPutAll: 'smalltalk.', (self classNameFor: aClass superclass);
	    nextPutAll: ', ['.
	aClass instanceVariableNames 
	    do: [:each | aStream nextPutAll: '''', each, '''']
	    separatedBy: [aStream nextPutAll: ', '].
	aStream	
	    nextPutAll: '], ''';
	    nextPutAll: aClass category, '''';
	    nextPutAll: ');'.
	aClass comment notEmpty ifTrue: [
	    aStream 
	    	lf;
		nextPutAll: 'smalltalk.';
		nextPutAll: (self classNameFor: aClass);
		nextPutAll: '.comment=';
		nextPutAll: 'unescape(''', aClass comment escaped, ''')'].
	aStream lf

!

exportMetaDefinitionOf: aClass on: aStream
	aClass class instanceVariableNames isEmpty ifFalse: [
	    aStream 
		nextPutAll: 'smalltalk.', (self classNameFor: aClass class);
		nextPutAll: '.iVarNames = ['.
	    aClass class instanceVariableNames
		do: [:each | aStream nextPutAll: '''', each, '''']
		separatedBy: [aStream nextPutAll: ','].
	    aStream nextPutAll: '];', String lf]

!

exportMethodsOf: aClass on: aStream
	aClass methodDictionary values do: [:each |
		(each category match: '^\*') ifFalse: [
			self exportMethod: each of: aClass on: aStream]].
	aStream lf
!

classNameFor: aClass
	^aClass isMetaclass
	    ifTrue: [aClass instanceClass name, '.klass']
	    ifFalse: [
		aClass isNil
		    ifTrue: ['nil']
		    ifFalse: [aClass name]]

!

exportMethod: aMethod of: aClass on: aStream
	aStream 
		nextPutAll: 'smalltalk.addMethod(';lf;
		nextPutAll: '''', aMethod selector asSelector, ''',';lf;
		nextPutAll: 'smalltalk.method({';lf;
		nextPutAll: 'selector: ''', aMethod selector, ''',';lf;
		nextPutAll: 'category: ''', aMethod category, ''',';lf;
		nextPutAll: 'fn: ', aMethod fn compiledSource, ',';lf;
		nextPutAll: 'source: unescape(''', aMethod source escaped, '''),';lf;
		nextPutAll: 'messageSends: ', aMethod messageSends asJavascript, ',';lf;
		nextPutAll: 'referencedClasses: ['.
	    		aMethod referencedClasses 
				do: [:each | aStream nextPutAll: 'smalltalk.', (self classNameFor: each)]
				separatedBy: [aStream nextPutAll: ','].
	aStream
		nextPutAll: ']';lf;
		nextPutAll: '}),';lf;
		nextPutAll: 'smalltalk.', (self classNameFor: aClass);
		nextPutAll: ');';lf;lf
!


exportCategoryExtensions: aString on: aStream
	Smalltalk current classes, (Smalltalk current classes collect: [:each | each class]) do: [:each |
		each methodDictionary values do: [:method |
			method category = ('*', aString) ifTrue: [
				self exportMethod: method of: each on: aStream]]]
! !

Exporter subclass: #ChunkExporter
	instanceVariableNames: ''
	category: 'Parser'!

!ChunkExporter methodsFor: 'not yet classified'!

exportDefinitionOf: aClass on: aStream
	"Chunk format."

	aStream 
	    nextPutAll: (self classNameFor: aClass superclass);
	    nextPutAll: ' subclass: #', (self classNameFor: aClass); lf;
	    nextPutAll: '	instanceVariableNames: '''.
	aClass instanceVariableNames 
	    do: [:each | aStream nextPutAll: each]
	    separatedBy: [aStream nextPutAll: ', '].
	aStream	
	    nextPutAll: ''''; lf;
	    nextPutAll: '	category: ''', aClass category, '''!'; lf.
 	aClass comment notEmpty ifTrue: [
	    aStream 
		nextPutAll: '!', (self classNameFor: aClass), ' commentStamp!';lf;
		nextPutAll: aClass comment escaped, '!';lf].
	aStream lf

!

exportMethod: aMethod of: aClass on: aStream
	aStream 
		lf; lf; nextPutAll: aMethod source; lf;
		nextPutAll: '!'
!

exportMethodsOf: aClass on: aStream

    | methodsByCategory |
    methodsByCategory := Dictionary new.
    aClass methodDictionary values do: [:m |
	(methodsByCategory at: m category ifAbsentPut: [Array new])
 		add: m]. 
    aClass protocols do: [:category |       
	aStream
		nextPutAll: '!', (self classNameFor: aClass);
		nextPutAll: ' methodsFor: ''', category, '''!'.
    	(methodsByCategory at: category) do: [:each |
		self exportMethod: each of: aClass on: aStream].
	aStream nextPutAll: ' !'; lf; lf]
!

exportMetaDefinitionOf: aClass on: aStream

	aClass class instanceVariableNames isEmpty ifFalse: [
		aStream 
		    nextPutAll: (self classNameFor: aClass class);
		    nextPutAll: ' instanceVariableNames: '''.
		aClass class instanceVariableNames 
		    do: [:each | aStream nextPutAll: each]
		    separatedBy: [aStream nextPutAll: ', '].
		aStream	
		    nextPutAll: '''!'; lf; lf]
!

classNameFor: aClass
	^aClass isMetaclass
	    ifTrue: [aClass instanceClass name, ' class']
	    ifFalse: [
		aClass isNil
		    ifTrue: ['nil']
		    ifFalse: [aClass name]]
! !

