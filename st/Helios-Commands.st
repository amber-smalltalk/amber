Smalltalk current createPackage: 'Helios-Commands'!
Object subclass: #HLCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLCommand methodsFor: 'accessing'!

documentation
	^ self class documentation
!

key
	^ self class key
!

label
	^ self class label
! !

!HLCommand methodsFor: 'converting'!

asActionBinding
	^ (HLBindingAction on: self key labelled: self label)
    	callback: [ self execute ]
!

asBinding
	^ self isBindingGroup
		ifTrue: [ self asGroupBinding ]
		ifFalse: [ self asActionBinding ]
!

asGroupBinding
	^ HLBindingGroup 
		on: self key 
		labelled: self label
! !

!HLCommand methodsFor: 'executing'!

execute
! !

!HLCommand methodsFor: 'registration'!

registerOn: aBinding
	^ aBinding add: self asBinding
! !

!HLCommand methodsFor: 'testing'!

isBindingGroup
	^ (self class methodDictionary includesKey: 'execute') not
! !

!HLCommand class methodsFor: 'accessing'!

concreteSubclasses
	^ self subclasses select: [ :each |
		each isConcrete ]
!

documentation
	^ ''
!

key
	^ nil
!

label
	^ ''
! !

!HLCommand class methodsFor: 'registration'!

registerConcreteClassesOn: aBinding
	self concreteSubclasses do: [ :each | | binding |
		binding := each registerOn: aBinding.
		binding isBindingGroup ifTrue: [
			each registerConcreteClassesOn: binding ] ]
!

registerOn: aBinding
	^ self new registerOn: aBinding
! !

!HLCommand class methodsFor: 'testing'!

isConcrete
	^ self key notNil
! !

HLCommand subclass: #HLCloseTabCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLCloseTabCommand methodsFor: 'executing'!

execute
	HLManager current removeActiveTab
! !

!HLCloseTabCommand class methodsFor: 'accessing'!

key
	^ 87
!

label
	^ 'Close tab'
! !

HLCommand subclass: #HLModelCommand
 instanceVariableNames: 'model'
 package: 'Helios-Commands'!

!HLModelCommand methodsFor: 'accessing'!

model
	^ model
!

model: aModel
	model := aModel
! !

!HLModelCommand class methodsFor: 'instance creation'!

for: aModel
	^ self new
! !

!HLModelCommand class methodsFor: 'registration'!

registerConcreteClassesOn: aBinding for: aModel
	self concreteSubclasses do: [ :each | | binding |
		binding := each registerOn: aBinding for: aModel.
		binding isBindingGroup ifTrue: [
			each registerConcreteClassesOn: binding for: aModel ] ]
!

registerOn: aBinding for: aModel
	^ (self for: aModel) registerOn: aBinding
! !

HLModelCommand subclass: #HLBrowserCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLBrowserCommand class methodsFor: 'instance creation'!

for: aBrowserModel
	^ self new
    	model: aBrowserModel;
        yourself
! !

HLBrowserCommand subclass: #HLGoToCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLGoToCommand class methodsFor: 'accessing'!

key
	^ 71
!

label
	^ 'Go to'
! !

HLGoToCommand subclass: #HLGoToClassesCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLGoToClassesCommand methodsFor: 'executing'!

execute
	self model focusOnClasses
! !

!HLGoToClassesCommand class methodsFor: 'accessing'!

key
	"c"
    
	^ 67
!

label
	^ 'Classes'
! !

HLGoToCommand subclass: #HLGoToMethodsCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLGoToMethodsCommand methodsFor: 'executing'!

execute
	self model focusOnMethods
! !

!HLGoToMethodsCommand class methodsFor: 'accessing'!

key
	"m"
    
	^ 77
!

label
	^ 'Methods'
! !

HLGoToCommand subclass: #HLGoToPackagesCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLGoToPackagesCommand methodsFor: 'executing'!

execute
	self model focusOnPackages
