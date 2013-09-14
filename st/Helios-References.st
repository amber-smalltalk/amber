Smalltalk current createPackage: 'Helios-References'!
Object subclass: #HLMethodReference
	instanceVariableNames: 'selector methodClass'
	package: 'Helios-References'!

!HLMethodReference methodsFor: 'accessing'!

method
	^ self methodClass methodAt: self selector
!

methodClass
	^ methodClass
!

methodClass: aClass
	methodClass := aClass
!

selector
	^ selector
!

selector: aString
	selector := aString
!

source
	^ self method source
! !

!HLMethodReference methodsFor: 'initialization'!

initializeFromMethod: aCompiledMethod
	self
		selector: aCompiledMethod selector;
		methodClass: aCompiledMethod methodClass
! !

!HLMethodReference class methodsFor: 'instance creation'!

on: aCompiledMethod
	^ self new
		initializeFromMethod: aCompiledMethod;
		yourself
! !

HLWidget subclass: #HLReferences
	instanceVariableNames: 'model sendersListWidget implementorsListWidget classReferencesListWidget regexpListWidget sourceCodeWidget'
	package: 'Helios-References'!

!HLReferences methodsFor: 'accessing'!

classReferencesListWidget
	^ classReferencesListWidget ifNil: [
      	classReferencesListWidget := HLClassReferencesListWidget on: self model.
		classReferencesListWidget next: self regexpListWidget ]
!

implementorsListWidget
	^ implementorsListWidget ifNil: [
      	implementorsListWidget := HLImplementorsListWidget on: self model.
		implementorsListWidget next: self classReferencesListWidget ]
!

model
	^ model ifNil: [
		model := (HLReferencesModel new
			environment: self manager environment;
			yourself) ]
!

model: aModel
	model := aModel
!

regexpListWidget
	^ regexpListWidget ifNil: [
      	regexpListWidget := HLRegexpListWidget on: self model.
		regexpListWidget next: self sourceCodeWidget ]
!

sendersListWidget
	^ sendersListWidget ifNil: [
      	sendersListWidget := HLSendersListWidget on: self model.
		sendersListWidget next: self implementorsListWidget ]
!

sourceCodeWidget
	^ sourceCodeWidget ifNil: [
      	sourceCodeWidget := HLBrowserCodeWidget new
			browserModel: self model;
			yourself ]
! !

!HLReferences methodsFor: 'actions'!

registerBindingsOn: aBindingGroup
	HLToolCommand 
		registerConcreteClassesOn: aBindingGroup 
		for: self model
!

search: aString
	self model search: aString
! !

!HLReferences methodsFor: 'rendering'!

renderContentOn: html
	html with: (HLContainer with: (HLHorizontalSplitter 
    	with: (HLVerticalSplitter
        	with: (HLVerticalSplitter
            	with: self sendersListWidget
                with: self implementorsListWidget)
            with: (HLVerticalSplitter
            	with: self classReferencesListWidget
                with: self regexpListWidget)) 
        with: self sourceCodeWidget)).
	
	self sendersListWidget focus
! !

!HLReferences class methodsFor: 'accessing'!

tabClass
	^ 'references'
!

tabLabel
	^ 'References'
!

tabPriority
	^ 100
! !

!HLReferences class methodsFor: 'testing'!

canBeOpenAsTab
	^ false
! !

HLToolListWidget subclass: #HLReferencesListWidget
	instanceVariableNames: ''
	package: 'Helios-References'!

!HLReferencesListWidget methodsFor: 'accessing'!

commandCategory
	^ 'Methods'
!

label
	^ 'List'
! !

!HLReferencesListWidget methodsFor: 'actions'!

activateListItem: anItem
	self model withChangesDo: [ super activateListItem: anItem ]
!

observeModel
	self model announcer
		on: HLSearchReferences
		do: [ :ann | self onSearchReferences: ann searchString ];
		on: HLMethodSelected
		do: [ :ann | self onMethodSelected: ann item ]
!

selectItem: aMethod
	self model selectedMethod: aMethod
! !

!HLReferencesListWidget methodsFor: 'reactions'!

onMethodSelected: aMethod
	aMethod ifNil: [ ^ self ].
	self items detect: [ :each | each = aMethod selector ] ifNone: [ ^ self ].
	
	self 
		selectedItem: aMethod selector;
		activateItem: aMethod selector
!

onSearchReferences: aString
	self subclassResponsibility
! !

!HLReferencesListWidget methodsFor: 'rendering'!

