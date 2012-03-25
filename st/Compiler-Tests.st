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

testImporterBug
	"importer does not correctly add extension methods"

	Importer new import: self chunkString readStream.
Transcript cr; show: 'testImporterBug [1]'. "cannot debug test methods very easily?"
	self assert: (Object methodDictionary includesKey: 'importerTestMethod').
Transcript cr; show: 'testImporterBug [2]'.
	self assert: (Object new importerTestMethod = 'success').
Transcript cr; show: 'testImporterBug [3]'.
! !

