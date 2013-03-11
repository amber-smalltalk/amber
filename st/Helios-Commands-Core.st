Smalltalk current createPackage: 'Helios-Commands-Core'!
Object subclass: #HLCommand
 instanceVariableNames: ''
 package: 'Helios-Commands-Core'!

!HLCommand methodsFor: 'accessing'!

activeBlock
	^ [ true ]
!

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
	^ (HLBindingAction on: self key labelled: self label activeBlock: self activeBlock)
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

!HLCommand class methodsFor: 'converting'!

asBindingOn: aBinding
	| instance |
	
	instance := self new asBinding.
	aBinding add: instance.
	^ instance
! !

!HLCommand class methodsFor: 'registration'!

registerConcreteClassesOn: aBinding
	| newBinding |
	
	self isConcrete
		ifTrue: [ newBinding := self asBindingOn: aBinding ]
		ifFalse: [ newBinding := aBinding ].
		
	self subclasses do: [ :each | each registerConcreteClassesOn: newBinding ]
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
 package: 'Helios-Commands-Core'!

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
 package: 'Helios-Commands-Core'!

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

HLCommand subclass: #HLOpenCommand
 instanceVariableNames: ''
 package: 'Helios-Commands-Core'!

!HLOpenCommand class methodsFor: 'accessing'!

key
	^ 79
!

label
	^ 'Open'
! !

HLOpenCommand subclass: #HLOpenBrowserCommand
 instanceVariableNames: ''
 package: 'Helios-Commands-Core'!

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
 package: 'Helios-Commands-Core'!

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
 package: 'Helios-Commands-Core'!

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
 package: 'Helios-Commands-Core'!

!HLViewCommand class methodsFor: 'accessing'!

label
	^ 'View'
! !