! !

!HLGoToPackagesCommand class methodsFor: 'accessing'!

key
	"p"
    
	^ 80
!

label
	^ 'Packages'
! !

HLGoToCommand subclass: #HLGoToProtocolsCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLGoToProtocolsCommand methodsFor: 'executing'!

execute
	self model focusOnProtocols
! !

!HLGoToProtocolsCommand class methodsFor: 'accessing'!

key
	"p"
    
	^ 84
!

label
	^ 'Protocols'
! !

HLGoToCommand subclass: #HLGoToSourceCodeCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLGoToSourceCodeCommand methodsFor: 'executing'!

execute
	self model focusOnSourceCode
! !

!HLGoToSourceCodeCommand class methodsFor: 'accessing'!

key
	"s"
    
	^ 83
!

label
	^ 'Source code'
! !

HLBrowserCommand subclass: #HLMoveToCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLMoveToCommand class methodsFor: 'accessing'!

key
	^ 77
!

label
	^ 'Move'
! !

HLMoveToCommand subclass: #HLMoveMethodToCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLMoveMethodToCommand class methodsFor: 'accessing'!

key
	^ 77
!

label
	^ 'Method'
! !

HLMoveMethodToCommand subclass: #HLMoveMethodToClassCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLMoveMethodToClassCommand methodsFor: 'executing'!

execute
! !

!HLMoveMethodToClassCommand class methodsFor: 'accessing'!

key
	^ 67
!

label	
	^ 'to class'
! !

HLMoveMethodToCommand subclass: #HLMoveMethodToProtocolCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLMoveMethodToProtocolCommand methodsFor: 'executing'!

execute
! !

!HLMoveMethodToProtocolCommand class methodsFor: 'accessing'!

key
	^ 84
!

label
	^ 'to protocol'
! !

HLBrowserCommand subclass: #HLToggleCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLToggleCommand class methodsFor: 'accessing'!

key
	^ 84
!

label
	^ 'Toggle'
! !

HLToggleCommand subclass: #HLToggleClassSideCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLToggleClassSideCommand methodsFor: 'executing'!

execute
	self model showInstance: false
! !

!HLToggleClassSideCommand class methodsFor: 'accessing'!

key
	"c"
    
	^ 67
!

label
	^ 'Class side'
! !

HLToggleCommand subclass: #HLToggleInstanceSideCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLToggleInstanceSideCommand methodsFor: 'executing'!

execute
	self model showInstance: true
! !

!HLToggleInstanceSideCommand class methodsFor: 'accessing'!

key
	"i"
    
	^ 73
!

label
	^ 'Instance side'
! !

HLCommand subclass: #HLOpenCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLOpenCommand class methodsFor: 'accessing'!

key
	^ 79
!

label
	^ 'Open'
! !

HLOpenCommand subclass: #HLOpenBrowserCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLOpenBrowserCommand methodsFor: 'executing'!

execute
	^ HLBrowser openAsTab
! !

!HLOpenBrowserCommand class methodsFor: 'accessing'!

key
	^ 66
!

label
	^ 'Browser'
! !

HLOpenCommand subclass: #HLOpenTranscriptCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLOpenTranscriptCommand methodsFor: 'executing'!

execute
	^ HLTranscript openAsTab
! !

!HLOpenTranscriptCommand class methodsFor: 'accessing'!

key
	^ 84
!

label
	^ 'Transcript'
! !

HLOpenCommand subclass: #HLOpenWorkspaceCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLOpenWorkspaceCommand methodsFor: 'executing'!

execute
	^ HLCodeWidget openAsTab
! !

!HLOpenWorkspaceCommand class methodsFor: 'accessing'!

key
	^ 87
!

label
	^ 'Workspace'
! !

HLCommand subclass: #HLViewCommand
 instanceVariableNames: ''
 package: 'Helios-Commands'!

!HLViewCommand class methodsFor: 'accessing'!

label
	^ 'View'
! !

