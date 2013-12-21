Smalltalk current createPackage: 'Helios-Helpers'!
Object subclass: #HLClassifierLink
	instanceVariableNames: 'next method'
	package: 'Helios-Helpers'!
!HLClassifierLink commentStamp!
I am an abstract class implementing a link in a `chain of responsibility` pattern.

y subclasses are in charge of classifying a method according to multiple strategies!

!HLClassifierLink methodsFor: 'accessing'!

method
	^ method
!

method: anObject
	method := anObject.
	self next
		ifNotNil: [ :nextLink | nextLink method: anObject ]
!

next
	^ next
!

next: anObject
	next := anObject
! !

!HLClassifierLink methodsFor: 'private'!

doClassify
	self subclassResponsibility
! !

!HLClassifierLink methodsFor: 'protocol'!

classify
	self next ifNil: [ ^ false ].
	
	^ self doClassify
		ifTrue: [ true ]
		ifFalse: [ self next execute ]
! !

HLClassifierLink subclass: #HLAccessorClassifierLink
	instanceVariableNames: ''
	package: 'Helios-Helpers'!
!HLAccessorClassifierLink commentStamp!
I am a classifier checking the method selector matches an instance variable name!

!HLAccessorClassifierLink methodsFor: 'private'!

doClassify
	| names selector |
	
	names := method methodClass allInstanceVariableNames.
	selector := method selector.
	
	(selector last = ':')
		ifTrue: [ "selector might be a setter"
			selector := selector allButLast ].
	
	(names includes: selector)
		ifFalse: [ ^ false ].
		
	method protocol: 'accessing'.
	^ true.
! !

HLClassifierLink subclass: #HLImplementorClassifierLink
	instanceVariableNames: ''
	package: 'Helios-Helpers'!
!HLImplementorClassifierLink commentStamp!
I am a classifier checking the other implementations of the same selector and choose the protocol the most populated!

!HLImplementorClassifierLink methodsFor: 'private'!

doClassify
	| currentClass |
	currentClass := method methodClass.
	
	[ currentClass superclass isNil ] whileFalse: [
		currentClass := currentClass superclass.
		(currentClass includesSelector: method selector)
			ifTrue: [ 
				method protocol: (currentClass >> method selector) protocol.
				^ true ]].
	
	^ false.
! !

HLClassifierLink subclass: #HLPrefixClassifierLink
	instanceVariableNames: 'prefixMapping'
	package: 'Helios-Helpers'!
!HLPrefixClassifierLink commentStamp!
I am classifier checking the method selector to know if it begins with a known prefix!

!HLPrefixClassifierLink methodsFor: 'initialization'!

buildPrefixDictionary
	prefixMapping := Dictionary new.
	prefixMapping 
		at: 'test' put: 'tests';
	 	at: 'bench' put: 'benchmarking';
	 	at: 'copy' put: 'copying';
		at: 'initialize' put: 'initialization';
		at: 'accept' put: 'visitor';
		at: 'visit' put: 'visitor';
		at: 'signal' put: 'signalling';
		at: 'parse' put: 'parsing';
		at: 'add' put: 'adding';
		at: 'is' put: 'testing';
		at: 'as' put: 'converting';
		at: 'new' put: 'instance creation'.
!

initialize
	super initialize.

	self buildPrefixDictionary
! !

!HLPrefixClassifierLink methodsFor: 'private'!

doClassify
	prefixMapping keysAndValuesDo: [ :prefix :protocol |
		(method selector beginsWith: prefix)
			ifTrue: [
				method protocol: protocol.
				^ true ]].
	^ false.
! !

HLClassifierLink subclass: #HLSuperClassClassifierLink
	instanceVariableNames: ''
	package: 'Helios-Helpers'!
!HLSuperClassClassifierLink commentStamp!
I am a classifier checking the superclass chain to find a matching selector!

!HLSuperClassClassifierLink methodsFor: 'private'!

