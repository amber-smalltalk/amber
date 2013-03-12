Smalltalk current createPackage: 'Helios-Commands-Browser'!
HLModelCommand subclass: #HLBrowserCommand
 instanceVariableNames: ''
 package: 'Helios-Commands-Browser'!

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
	^ 71
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
	"c"
    
	^ 67
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
	"m"
    
	^ 77
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
	"p"
    
	^ 80
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
	"p"
    
	^ 84
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
	"s"
    
	^ 83
!

label
	^ 'Source code'
! !

HLBrowserCommand subclass: #HLMoveToCommand
 instanceVariableNames: ''
 package: 'Helios-Commands-Browser'!

!HLMoveToCommand class methodsFor: 'accessing'!

key
	^ 77
!

label
	^ 'Move'
! !

HLMoveToCommand subclass: #HLMoveMethodToCommand
 instanceVariableNames: ''
 package: 'Helios-Commands-Browser'!

!HLMoveMethodToCommand methodsFor: 'accessing'!

activeBlock
	^ [ self model selectedMethod notNil ]
! !

!HLMoveMethodToCommand class methodsFor: 'accessing'!

key
	^ 77
!

label
	^ 'Method'
! !

HLMoveMethodToCommand subclass: #HLMoveMethodToClassCommand
 instanceVariableNames: ''
 package: 'Helios-Commands-Browser'!

!HLMoveMethodToClassCommand methodsFor: 'accessing'!

inputLabel
	^ 'Move method to class:'
! !

!HLMoveMethodToClassCommand methodsFor: 'executing'!

execute
	self model moveMethodToClass: self input ifAbsent: self errorBlock
! !

!HLMoveMethodToClassCommand methodsFor: 'testing'!

isInputRequired
	^ true
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
 package: 'Helios-Commands-Browser'!

!HLMoveMethodToProtocolCommand methodsFor: 'executing'!

execute
	self model moveMethodToProtocol
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
 package: 'Helios-Commands-Browser'!

!HLToggleCommand class methodsFor: 'accessing'!

key
	^ 84
!

label
	^ 'Toggle'
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
	"c"
    
	^ 67
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
	"i"
    
	^ 73
!

label
	^ 'Instance side'
! !

