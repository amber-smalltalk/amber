Smalltalk createPackage: 'Wrappers-JQuery'!
(Smalltalk packageAt: 'Wrappers-JQuery') imports: {'jQuery' -> 'jquery'}!
Object subclass: #BrowserInterface
	instanceVariableNames: ''
	package: 'Wrappers-JQuery'!
!BrowserInterface commentStamp!
I am platform interface class that tries to use window and jQuery; that is, one for browser environment.

## API

    self isAvailable. "true if window and jQuery exist".

    self alert: 'Hey, there is a problem'.
    self confirm: 'Affirmative?'.
    self prompt: 'Your name:'.

    self ajax: #{
        'url' -> '/patch.js'. 'type' -> 'GET'. dataType->'script'
    }.!

!BrowserInterface methodsFor: 'actions'!

ajax: anObject
	^ jQuery ajax: anObject
!

alert: aString
	^ window alert: aString
!

confirm: aString
	^ window confirm: aString
!

prompt: aString
	^ window prompt: aString
!

prompt: aString default: defaultString
	^ window prompt: aString default: defaultString
! !

!BrowserInterface methodsFor: 'testing'!

isAvailable
<return typeof window !!== "undefined" && typeof jQuery !!== "undefined">
! !

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

