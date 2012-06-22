Smalltalk current createPackage: 'Compiler-Exceptions' properties: #{}!
Error subclass: #CompilerError
	instanceVariableNames: ''
	package: 'Compiler-Exceptions'!

CompilerError subclass: #ParseError
	instanceVariableNames: ''
	package: 'Compiler-Exceptions'!

CompilerError subclass: #SemanticError
	instanceVariableNames: ''
	package: 'Compiler-Exceptions'!
!SemanticError commentStamp!
I represent an abstract semantic error thrown by the SemanticAnalyzer.
Semantic errors can be unknown variable errors, etc.
See my subclasses for concrete errors.

The IDE should catch instances of Semantic error to deal with them when compiling!

SemanticError subclass: #InliningError
	instanceVariableNames: 'variableName'
	package: 'Compiler-Exceptions'!

SemanticError subclass: #InvalidAssignmentError
	instanceVariableNames: 'variableName'
	package: 'Compiler-Exceptions'!
!InvalidAssignmentError commentStamp!
I get signaled when a pseudo variable gets assigned.!

!InvalidAssignmentError methodsFor: 'accessing'!

variableName
	^ variableName
!

variableName: aString
	variableName := aString
! !

SemanticError subclass: #ShadowingVariableError
	instanceVariableNames: 'variableName'
	package: 'Compiler-Exceptions'!
!ShadowingVariableError commentStamp!
I get signaled when a variable in a block or method scope shadows a variable of the same name in an outer scope.!

!ShadowingVariableError methodsFor: 'accessing'!

variableName
	^ variableName
!

variableName: aString
	variableName := aString
! !

SemanticError subclass: #UnknownVariableError
	instanceVariableNames: 'variableName'
	package: 'Compiler-Exceptions'!
!UnknownVariableError commentStamp!
I get signaled when a variable is not defined.
The default behavior is to allow it, as this is how Amber currently is able to seamlessly send messages to JavaScript objects.!

!UnknownVariableError methodsFor: 'accessing'!

variableName
	^ variableName
!

variableName: aString
	variableName := aString
! !

