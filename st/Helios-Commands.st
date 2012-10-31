Smalltalk current createPackage: 'Helios-Commands' properties: #{}!
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

asBinding
	^ (HLBindingAction on: self key labelled: self label)
    	callback: [ self execute ]
! !

!HLCommand methodsFor: 'executing'!

execute
! !

!HLCommand class methodsFor: 'accessing'!

bindingGroup
	^ nil
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

HLCommand subclass: #HLBrowserCommand
	instanceVariableNames: 'model'
	package: 'Helios-Commands'!

!HLBrowserCommand methodsFor: 'accessing'!

model
	^ model
!

model: aBrowserModel
	model := aBrowserModel
! !

!HLBrowserCommand class methodsFor: 'instance creation'!

on: aBrowserModel
	^ self new
    	model: aBrowserModel;
        yourself
! !

HLBrowserCommand subclass: #HLGoToCommand
	instanceVariableNames: ''
	package: 'Helios-Commands'!

!HLGoToCommand class methodsFor: 'accessing'!

bindingGroup
	^ 'Go to'
! !

HLGoToCommand subclass: #HLGoToClassesCommand
	instanceVariableNames: ''
	package: 'Helios-Commands'!

!HLGoToClassesCommand methodsFor: 'executing'!

execute
	self model selectedClass: self model selectedClass
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
	self model selectedMethod: self model selectedMethod
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
	self model selectedPackage: self model selectedPackage
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
	self model selectedProtocol: self model selectedProtocol
! !

!HLGoToProtocolsCommand class methodsFor: 'accessing'!

key
	"p"
    
	^ 84
!

label
	^ 'Protocols'
! !

HLBrowserCommand subclass: #HLToggleCommand
	instanceVariableNames: ''
	package: 'Helios-Commands'!

!HLToggleCommand class methodsFor: 'accessing'!

bindingGroup
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

