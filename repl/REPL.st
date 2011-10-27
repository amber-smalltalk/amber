Object subclass: #Repl
	instanceVariableNames: 'readline interface util'
	category: 'REPL'!

!Repl methodsFor: 'accessing'!

prompt
	^'amber >> '
! !

!Repl methodsFor: 'actions'!

createInterface
	"No completion for now"
	interface := readline createInterface: process stdin stdout: process stdout.
	interface on: 'line' do: [:buffer  | self eval: buffer].
	interface on: 'close' do: [self close].
	self setPrompt.
	interface prompt
!

setPrompt
	interface setPrompt: self prompt
!

close
	process stdin destroy
!

eval: buffer
	| result |
	buffer isEmpty ifFalse: [
		self try: [
			result := Compiler new loadExpression: buffer.
			Transcript show: result]
		catch: [:e |
			e isSmalltalkError
			    ifTrue: [ErrorHandler new handleError: e]
			    ifFalse: [process stdout write: e jsStack]]].
	interface prompt
! !

!Repl methodsFor: 'initialization'!

initialize
	super initialize.
	readline := require value: 'readline'.
	util := require value: 'util'
! !

!Repl class methodsFor: 'not yet classified'!

main
	self new createInterface
! !

