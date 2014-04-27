Smalltalk createPackage: 'Helios-Commands-Browser'!
HLToolCommand subclass: #HLBrowserCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLBrowserCommand class methodsFor: 'testing'!

isValidFor: aModel
	^ aModel isBrowserModel
! !

HLBrowserCommand subclass: #HLBrowserGoToCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLBrowserGoToCommand class methodsFor: 'accessing'!

key
	^ 'g'
!

label
	^ 'Go to'
! !

!HLBrowserGoToCommand class methodsFor: 'testing'!

isValidFor: aModel
	^ aModel isBrowserModel
! !

HLBrowserGoToCommand subclass: #HLGoToClassesCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLGoToClassesCommand methodsFor: 'executing'!

execute
	self model focusOnClasses
! !

!HLGoToClassesCommand class methodsFor: 'accessing'!

key
	^ 'c'
!

label
	^ 'Classes'
! !

HLBrowserGoToCommand subclass: #HLGoToDocumentationCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLGoToDocumentationCommand methodsFor: 'executing'!

execute
	self model focusOnDocumentation
! !

!HLGoToDocumentationCommand class methodsFor: 'accessing'!

key
	^ 'd'
!

label
	^ 'Documentation'
! !

HLBrowserGoToCommand subclass: #HLGoToMethodsCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLGoToMethodsCommand methodsFor: 'executing'!

execute
	self model focusOnMethods
! !

!HLGoToMethodsCommand class methodsFor: 'accessing'!

key
	^ 'm'
!

label
	^ 'Methods'
! !

HLBrowserGoToCommand subclass: #HLGoToPackagesCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLGoToPackagesCommand methodsFor: 'executing'!

execute
	self model focusOnPackages
! !

!HLGoToPackagesCommand class methodsFor: 'accessing'!

key
	^ 'p'
!

label
	^ 'Packages'
! !

HLBrowserGoToCommand subclass: #HLGoToProtocolsCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLGoToProtocolsCommand methodsFor: 'executing'!

execute
	self model focusOnProtocols
! !

!HLGoToProtocolsCommand class methodsFor: 'accessing'!

key
	^ 't'
!

label
	^ 'Protocols'
! !

HLBrowserGoToCommand subclass: #HLGoToSourceCodeCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLGoToSourceCodeCommand methodsFor: 'executing'!

execute
	self model focusOnSourceCode
! !

!HLGoToSourceCodeCommand class methodsFor: 'accessing'!

key
	^ 's'
!

label
	^ 'Source code'
! !

HLBrowserCommand subclass: #HLEditCommentCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLEditCommentCommand methodsFor: 'executing'!

execute
	self model editComment
! !

!HLEditCommentCommand methodsFor: 'testing'!

isActive
	^ self model showComment and: [ self model selectedClass notNil ]
! !

!HLEditCommentCommand class methodsFor: 'accessing'!

key
	^ 'd'
!

label
	^ 'Edit documentation'
! !

HLBrowserCommand subclass: #HLGenerateCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!
!HLGenerateCommand commentStamp!
I am a group command used to gather all the commands generating code (`accessors`, `initialize`, etc)!

!HLGenerateCommand class methodsFor: 'accessing'!

key
	^ 'h'
!

label
	^ 'Generate'
! !

HLGenerateCommand subclass: #HLCategorizeUnclassifiedCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!
!HLCategorizeUnclassifiedCommand commentStamp!
I am the command used to categorize unclassified methods!

!HLCategorizeUnclassifiedCommand methodsFor: 'executing'!

execute
	| targetClass unclassified |
	targetClass := self model selectedClass.

	unclassified := targetClass methods select:[ :e | e protocol = 'as yet unclassified' ].
		
	HLMethodClassifier new
		classifyAll: unclassified
! !

!HLCategorizeUnclassifiedCommand class methodsFor: 'accessing'!

key
	^ 'c'
!

label
	^ 'Categorize'
! !

HLGenerateCommand subclass: #HLGenerateAccessorsCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!
!HLGenerateAccessorsCommand commentStamp!
I am the command used to generate the `getter` and the `setter` methods depending of the selected class!

!HLGenerateAccessorsCommand methodsFor: 'executing'!

execute
	| targetClass output first |
	targetClass := self model selectedClass.

	output := HLInitializeGenerator new
		class: targetClass;
		generate;
		output.
		
	output compile.
	first := output sourceCodes first.
	self model
		selectedProtocol: output protocol;
		selectedMethod:(targetClass>>first selector);
		focusOnSourceCode
! !

!HLGenerateAccessorsCommand class methodsFor: 'accessing'!

key
	^ 'i'
!

label
	^ 'Initialize'
! !

HLGenerateCommand subclass: #HLGenerateInitializeCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!
!HLGenerateInitializeCommand commentStamp!
I am the command used to generate the `initialize` method depending of the selected class!

!HLGenerateInitializeCommand methodsFor: 'executing'!

execute
	| targetClass output |
	targetClass := self model selectedClass.

	output := HLAccessorsGenerator new
		class: targetClass;
		generate;
		output.
		
	output compile.
	self model selectedProtocol: output protocol
! !

!HLGenerateInitializeCommand class methodsFor: 'accessing'!

key
	^ 'a'
!

label
	^ 'Accessors'
! !

HLBrowserCommand subclass: #HLToggleCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLToggleCommand class methodsFor: 'accessing'!

key
	^ 't'
!

label
	^ 'Toggle'
! !

HLToggleCommand subclass: #HLToggleClassCommentCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLToggleClassCommentCommand methodsFor: 'executing'!

execute
	self model showComment: self model showComment not
! !

!HLToggleClassCommentCommand class methodsFor: 'accessing'!

key
	^ 'd'
!

label
	^ 'Documentation'
! !

HLToggleCommand subclass: #HLToggleClassSideCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLToggleClassSideCommand methodsFor: 'executing'!

execute
	self model showInstance: self model showInstance not
! !

!HLToggleClassSideCommand class methodsFor: 'accessing'!

key
	^ 'c'
!

label
	^ 'Class side'
! !