doClassify
	| protocolBag methods protocolToUse counter |
	
	protocolBag := Dictionary new.
	methods := HLReferencesModel new implementorsOf: method selector.
	methods
		ifEmpty: [ ^ false ]
		ifNotEmpty: [
			methods 
				do: [ :aMethod || protocol |
					protocol := aMethod method protocol.
					(method methodClass = aMethod methodClass)
						ifFalse: [
						((protocol first = '*') or: [ protocol = method defaultProtocol ])
							ifFalse: [ 
								protocolBag 
									at: protocol 
									put: (protocolBag at: protocol ifAbsent: [ 0 ]) + 1 ] ] ] ].
			
	protocolBag ifEmpty: [ ^ false ].
	protocolToUse := nil.
	counter := 0.
	protocolBag keysAndValuesDo: [ :key :value | value > counter 
		ifTrue: [
			counter := value.
			protocolToUse := key ] ].
	method protocol: protocolToUse.
	^ true
! !

Object subclass: #HLGenerationOutput
	instanceVariableNames: 'sourceCodes protocol targetClass'
	package: 'Helios-Helpers'!
!HLGenerationOutput commentStamp!
I am a simple data object used to store the result of a generation process!

!HLGenerationOutput methodsFor: 'accessing'!

protocol
	^ protocol
!

protocol: aString
	protocol := aString
!

sourceCodes
	^ sourceCodes
!

sourceCodes: aCollection
	sourceCodes := aCollection
!

targetClass
	^ targetClass
!

targetClass: aClass
	targetClass := aClass
! !

!HLGenerationOutput methodsFor: 'initialization'!

initialize
	super initialize.
	
	sourceCodes := OrderedCollection new
! !

!HLGenerationOutput methodsFor: 'protocol'!

addSourceCode: aString
	sourceCodes add: aString
!

compile
	sourceCodes do: [ :methodSourceCode |
		(targetClass includesSelector: methodSourceCode selector)
			ifFalse: [ 
				targetClass 
					compile: methodSourceCode sourceCode
					protocol: protocol ] ]
! !

HLGenerationOutput subclass: #HLGenerationOutputWithIndex
	instanceVariableNames: 'index'
	package: 'Helios-Helpers'!
!HLGenerationOutputWithIndex commentStamp!
I am a simple data object used to store the result of a generation process.

In addition of my super class, I have an index where to put the cursor at the end of the process for the first method created (aka. the first in `sourceCodes`)!

!HLGenerationOutputWithIndex methodsFor: 'accessing'!

index
	^ index
!

index: anIndex
	index := anIndex
! !

Object subclass: #HLGenerator
	instanceVariableNames: 'output'
	package: 'Helios-Helpers'!
!HLGenerator commentStamp!
I am the abstract super class of the generators.

My main method is `generate` which produce an `output` object!

!HLGenerator methodsFor: 'accessing'!

class: aClass
	output targetClass: aClass
!

output
	^ output
! !

!HLGenerator methodsFor: 'initialization'!

initialize
	super initialize.
	
	output := HLGenerationOutput new
! !

!HLGenerator methodsFor: 'protocol'!

generate
	output targetClass ifNil: [ self error: 'class should not be nil'].
! !

HLGenerator subclass: #HLAccessorsGenerator
	instanceVariableNames: ''
	package: 'Helios-Helpers'!
!HLAccessorsGenerator commentStamp!
I am a generator used to compile the getters/setters of a class!

!HLAccessorsGenerator methodsFor: 'double-dispatch'!

accessorProtocolForObject
	output protocol: 'accessing'
!

accessorsSourceCodesForObject
	| sources |
	
	sources := OrderedCollection new.
	output targetClass instanceVariableNames sorted do: [ :each | 
		sources 
			add: (self getterFor: each);
			add: (self setterFor: each) ].
	output sourceCodes: sources
! !

!HLAccessorsGenerator methodsFor: 'private'!

getterFor: anInstanceVariable
	^ HLMethodSourceCode new
		selector:anInstanceVariable;
		sourceCode: (String streamContents: [ :stream |
		stream << anInstanceVariable.
		stream cr tab.
		stream << '^ ' << anInstanceVariable ])
!

setterFor: anInstanceVariable
	^ HLMethodSourceCode new
		selector: anInstanceVariable, ':';
		sourceCode: (String streamContents: [ :stream |
		stream << anInstanceVariable << ': anObject'.
		stream cr tab.
		stream << anInstanceVariable << ' := anObject' ])
