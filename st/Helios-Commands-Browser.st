Smalltalk current createPackage: 'Helios-Commands-Browser'!
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
	self model showInstance: false
! !

!HLToggleClassSideCommand class methodsFor: 'accessing'!

key
	^ 'c'
!

label
	^ 'Class side'
! !

HLToggleCommand subclass: #HLToggleInstanceSideCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLToggleInstanceSideCommand methodsFor: 'executing'!

execute
	self model showInstance: true
! !

!HLToggleInstanceSideCommand class methodsFor: 'accessing'!

key
	^ 'i'
!

label
	^ 'Instance side'
! !

