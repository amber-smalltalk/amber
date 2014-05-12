Smalltalk createPackage: 'Helios-Helpers'!
Object subclass: #HLClassifier
	instanceVariableNames: 'next method'
	package: 'Helios-Helpers'!
!HLClassifier commentStamp!
I am an abstract class implementing a link in a `chain of responsibility` pattern.

Subclasses are in charge of classifying a method according to multiple strategies.!

!HLClassifier methodsFor: 'accessing'!

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

!HLClassifier methodsFor: 'private'!

doClassify
	self subclassResponsibility
! !

!HLClassifier methodsFor: 'protocol'!

classify
	self next ifNil: [ ^ false ].
	
	^ self doClassify
		ifTrue: [ true ]
		ifFalse: [ self next classify ]
! !

HLClassifier subclass: #HLAccessorClassifier
	instanceVariableNames: ''
	package: 'Helios-Helpers'!
!HLAccessorClassifier commentStamp!
I am a classifier checking the method selector matches an instance variable name.!

!HLAccessorClassifier methodsFor: 'private'!

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

HLClassifier subclass: #HLImplementorClassifier
	instanceVariableNames: ''
	package: 'Helios-Helpers'!
!HLImplementorClassifier commentStamp!
I am a classifier checking the other implementations of the same selector and choose the protocol the most populated.!

!HLImplementorClassifier methodsFor: 'private'!

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

HLClassifier subclass: #HLPrefixClassifier
	instanceVariableNames: 'prefixMapping'
	package: 'Helios-Helpers'!
!HLPrefixClassifier commentStamp!
I am classifier checking the method selector to know if it begins with a known prefix.!

!HLPrefixClassifier methodsFor: 'initialization'!

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

!HLPrefixClassifier methodsFor: 'private'!

doClassify
	prefixMapping keysAndValuesDo: [ :prefix :protocol |
		(method selector beginsWith: prefix)
			ifTrue: [
				method protocol: protocol.
				^ true ]].
	^ false.
! !

HLClassifier subclass: #HLSuperclassClassifier
	instanceVariableNames: ''
	package: 'Helios-Helpers'!
!HLSuperclassClassifier commentStamp!
I am a classifier checking the superclass chain to find a matching selector.!

!HLSuperclassClassifier methodsFor: 'private'!

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
I am a simple data object used to store the result of a generation process.!

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

Object subclass: #HLMethodClassifier
	instanceVariableNames: 'firstClassifier'
	package: 'Helios-Helpers'!
!HLMethodClassifier commentStamp!
I am in charge of categorizing methods following this strategy:

- is it an accessor?
- is it overriding a superclass method?
- is it starting with a know prefix?
- how are categorized the other implementations?!

!HLMethodClassifier methodsFor: 'initialization'!

initialize
	super initialize.
	
	self setupClassifiers
!

setupClassifiers
	self addClassifier: HLImplementorClassifier new.
	self addClassifier: HLPrefixClassifier new.
	self addClassifier: HLSuperclassClassifier new.
	self addClassifier: HLAccessorClassifier new
! !

!HLMethodClassifier methodsFor: 'private'!

addClassifier: aClassifier
	aClassifier next: firstClassifier.
	firstClassifier := aClassifier
! !

!HLMethodClassifier methodsFor: 'protocol'!

classify: aMethod
	firstClassifier
		method: aMethod;
		classify
!

classifyAll: aCollectionOfMethods
	aCollectionOfMethods do: [ :method |
		self classify: method ]
! !

Object subclass: #HLMethodGenerator
	instanceVariableNames: 'output'
	package: 'Helios-Helpers'!
!HLMethodGenerator commentStamp!
I am the abstract super class of the method generators.

My main method is `generate` which produces an `output` object accessed with `#output`.!

!HLMethodGenerator methodsFor: 'accessing'!

class: aClass
	output targetClass: aClass
!

output
	^ output
! !

!HLMethodGenerator methodsFor: 'initialization'!

initialize
	super initialize.
	
	output := HLGenerationOutput new
! !

!HLMethodGenerator methodsFor: 'protocol'!

generate
	output targetClass ifNil: [ self error: 'class should not be nil'].
! !

HLMethodGenerator subclass: #HLAccessorsGenerator
	instanceVariableNames: ''
	package: 'Helios-Helpers'!
!HLAccessorsGenerator commentStamp!
I am a generator used to compile the getters/setters of a class.!

!HLAccessorsGenerator methodsFor: 'double-dispatch'!

accessorProtocolForObject
	output protocol: 'accessing'
!

accessorsForObject
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

HLMethodGenerator subclass: #HLInitializeGenerator
	instanceVariableNames: ''
	package: 'Helios-Helpers'!
!HLInitializeGenerator commentStamp!
I am used to double-dispatch the `initialize` method(s) generation. I am a disposable object.

## Usage

    ^ HLInitializeGenerator new
        class: aClass;
        generate;
        output!

!HLInitializeGenerator methodsFor: 'double-dispatch'!

initializeForObject
	output addSourceCode: self initializeMethodForObject
!

initializeProtocolForObject
	output protocol: 'initialization'
! !

!HLInitializeGenerator methodsFor: 'private'!

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

initializeMethodForObject	
	^ HLMethodSourceCode new
		selector: 'initialize';
		sourceCode: self generateInitializeCodeForObject;
		yourself
! !

!HLInitializeGenerator methodsFor: 'protocol'!

generate
	super generate.
	
	output targetClass 
		initializeSourceCodesWith: self;
		initializeProtocolWith: self
! !

Object subclass: #HLMethodSourceCode
	instanceVariableNames: 'selector sourceCode'
	package: 'Helios-Helpers'!
!HLMethodSourceCode commentStamp!
I am a simple data object keeping track of the information about a method that will be compiled at the end of the generation process.!

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

Object subclass: #HLPackageCommitErrorHelper
	instanceVariableNames: 'model'
	package: 'Helios-Helpers'!

!HLPackageCommitErrorHelper methodsFor: 'accessing'!

model
	^ model
!

model: aToolModel
	model := aToolModel
!

package
	^ self model packageToCommit
! !

!HLPackageCommitErrorHelper methodsFor: 'actions'!

commitPackage
	(HLCommitPackageCommand for: self model)
		execute
!

commitToPath: aString
	"We only take AMD package transport into account for now"
	
	self package transport setPath: aString.
	
	self commitPackage
!

showHelp
	HLConfirmationWidget new
		confirmationString: 'Commit failed for namespace "', self package transport namespace, '". Do you want to commit to another path?';
		actionBlock: [ self showNewCommitPath ];
		cancelButtonLabel: 'Abandon';
		confirmButtonLabel: 'Set path';
		show
!

showNewCommitPath
	HLRequestWidget new
		beSingleline;
		confirmationString: 'Set commit path';
		actionBlock: [ :url | self commitToPath: url ];
		confirmButtonLabel: 'Commit with new path';
		value: '/src';
		show
! !

!HLPackageCommitErrorHelper class methodsFor: 'instance creation'!

on: aToolModel
	^ self new
		model: aToolModel;
		yourself
! !

