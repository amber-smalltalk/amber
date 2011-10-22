Object subclass: #MyScript
	instanceVariableNames: ''
	category: 'MyScript'!

!MyScript class methodsFor: 'main'!
main
	"Just a trivial example showing some meta programming by
	creating a class, compiling some methods and then exporting
	this package in javascript format to stdout"

	| klass compiler method |
	Object subclass: #Dummy instanceVariableNames: '' package: 'Dummy'.
	klass := Smalltalk current at: #Dummy.
	compiler := Compiler new.

	method := compiler load: 'foo ^10' forClass: klass.
	method category: 'foo'.
	klass addCompiledMethod: method.

	method := compiler load: 'bar ^ self foo * 2' forClass: klass.
	method category: 'foo'.
	klass addCompiledMethod: method.

	console log: (Exporter new exportPackage: 'Dummy')
! !


