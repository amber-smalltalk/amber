Smalltalk current createPackage: 'Additional-Examples' properties: #{}!
Object subclass: #ClassInitializationExample
	instanceVariableNames: ''
	category: 'Additional-Examples'!
!ClassInitializationExample commentStamp!
This class will pop up an alert when it is loaded into Amber.!

!ClassInitializationExample class methodsFor: 'initialization'!

initialize
	window alert: 'Hello from inside the ', self printString , ' initialize method.'
! !

