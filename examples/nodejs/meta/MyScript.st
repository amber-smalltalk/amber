Object subclass: #MyScript
	instanceVariableNames: ''
	category: 'MyScript'!

!MyScript class methodsFor: 'main'!
main
	| class compiler method |
	Object subclass: #Dummy instanceVariableNames: '' category: 'Dummy'.
	class := smalltalk at: #Dummy.	
	compiler := Compiler new.

	method := compiler load: 'foo ^ 10' forClass: class.
	method category: 'foo'.
	class addCompiledMethod: method.

	method := compiler load: 'bar ^ self foo * 2' forClass: class.
	method category: 'foo'.
	class addCompiledMethod: method.

	console log: (Exporter new exportCategory: 'Dummy')
! !