! !

!HLAccessorsGenerator methodsFor: 'protocol'!

generate
	super generate.
	
	output targetClass 
		accessorsSourceCodesWith: self;
		accessorProtocolWith: self
! !

HLGenerator subclass: #HLInitializeGenerator
	instanceVariableNames: ''
	package: 'Helios-Helpers'!
!HLInitializeGenerator commentStamp!
I am used to double-dispatch the `initialize` method(s) generation.

Usage:

    ^ HLInitializeGenerator new
        class: aClass;
        generate;
        output

I am a disposable object!

!HLInitializeGenerator methodsFor: 'double-dispatch'!

initializeForObject
	output addSourceCode: self initializeCodeForObject
!

initializeIndexForObject
	output index: self computeIndexForObject
!

initializeProtocolForObject
	output protocol: self retrieveProtocolForObject
! !

!HLInitializeGenerator methodsFor: 'initialization'!

initialize
	super initialize.
	
	output := HLGenerationOutputWithIndex new
! !

!HLInitializeGenerator methodsFor: 'private'!

computeIndexForObject
	| instVars headerSize firstInstVarSize |
	
	"32 is the size of the `initiliaze super initialize` part"
	headerSize := 32.
	instVars := output targetClass instanceVariableNames.
	firstInstVarSize := instVars sorted
		ifEmpty: [ 0 ]
		ifNotEmpty:[ instVars first size + 4 ].
	^ headerSize + firstInstVarSize
!

generateInitializeCodeForObject	
	^ String streamContents: [ :str || instVars size |
		instVars := output targetClass instanceVariableNames sorted.
		size := instVars size.
		str << 'initialize'.
		str cr tab << 'super initialize.';cr.
		str cr tab.
		instVars withIndexDo: [ :name :index |
			index ~= 1 ifTrue: [ str cr tab ].
			str << name << ' := nil'.
			index ~= size ifTrue: [ str << '.' ] ] ].
!

initializeCodeForObject	
	^ HLMethodSourceCode new
		selector: 'initialize';
		sourceCode: self generateInitializeCodeForObject;
		yourself
!

retrieveProtocolForObject
	^ 'initialization'
! !

!HLInitializeGenerator methodsFor: 'protocol'!

generate
	super generate.
	
	output targetClass 
		initializeSourceCodesWith: self;
		initializeIndexWith: self;
		initializeProtocolWith: self
! !

Object subclass: #HLMethodClassifier
	instanceVariableNames: 'firstLink'
	package: 'Helios-Helpers'!
!HLMethodClassifier commentStamp!
I am in charge of categorizing methods following this strategy:

- is it an accessor?
- is it overriding a superclass method?
- is it starting with a know prefix?
- how are categorized the other implementations?!

!HLMethodClassifier methodsFor: 'initialization'!

buildChainOfResponsibility
	self addLink: HLImplementorClassifierLink new.
	self addLink: HLPrefixClassifierLink new.
	self addLink: HLSuperclassClassifierLink new.
	self addLink: HLAccessorClassifierLink new
!

initialize
	super initialize.
	
	self buildChainOfResponsibility
! !

!HLMethodClassifier methodsFor: 'private'!

addLink: aLink
	aLink next: firstLink.
	firstLink := aLink
! !

!HLMethodClassifier methodsFor: 'protocol'!

classify: aMethod
	firstLink
		method: aMethod;
		classify
!

classifyAll: aCollectionOfMethods
	aCollectionOfMethods do: [ :method |
		self classify: method ]
! !

Object subclass: #HLMethodSourceCode
	instanceVariableNames: 'selector sourceCode'
	package: 'Helios-Helpers'!
!HLMethodSourceCode commentStamp!
I am a simple data object keeping track of the information about a method that will be compiled at the end of the generation process!

!HLMethodSourceCode methodsFor: 'accessing'!

selector
	^ selector
!

selector: aSelector
	selector := aSelector
!

sourceCode
	^ sourceCode
!

sourceCode: aString
	sourceCode := aString
! !

