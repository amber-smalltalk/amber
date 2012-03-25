Smalltalk current createPackage: 'Compiler-Tests' properties: #{}!
TestCase subclass: #ImporterTest
	instanceVariableNames: ''
	category: 'Compiler-Tests'!

!ImporterTest methodsFor: 'private'!

chunkString

	^'!!Object methodsFor: ''importer test method''!!

importerTestMethod

	^''success''
!! !!
'
!

bigChunkString

	^'Smalltalk current createPackage: ''Cypress-Definitions'' properties: #{}!!
Object subclass: #CypressSnapshot
	instanceVariableNames: ''definitions''
	package: ''Cypress-Definitions''!!

!!CypressSnapshot methodsFor: ''not yet classified''!!

definitions: aDefinitions

	definitions := aDefinitions
!!

definitions

	^definitions
!! !!

!!CypressSnapshot class methodsFor: ''not yet classified''!!

definitions: aDefinitions

	^(self new) definitions: aDefinitions
!! !!

Object subclass: #CypressPackage
	instanceVariableNames: ''name''
	package: ''Cypress-Definitions''!!

!!CypressPackage methodsFor: ''not yet classified''!!

= other
	^ other species = self species and: [other name sameAs: name]
!!

name
	^ name
!!

name: aString
	name := aString
!!

snapshot
	| package definitions name  |
	package := Package named: self name.
	definitions := OrderedCollection new.
	package sortedClasses do: [:cls |
        	definitions add: cls asCypressClassDefinition.
                cls methodDictionary values do: [:method |
			(method category match: ''^\*'') ifFalse: [ 
				definitions add: method asCypressMethodDefinition ]].
                cls class methodDictionary values do: [:method |
			(method category match: ''^\*'') ifFalse: [ 
				definitions add: method asCypressMethodDefinition ]]].
	name := package name.
	Smalltalk current classes, (Smalltalk current classes collect: [:each | each class]) do: [:each |
		each methodDictionary values do: [:method |
			method category = (''*'', name) ifTrue: [
				definitions add: method asCypressMethodDefinition ]]].
	^ CypressSnapshot definitions: definitions
!!

printString
	^super printString, ''('', name, '')''
!! !!

Object subclass: #CypressDefinition
	instanceVariableNames: ''''
	package: ''Cypress-Definitions''!!

!!CypressDefinition methodsFor: ''not yet classified''!!

= aDefinition
	^(aDefinition isKindOf: CypressDefinition) and: [self isRevisionOf: aDefinition]
!!

isRevisionOf: aDefinition
	^ (aDefinition isKindOf: CypressDefinition) and: [aDefinition description = self description]
!!

description
	self subclassResponsibility
!!

isSameRevisionAs: aDefinition
	^ self = aDefinition
!! !!

Object subclass: #CypressPatch
	instanceVariableNames: ''operations''
	package: ''Cypress-Definitions''!!

!!CypressPatch methodsFor: ''not yet classified''!!

fromBase: baseSnapshot toTarget: targetSnapshot
	| base target |	
	operations := OrderedCollection new.
	base := CypressDefinitionIndex definitions: baseSnapshot definitions.
	target := CypressDefinitionIndex definitions: targetSnapshot definitions.
	
	target definitions do:
		[:t |
		base
			definitionLike: t
			ifPresent: [:b | (b isSameRevisionAs: t) ifFalse: [operations add: (CypressModification of: b to: t)]]
			ifAbsent: [operations add: (CypressAddition of: t)]].
		
	base definitions do:
		[:b |
		target
			definitionLike: b
			ifPresent: [:t | ]
			ifAbsent: [operations add: (CypressRemoval of: b)]]
!!

operations

	^operations
!! !!

!!CypressPatch class methodsFor: ''not yet classified''!!

fromBase: baseSnapshot toTarget: targetSnapshot
	^ (self new)
		fromBase: baseSnapshot
		toTarget: targetSnapshot
!! !!

Object subclass: #CypressDefinitionIndex
	instanceVariableNames: ''definitionMap''
	package: ''Cypress-Definitions''!!

!!CypressDefinitionIndex methodsFor: ''not yet classified''!!

add: aDefinition
	^ self definitionMap at: aDefinition description put: aDefinition
!!

addAll: aCollection
	aCollection do: [:ea | self add: ea]
!!

definitionLike: aDefinition ifPresent: foundBlock ifAbsent: errorBlock
	| definition |
	definition := self definitionMap at: aDefinition description ifAbsent: [].
	^ definition
		ifNil: errorBlock
		ifNotNil: [foundBlock value: definition]
!!

definitions
	^self definitionMap values
!!

definitionMap
	definitionMap ifNil: [ definitionMap := Dictionary new ].
	^ definitionMap
!!

remove: aDefinition
	self definitionMap removeKey: aDefinition description ifAbsent: []
!! !!

!!CypressDefinitionIndex class methodsFor: ''not yet classified''!!

definitions: aCollection
	^ self new addAll: aCollection
!! !!

Object subclass: #CypressPatchOperation
	instanceVariableNames: ''''
	package: ''Cypress-Definitions''!!

CypressDefinition subclass: #CypressClassDefinition
	instanceVariableNames: ''name superclassName category comment instVarNames classInstVarNames''
	package: ''Cypress-Definitions''!!

!!CypressClassDefinition methodsFor: ''not yet classified''!!

