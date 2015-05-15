Smalltalk createPackage: 'Platform-Browser'!
Object subclass: #BrowserInterface
	instanceVariableNames: ''
	package: 'Platform-Browser'!
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
	self deprecatedAPI: 'Use newXhr or dedicated library.'.
	^ JQuery
		ifNil: [ self error: 'JQuery wrapper not loaded, cannot do AJAX.' ]
		ifNotNil: [ JQuery current ajax: anObject ]
!

alert: aString
	^ window alert: aString
!

confirm: aString
	^ window confirm: aString
!

newXhr
	^ XMLHttpRequest new
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

!Object methodsFor: '*Platform-Browser'!

postMessageTo: aFrame
^ self postMessageTo: aFrame origin: '*'
!

postMessageTo: aFrame origin: aString
<return aFrame.postMessage(self, aString)>
! !

