Smalltalk createPackage: 'Wrappers-JQuery'!
(Smalltalk packageAt: 'Wrappers-JQuery') imports: {'jQuery' -> 'jquery'}!
Object subclass: #JQuery
	instanceVariableNames: ''
	package: 'Wrappers-JQuery'!

!JQuery class methodsFor: 'initialization'!

current
	^ jQuery
!

initialize
	"Allow JS method calls for the jQuery object.
	See boot.js DNU handling."
	
	Smalltalk optOut: jQuery
! !

!BlockClosure methodsFor: '*Wrappers-JQuery'!

asJQuery
	^ {self} asJQuery
!

asJQueryInContext: aContext
	^ {self} asJQueryInContext: aContext
! !

!JSObjectProxy methodsFor: '*Wrappers-JQuery'!

asJQuery
	<return jQuery(self['@jsObject'])>
!

asJQueryInContext: aContext
	<return jQuery(self['@jsObject'], aContext)>
! !

!Object methodsFor: '*Wrappers-JQuery'!

asJQuery
	<return jQuery(self)>
!

asJQueryInContext: aContext
	<return jQuery(self, aContext)>
! !

!String methodsFor: '*Wrappers-JQuery'!

asJQuery
	<return jQuery(String(self))>
!

asJQueryInContext: aContext
	<return jQuery(String(self), aContext)>
! !