name: aClassName superclassName: aSuperclassName category: aCategory instVarNames: anInstanceVariableNames classInstVarNames: aClassInstanceVariableNames comment: aComment

	name := aClassName.
	superclassName := aSuperclassName.
	category := aCategory.
	instVarNames := anInstanceVariableNames.
	classInstVarNames := aClassInstanceVariableNames.
	comment := aComment
!!

= aDefinition
	^(super = aDefinition)
		and: [superclassName = aDefinition superclassName
		and: [category = aDefinition category
		and: [instVarNames = aDefinition instVarNames
		and: [classInstVarNames = aDefinition classInstVarNames
		and: [comment = aDefinition comment]]]]]
!!

superclassName

	^superclassName
!!

name

	^name
!!

category

	^category
!!

comment

	^comment
!!

description

	^ Array with: name
!!

instVarNames

	^instVarNames
!!

classInstVarNames

	^classInstVarNames
!! !!

!!CypressClassDefinition class methodsFor: ''not yet classified''!!

name: aClassName 
superclassName: aSuperclassName
category: aCategory
instVarNames: anInstanceVariableNames
classInstVarNames: aClassInstanceVariableNames
comment: aComment

	^(self new) 
		name: aClassName 
		superclassName: aSuperclassName
		category: aCategory
		instVarNames: anInstanceVariableNames
		classInstVarNames: aClassInstanceVariableNames
		comment: aComment
!! !!

CypressDefinition subclass: #CypressMethodDefinition
	instanceVariableNames: ''classIsMeta source category selector className''
	package: ''Cypress-Definitions''!!

!!CypressMethodDefinition methodsFor: ''not yet classified''!!

className: aName classIsMeta: isMetaclass selector: aSelector category: aCategory source: aSource

	className := aName.
	classIsMeta := isMetaclass.
	selector := aSelector.
	category := aCategory.
	source := aSource.
!!

= aDefinition
    ^ super = aDefinition
        and: [ aDefinition source = self source
                and: [ aDefinition category = self category ] ]
!!

source

	^source
!!

category

	^category
!!

description
	^ Array	
		with: className
		with: selector
		with: classIsMeta
!! !!

!!CypressMethodDefinition class methodsFor: ''not yet classified''!!

className: aName
classIsMeta: isMetaclass
selector: aSelector
category: aCategory
source: aSource

	^(self new)
		className: aName
		classIsMeta: isMetaclass
		selector: aSelector
		category: aCategory
		source: aSource
!! !!

CypressPatchOperation subclass: #CypressAddition
	instanceVariableNames: ''definition''
	package: ''Cypress-Definitions''!!

!!CypressAddition methodsFor: ''not yet classified''!!

definition: aDefinition

	definition := aDefinition
!! !!

!!CypressAddition class methodsFor: ''not yet classified''!!

of: aDefinition
	^ self new definition: aDefinition
!! !!

CypressPatchOperation subclass: #CypressModification
	instanceVariableNames: ''obsoletion modification''
	package: ''Cypress-Definitions''!!

!!CypressModification methodsFor: ''not yet classified''!!

base: base target: target

	obsoletion := base.
	modification := target.
!! !!

!!CypressModification class methodsFor: ''not yet classified''!!

of: base to: target
	^ self new base: base target: target
!! !!

CypressPatchOperation subclass: #CypressRemoval
	instanceVariableNames: ''definition''
	package: ''Cypress-Definitions''!!

!!CypressRemoval methodsFor: ''not yet classified''!!

definition: aDefinition

	definition := aDefinition
!! !!

!!CypressRemoval class methodsFor: ''not yet classified''!!

of: aDefinition
	^ self new definition: aDefinition
!! !!

!!Object methodsFor: ''*Cypress-Definitions''!!

species

	^self class
!! !!

!!Class methodsFor: ''*Cypress-Definitions''!!

asCypressClassDefinition
	^CypressClassDefinition
		name: self name
		superclassName: self superclass name
		category: self category 
		instVarNames: self instanceVariableNames
		classInstVarNames: self class instanceVariableNames
		comment: self comment
!! !!

!!CompiledMethod methodsFor: ''*Cypress-Definitions''!!

asCypressMethodDefinition

	^CypressMethodDefinition 
        	className: self methodClass name
		classIsMeta: self methodClass isMetaclass
		selector: self selector
		category: self category
		source: self source
!! !!

!!CharacterArray methodsFor: ''*Cypress-Definitions''!!

sameAs: aString

	^self asUppercase = aString asUppercase
!! !!

'
! !

!ImporterTest methodsFor: 'running'!

setUp

	super setUp.
	self cleanUp
!

tearDown

	super tearDown.
	self cleanUp
!

cleanUp

	(Object methodDictionary includesKey: #importerTestMethod)
		ifTrue: [ Object removeCompiledMethod: (Object methodAt: #importerTestMethod)].
! !

!ImporterTest methodsFor: 'tests'!

testBigChunkString
	"importer does not correctly add extension methods.

	 After loading in AmberProjectImporter, the following import fails...get a MNU from `CypressPackage new species`:

    		AmberProjectImporter
			importSTPackage: 'Cypress-Definitions' 
			prefix: 'tests/'.

		CypressPackage new species. 

	WARNING this guy isn't cleaned up automatically"

	Importer new import: self bigChunkString readStream.
	CypressPackage new species.
!

testChunkString

	Importer new import: self chunkString readStream.
	self assert: (Object methodDictionary includesKey: 'importerTestMethod').
	self assert: (Object new importerTestMethod = 'success').
! !

!Object methodsFor: '*Compiler-Tests'!

importerLoadMethod

	^'success'
! !