renderItemLabel: aMethod on: html
	html with: aMethod methodClass name, ' >> #', aMethod selector
! !

!HLReferencesListWidget class methodsFor: 'instance creation'!

on: aModel
	^ self new 
		model: aModel; 
		yourself
! !

HLReferencesListWidget subclass: #HLClassReferencesListWidget
	instanceVariableNames: ''
	package: 'Helios-References'!

!HLClassReferencesListWidget methodsFor: 'accessing'!

label
	^ 'Class references'
! !

!HLClassReferencesListWidget methodsFor: 'reactions'!

onSearchReferences: aString
	self selectItem: nil.
	self items: (self model classReferencesOf: aString).
	self refresh
! !

HLReferencesListWidget subclass: #HLImplementorsListWidget
	instanceVariableNames: ''
	package: 'Helios-References'!

!HLImplementorsListWidget methodsFor: 'accessing'!

label
	^ 'Implementors'
! !

!HLImplementorsListWidget methodsFor: 'reactions'!

onSearchReferences: aString
	self selectItem: nil.
	self items: (self model implementorsOf: aString).
	self refresh
! !

HLReferencesListWidget subclass: #HLRegexpListWidget
	instanceVariableNames: ''
	package: 'Helios-References'!

!HLRegexpListWidget methodsFor: 'accessing'!

label
	^ 'Source search'
! !

!HLRegexpListWidget methodsFor: 'reactions'!

onSearchReferences: aString
	self selectItem: nil.
	self items: (self model regexpReferencesOf: aString).
	self refresh
! !

HLReferencesListWidget subclass: #HLSendersListWidget
	instanceVariableNames: ''
	package: 'Helios-References'!

!HLSendersListWidget methodsFor: 'accessing'!

label
	^ 'Senders'
! !

!HLSendersListWidget methodsFor: 'reactions'!

onSearchReferences: aString
	self selectItem: nil.
	self items: (self model sendersOf: aString).
	self refresh
! !

HLToolModel subclass: #HLReferencesModel
	instanceVariableNames: 'methodsCache classesAndMetaclassesCache'
	package: 'Helios-References'!

!HLReferencesModel methodsFor: 'accessing'!

allMethods
	^ self methodsCache
!

allSelectors
	^ (self allMethods 
		collect: [ :each | each selector ])
		asSet
!

classReferencesOf: aString
	"Answer all methods referencing the class named aString"
	
	| references |
	
	references := OrderedCollection new.
	
	self classesAndMetaclasses do: [ :each |
		each methodDictionary values do: [ :method |
			(method referencedClasses includes: aString) ifTrue: [
				references add: method ] ] ].
				
	^ references
!

classesAndMetaclasses
	^ self classesAndMetaclassesCache
!

implementorsOf: aString
	^ (self allMethods select: [ :each |
		each selector = aString ])
			collect: [ :each | self methodReferenceOn: each ]
!

methodReferenceOn: aCompiledMethod
	^ HLMethodReference on: aCompiledMethod
!

regexpReferencesOf: aString
	^ (self allMethods select: [ :each |
		each source match: aString ])
			collect: [ :each | self methodReferenceOn: each ]
!

sendersOf: aString
	^ (self allMethods select: [ :each |
		each messageSends includes: aString ])
			collect: [ :each | self methodReferenceOn: each ]
! !

!HLReferencesModel methodsFor: 'actions'!

search: aString
	self updateCaches.
	
	self announcer announce: (HLSearchReferences new
		searchString: aString;
		yourself)
! !

!HLReferencesModel methodsFor: 'cache'!

classesAndMetaclassesCache
	classesAndMetaclassesCache ifNil: [ self updateClassesAndMetaclassesCache ].
	
	^ classesAndMetaclassesCache
!

methodsCache
	methodsCache ifNil: [ self updateMethodsCache ].
	
	^ methodsCache
!

updateCaches
	self 
		updateClassesAndMetaclassesCache;
		updateMethodsCache
!

updateClassesAndMetaclassesCache
	classesAndMetaclassesCache := self environment classes 
		inject: OrderedCollection new 
		into: [ :acc :each |
			acc 
				add: each; 
				add: each class;
				yourself ]
!

updateMethodsCache
	methodsCache := self classesAndMetaclasses
		inject: OrderedCollection new
		into: [ :acc :each |
			acc, each methods ]
! !

!HLReferencesModel methodsFor: 'testing'!

isReferencesModel
	^ true
! !

