Smalltalk current createPackage: 'Helios-Commands-Browser'!
HLModelCommand subclass: #HLBrowserCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLBrowserCommand methodsFor: 'accessing'!

category
	^ nil
! !

!HLBrowserCommand class methodsFor: 'instance creation'!

for: aBrowserModel
	^ self new
    	model: aBrowserModel;
        yourself
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

HLBrowserCommand subclass: #HLCommitPackageCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLCommitPackageCommand methodsFor: 'accessing'!

category
	^ 'Packages'
! !

!HLCommitPackageCommand methodsFor: 'executing'!

execute
	self model commitPackage
! !

!HLCommitPackageCommand methodsFor: 'testing'!

isActive
	^ true
	" slf model isPackageDirty"
! !

!HLCommitPackageCommand class methodsFor: 'accessing'!

key
	^ 'k'
!

label
	^ 'Commit'
! !

HLBrowserCommand subclass: #HLCopyCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLCopyCommand class methodsFor: 'accessing'!

key
	^ 'c'
!

label
	^ 'Copy'
! !

HLCopyCommand subclass: #HLCopyClassCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLCopyClassCommand methodsFor: 'accessing'!

category
	^ 'Classes'
!

displayLabel
	^ 'New class name:'
! !

!HLCopyClassCommand methodsFor: 'defaults'!

defaultInput
	^ self model selectedClass name
! !

!HLCopyClassCommand methodsFor: 'executing'!

execute
	self model copyClassTo: self input
! !

!HLCopyClassCommand methodsFor: 'testing'!

isActive
	^ self model selectedClass notNil
!

isInputRequired
	^ true
! !

!HLCopyClassCommand class methodsFor: 'accessing'!

key
	^ 'c'
!

label
	^ 'Class'
!

menuLabel
	^ 'Copy class...'
! !

HLBrowserCommand subclass: #HLFindCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLFindCommand class methodsFor: 'accessing'!

key
	^ 'f'
!

label
	^ 'Find'
! !

HLFindCommand subclass: #HLFindClassCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLFindClassCommand methodsFor: 'accessing'!

displayLabel
	^ 'select a class'
!

inputCompletion
	^ self model availableClassNames
!

inputLabel
	^ 'Find a class'
! !

!HLFindClassCommand methodsFor: 'executing'!

execute
	self model openClassNamed: self input
! !

!HLFindClassCommand methodsFor: 'testing'!

isInputRequired
	^ true
! !

!HLFindClassCommand class methodsFor: 'accessing'!

key
	^ 'c'
!

label
	^ 'Class'
! !

HLFindCommand subclass: #HLFindReferencesCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLFindReferencesCommand methodsFor: 'accessing'!

displayLabel
	^ 'find references'
!

inputCompletion
	^ self model availableClassNames, self model allSelectors
!

inputLabel
	^ 'Find references of'
! !

!HLFindReferencesCommand methodsFor: 'defaults'!

defaultInput
	^ self model selectedMethod 
		ifNil: [
			self model selectedClass
				ifNil: [ '' ]
				ifNotNil: [ :class | class name ] ]
		ifNotNil: [ :method | method selector ]
! !

!HLFindReferencesCommand methodsFor: 'executing'!

execute
	HLReferences new 
		open;
		search: self input
! !

!HLFindReferencesCommand methodsFor: 'testing'!

isInputRequired
	^ true
! !

!HLFindReferencesCommand class methodsFor: 'accessing'!

key
	^ 'r'
!

label
	^ 'References'
! !

HLBrowserCommand subclass: #HLMoveToCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLMoveToCommand class methodsFor: 'accessing'!

key
	^ 'm'
!

label
	^ 'Move'
! !

HLMoveToCommand subclass: #HLMoveClassToCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLMoveClassToCommand methodsFor: 'testing'!

isActive
	^ self model selectedClass notNil
! !

!HLMoveClassToCommand class methodsFor: 'accessing'!

key
	^ 'c'
!

label
	^ 'Class'
! !

HLMoveClassToCommand subclass: #HLMoveClassToPackageCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLMoveClassToPackageCommand methodsFor: 'accessing'!

category
	^ 'Classes'
!

displayLabel
	^ 'select a package'
!

inputCompletion
	^ self model availablePackageNames
!

inputLabel
	^ 'Move class to package:'
! !

!HLMoveClassToPackageCommand methodsFor: 'executing'!

execute
	self model moveClassToPackage: self input
! !

!HLMoveClassToPackageCommand methodsFor: 'testing'!

isInputRequired
	^ true
! !

!HLMoveClassToPackageCommand class methodsFor: 'accessing'!

key
	^ 'p'
!

label
	^ 'to package'
!

menuLabel	
	^ 'Move to package...'
! !

HLMoveToCommand subclass: #HLMoveMethodToCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLMoveMethodToCommand methodsFor: 'accessing'!

category
	^ 'Methods'
! !

!HLMoveMethodToCommand methodsFor: 'testing'!

isActive
	^ self model selectedMethod notNil
! !

!HLMoveMethodToCommand class methodsFor: 'accessing'!

key
	^ 'm'
!

label
	^ 'Method'
! !

