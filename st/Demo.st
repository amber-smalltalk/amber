Smalltalk current createPackage: 'Demo' properties: #{}!
Widget subclass: #HelloWorld
	instanceVariableNames: ''
	category: 'Demo'!

!HelloWorld methodsFor: 'not yet classified'!

renderOn: html
	html h1: 'hello world!!'
! !

!HelloWorld class methodsFor: 'not yet classified'!

initialize
	^ self new appendToJQuery: 'body' asJQuery
! !

