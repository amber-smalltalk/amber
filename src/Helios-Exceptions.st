Smalltalk createPackage: 'Helios-Exceptions'!
Error subclass: #HLError
	instanceVariableNames: ''
	package: 'Helios-Exceptions'!
!HLError commentStamp!
I am the abstract superclass of all Helios-specific errors.!

HLError subclass: #HLChangeForbidden
	instanceVariableNames: ''
	package: 'Helios-Exceptions'!
!HLChangeForbidden commentStamp!
I get signaled when a (often user) requested change is forbidden. A confirmation message can then be displayed to the user.

See `HLModel >> withChangesDo:`.!

HLError subclass: #HLListItemNotFound
	instanceVariableNames: ''
	package: 'Helios-Exceptions'!
!HLListItemNotFound commentStamp!
I get signaled by a `HLListWidget` when a non-existing item in the list is activated.!

