Smalltalk current createPackage: 'Helios-Helpers'!
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

serialize
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

compile

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

compile
	super compile.
	
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

compile
	super compile.
	
	output targetClass 
		initializeSourceCodesWith: self;
		initializeIndexWith: self;
		initializeProtocolWith: self
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

