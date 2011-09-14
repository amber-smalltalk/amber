"This is a base class for Amber Enyo UI classes. We keep track of an optional sister kind
in Enyo and typically an instance of it, or an instance without a kind, called ui.

NOTE: Inheritance of ivars seems broken, I need to use #ui: in subclass to set it"

Object subclass: #EnyoFriend
        instanceVariableNames: 'ui kind'
        category: 'EnyoAmber'!

!EnyoFriend methodsFor: 'accessing'!

ui
	^ui
!

ui: aUI
	ui := aUI
!

dollar
	"Return the $ of ui for easy access to the components of the UI."
	<return this['@ui'].$>
!

kind
	^kind
! !

!EnyoFriend methodsFor: 'initializing'!
initialize
	"We make sure our JS functions can be used transparently from Amber,
	at this moment we do not use it - trying to create Enyo kinds that are
	at the same time Amber classes failed for me."
	super initialize.
	<this.allowJavaScriptCalls = true>
! !
