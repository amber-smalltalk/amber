Object subclass: #MyScript
	instanceVariableNames: ''
	category: 'MyScript'!

!MyScript class methodsFor: 'main'!
main
	| klass compiler method |
	Object subclass: #Dummy instanceVariableNames: '' category: 'Dummy'.
	klass := smalltalk at: #Dummy.	
	compiler := Compiler new.

	method := compiler load: 'foo ^ 10' forClass: klass.
	method category: 'foo'.
	klass addCompiledMethod: method.

	method := compiler load: 'bar ^ self foo * 2' forClass: klass.
	method category: 'foo'.
	klass addCompiledMethod: method.

	console log: (Exporter new exportCategory: 'Dummy')
! !


