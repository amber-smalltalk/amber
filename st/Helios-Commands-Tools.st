Smalltalk current createPackage: 'Helios-Commands-Tools'!
HLModelCommand subclass: #HLToolCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Tools'!

!HLToolCommand methodsFor: 'accessing'!

category
	^ nil
! !

!HLToolCommand class methodsFor: 'instance creation'!

for: aToolModel
	^ self new
    	model: aToolModel;
        yourself
! !

!HLToolCommand class methodsFor: 'testing'!

isValidFor: aModel
	^ aModel isToolModel
! !

HLToolCommand subclass: #HLCommitPackageCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Tools'!

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

HLToolCommand subclass: #HLCopyCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Tools'!

!HLCopyCommand class methodsFor: 'accessing'!

key
	^ 'c'
!

label
	^ 'Copy'
! !

HLCopyCommand subclass: #HLCopyClassCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Tools'!

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

HLToolCommand subclass: #HLFindCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Tools'!

!HLFindCommand class methodsFor: 'accessing'!

key
	^ 'f'
!

label
	^ 'Find'
! !

HLFindCommand subclass: #HLFindClassCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Tools'!

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

!HLFindClassCommand class methodsFor: 'testing'!

isValidFor: aModel
	^ aModel isBrowserModel
! !

HLFindCommand subclass: #HLFindReferencesCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Tools'!

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
		openAsTab;
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

HLToolCommand subclass: #HLMoveToCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Tools'!

!HLMoveToCommand class methodsFor: 'accessing'!

key
	^ 'm'
!

label
	^ 'Move'
! !

HLMoveToCommand subclass: #HLMoveClassToCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Tools'!

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
	package: 'Helios-Commands-Tools'!

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
	package: 'Helios-Commands-Tools'!

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
	package: 'Helios-Commands-Tools'!

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
	package: 'Helios-Commands-Tools'!

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

HLToolCommand subclass: #HLRemoveCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Tools'!

!HLRemoveCommand class methodsFor: 'accessing'!

key
	^ 'x'
!

label
	^ 'Remove'
! !

HLRemoveCommand subclass: #HLRemoveClassCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Tools'!

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
	package: 'Helios-Commands-Tools'!

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
	package: 'Helios-Commands-Tools'!

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

HLToolCommand subclass: #HLRenameCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Tools'!

!HLRenameCommand class methodsFor: 'accessing'!

key
	^ 'r'
!

label
	^ 'Rename'
! !

HLRenameCommand subclass: #HLRenameClassCommand
	instanceVariableNames: ''
	package: 'Helios-Commands-Tools'!

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
	package: 'Helios-Commands-Tools'!

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

