Smalltalk createPackage: 'Compiler-Exceptions'!
Error subclass: #CompilerError
	instanceVariableNames: ''
	package: 'Compiler-Exceptions'!
!CompilerError commentStamp!
I am the common superclass of all compiling errors.!

CompilerError subclass: #ParseError
	instanceVariableNames: ''
	package: 'Compiler-Exceptions'!
!ParseError commentStamp!
Instance of ParseError are signaled on any parsing error.
See `Smalltalk >> #parse:`!

CompilerError subclass: #SemanticError
	instanceVariableNames: ''
	package: 'Compiler-Exceptions'!
!SemanticError commentStamp!
I represent an abstract semantic error thrown by the SemanticAnalyzer.
Semantic errors can be unknown variable errors, etc.
See my subclasses for concrete errors.

The IDE should catch instances of Semantic error to deal with them when compiling!

SemanticError subclass: #InliningError
	instanceVariableNames: ''
	package: 'Compiler-Exceptions'!
!InliningError commentStamp!
Instances of InliningError are signaled when using an `InliningCodeGenerator`in a `Compiler`.!

SemanticError subclass: #InvalidAssignmentError
	instanceVariableNames: 'variableName'
	package: 'Compiler-Exceptions'!
!InvalidAssignmentError commentStamp!
I get signaled when a pseudo variable gets assigned.!

!InvalidAssignmentError methodsFor: 'accessing'!

messageText
	^ ' Invalid assignment to variable: ', self variableName
!

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

messageText
	^ 'Variable shadowing error: ', self variableName, ' is already defined'
!

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

messageText
	^ 'Unknown Variable error: ', self variableName, ' is not defined'
!

variableName
	^ variableName
!

variableName: aString
	variableName := aString
! !

Object subclass: #RethrowErrorHandler
	instanceVariableNames: ''
	package: 'Compiler-Exceptions'!
!RethrowErrorHandler commentStamp!
This class is used in the commandline version of the compiler.
It uses the handleError: message of ErrorHandler for printing the stacktrace and throws the error again as JS exception.
As a result Smalltalk errors are not swallowd by the Amber runtime and compilation can be aborted.!

!RethrowErrorHandler methodsFor: 'error handling'!

basicSignal: anError
        <throw anError>
!

handleError: anError
        super handleError: anError.
        self basicSignal: anError
! !