HLMoveMethodToCommand subclass: #HLMoveMethodToClassCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLMoveMethodToClassCommand methodsFor: 'accessing'!

displayLabel
	^ 'select a class'
!

inputCompletion
	^ self model availableClassNames
!

inputLabel
	^ 'Move method to class:'
! !

!HLMoveMethodToClassCommand methodsFor: 'executing'!

execute
	self model moveMethodToClass: self input
! !

!HLMoveMethodToClassCommand methodsFor: 'testing'!

isInputRequired
	^ true
! !

!HLMoveMethodToClassCommand class methodsFor: 'accessing'!

key
	^ 'c'
!

label	
	^ 'to class'
!

menuLabel	
	^ 'Move to class...'
! !

HLMoveMethodToCommand subclass: #HLMoveMethodToProtocolCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLMoveMethodToProtocolCommand methodsFor: 'accessing'!

displayLabel
	^ 'select a protocol'
!

inputCompletion
	^ self model availableProtocols
!

inputLabel
	^ 'Move method to a protocol:'
! !

!HLMoveMethodToProtocolCommand methodsFor: 'executing'!

execute
	self model moveMethodToProtocol: self input
! !

!HLMoveMethodToProtocolCommand methodsFor: 'testing'!

isInputRequired
	^ true
! !

!HLMoveMethodToProtocolCommand class methodsFor: 'accessing'!

key
	^ 't'
!

label
	^ 'to protocol'
!

menuLabel
	^ 'Move to protocol...'
! !

HLBrowserCommand subclass: #HLRemoveCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLRemoveCommand class methodsFor: 'accessing'!

key
	^ 'x'
!

label
	^ 'Remove'
! !

HLRemoveCommand subclass: #HLRemoveClassCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLRemoveClassCommand methodsFor: 'accessing'!

category
	^ 'Classes'
! !

!HLRemoveClassCommand methodsFor: 'executing'!

execute
	self model removeClass
! !

!HLRemoveClassCommand methodsFor: 'testing'!

isActive
	^ self model selectedClass notNil
! !

!HLRemoveClassCommand class methodsFor: 'accessing'!

key
	^ 'c'
!

label
	^ 'Class'
!

menuLabel
	^ 'Remove class'
! !

HLRemoveCommand subclass: #HLRemoveMethodCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLRemoveMethodCommand methodsFor: 'accessing'!

category
	^ 'Methods'
! !

!HLRemoveMethodCommand methodsFor: 'executing'!

execute
	self model removeMethod
! !

!HLRemoveMethodCommand methodsFor: 'testing'!

isActive
	^ self model selectedMethod notNil
! !

!HLRemoveMethodCommand class methodsFor: 'accessing'!

key
	^ 'm'
!

label
	^ 'Method'
!

menuLabel
	^ 'Remove method'
! !

HLRemoveCommand subclass: #HLRemoveProtocolCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLRemoveProtocolCommand methodsFor: 'accessing'!

category
	^ 'Protocols'
! !

!HLRemoveProtocolCommand methodsFor: 'executing'!

execute
	self model removeProtocol
! !

!HLRemoveProtocolCommand methodsFor: 'testing'!

isActive
	^ self model selectedProtocol notNil
! !

!HLRemoveProtocolCommand class methodsFor: 'accessing'!

key
	^ 't'
!

label
	^ 'Protocol'
!

menuLabel
	^ 'Remove protocol'
! !

HLBrowserCommand subclass: #HLRenameCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLRenameCommand class methodsFor: 'accessing'!

key
	^ 'r'
!

label
	^ 'Rename'
! !

HLRenameCommand subclass: #HLRenameClassCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLRenameClassCommand methodsFor: 'accessing'!

category
	^ 'Classes'
!

displayLabel
	^ 'Rename class to:'
! !

!HLRenameClassCommand methodsFor: 'defaults'!

defaultInput
	^ self model selectedClass name
! !

!HLRenameClassCommand methodsFor: 'executing'!

execute
	self model renameClassTo: self input
! !

!HLRenameClassCommand methodsFor: 'testing'!

isActive
	^ self model selectedClass notNil
!

isInputRequired
	^ true
! !

!HLRenameClassCommand class methodsFor: 'accessing'!

key
	^ 'c'
!

label
	^ 'Class'
!

menuLabel
	^ 'Rename class...'
! !

HLRenameCommand subclass: #HLRenameProtocolCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Browser'!

!HLRenameProtocolCommand methodsFor: 'accessing'!

category
	^ 'Protocols'
!

displayLabel
	^ 'Rename protocol to:'
! !

!HLRenameProtocolCommand methodsFor: 'defaults'!

defaultInput
	^ self model selectedProtocol
! !

!HLRenameProtocolCommand methodsFor: 'executing'!

execute
	self model renameProtocolTo: self input
! !

!HLRenameProtocolCommand methodsFor: 'testing'!

isActive
	^ self model selectedProtocol notNil
!

isInputRequired
	^ true
! !

!HLRenameProtocolCommand class methodsFor: 'accessing'!

key
	^ 't'
!

label
	^ 'Protocol'
!

menuLabel
	^ 'Rename protocol...'
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
	self model showComment: true
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

