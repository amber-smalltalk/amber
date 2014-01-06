Smalltalk createPackage: 'Moka-Layouts'!
Object subclass: #MKLayout
	instanceVariableNames: 'properties'
	package: 'Moka-Layouts'!
!MKLayout commentStamp!
I am responsible for the layout of a `MKLayoutView`.!

!MKLayout methodsFor: 'accessing'!

bottom: aNumber
	properties 
		at: 'bottom' 
		put: (self propertyLabelled: 'bottom' value: aNumber).
	
	(self hasProperty: 'top') ifTrue: [
		self removeProperty: 'height' ].
	self removeProperty: 'centerY'
!

centerX: aNumber
	properties
		at: 'centerX'
		put: (MKHorizontalCenteringLayoutProperty layout: self value: aNumber).
	
	self 
		removeProperty: 'left';
		removeProperty: 'right'
!

centerY: aNumber
	properties
		at: 'centerY'
		put: (MKVerticalCenteringLayoutProperty layout: self value: aNumber).
		
	self 
		removeProperty: 'top';
		removeProperty: 'bottom'
!

height
	^ properties 
		at: 'height' 
		ifPresent: [ :property | property value ]
		ifAbsent: [ 1 ]
!

height: aNumber
	properties 
		at: 'height' 
		put: (self propertyLabelled: 'height' value: aNumber).
	
	(self hasProperty: 'top') ifTrue: [
		self removeProperty: 'bottom' ]
!

left: aNumber
	properties 
		at: 'left' 
		put: (self propertyLabelled: 'left' value: aNumber).
	
	(self hasProperty: 'width') ifTrue: [
		self removeProperty: 'right' ].
	self removeProperty: 'centerX'
!

right: aNumber
	properties 
		at: 'right' 
		put: (self propertyLabelled: 'right' value: aNumber).
	
	(self hasProperty: 'width') ifTrue: [
		self removeProperty: 'left' ].
	self removeProperty: 'centerX'
!

top: aNumber
	properties 
		at: 'top' 
		put: (self propertyLabelled: 'top' value: aNumber).
	
	(self hasProperty: 'height') ifTrue: [
		self removeProperty: 'bottom' ].
	self removeProperty: 'centerY'
!

width
	^ properties 
		at: 'width' 
		ifPresent: [ :property | property value ]
		ifAbsent: [ 1 ]
!

width: aNumber
	properties 
		at: 'width' 
		put: (self propertyLabelled: 'width' value: aNumber).
	
	(self hasProperty: 'left') ifTrue: [
		self removeProperty: 'right' ]
! !

!MKLayout methodsFor: 'converting'!

asCssString
	^ String streamContents: [ :stream |
		properties valuesDo: [ :each | 
			each printCssOn: stream.
			stream << ';' ] ]
! !

!MKLayout methodsFor: 'factory'!

propertyLabelled: aString value: aValue
	^ MKLabelledLayoutProperty layout: self label: aString value: aValue
! !

!MKLayout methodsFor: 'initialization'!

initialize
	super initialize.
	properties := Dictionary new
! !

!MKLayout methodsFor: 'private'!

hasProperty: aString
	^ properties includesKey: aString
!

removeProperty: aString
	properties remove: aString ifAbsent: []
! !

MKLayout subclass: #MKLabelLayout
	instanceVariableNames: ''
	package: 'Moka-Layouts'!
!MKLabelLayout commentStamp!
I am a specialized layout for label views. I can set a `textAlign` property, taking a string argument, `'left'`, `'center'` or `'right'`.!

!MKLabelLayout methodsFor: 'accessing'!

textAlign: aString
	"Map to CSS' text-align property. Possible values are `'left'`, `'center'` and `'right'`"
	
	properties 
		at: 'text-align' 
		put: (self propertyLabelled: 'text-align' value: aString)
! !

MKLayout subclass: #MKPaneLayout
	instanceVariableNames: ''
	package: 'Moka-Layouts'!
!MKPaneLayout commentStamp!
I am a specialized layout for pane views. I can set border widths to my views.!

!MKPaneLayout methodsFor: 'accessing'!

borderBottom: aNumber
	properties 
		at: 'border-bottom' 
		put: (self propertyLabelled: 'border-bottom-width' value: aNumber asMokaPixelString)
!

borderLeft: aNumber
	properties 
		at: 'border-left' 
		put: (self propertyLabelled: 'border-left-width' value: aNumber asMokaPixelString)
!

borderRight: aNumber
	properties 
		at: 'border-right' 
		put: (self propertyLabelled: 'border-right-width' value: aNumber asMokaPixelString)
!

borderTop: aNumber
	properties 
		at: 'border-top' 
		put: (self propertyLabelled: 'border-top-width' value: aNumber asMokaPixelString)
! !

Object subclass: #MKLayoutProperty
	instanceVariableNames: 'layout value'
	package: 'Moka-Layouts'!
!MKLayoutProperty commentStamp!
I represent a single layout property.!

!MKLayoutProperty methodsFor: 'accessing'!

layout
	^ layout
!

layout: aLayout
	layout := aLayout
!

value
	^ value
!

value: aValue
	value := aValue
! !

!MKLayoutProperty methodsFor: 'converting'!

asCssString
	^ String streamContents: [ :stream | 
		self printCssOn: stream ]
! !

!MKLayoutProperty methodsFor: 'printing'!

printCssOn: aStream
	self subclassResponsibility
! !

!MKLayoutProperty class methodsFor: 'instance creation'!

layout: aLayout value: aValue
	^ self new
		layout: aLayout;
		value: aValue;
		yourself
! !

MKLayoutProperty subclass: #MKHorizontalCenteringLayoutProperty
	instanceVariableNames: ''
	package: 'Moka-Layouts'!

!MKHorizontalCenteringLayoutProperty methodsFor: 'accessing'!

marginLeft
	^ 0 - ((self layout width / 2) + self value)
! !

!MKHorizontalCenteringLayoutProperty methodsFor: 'printing'!

printCssOn: aStream
	aStream << 'left:50%;'.
	aStream << 'margin-left:' << self marginLeft asMokaCssString
! !

MKLayoutProperty subclass: #MKLabelledLayoutProperty
	instanceVariableNames: 'label'
	package: 'Moka-Layouts'!

!MKLabelledLayoutProperty methodsFor: 'accessing'!

label
	^ label
!

label: aString
	label := aString
! !

!MKLabelledLayoutProperty methodsFor: 'printing'!

printCssOn: aStream
	aStream << self label << ':' << self value asMokaCssString
! !

!MKLabelledLayoutProperty class methodsFor: 'instance creation'!

layout: aLayout label: aString value: aValue
	^ self new
		layout: aLayout;
		label: aString;
		value: aValue;
		yourself
! !

MKLayoutProperty subclass: #MKVerticalCenteringLayoutProperty
	instanceVariableNames: ''
	package: 'Moka-Layouts'!

!MKVerticalCenteringLayoutProperty methodsFor: 'accessing'!

marginTop
	^ 0 - ((self layout height / 2) + self value)
! !

!MKVerticalCenteringLayoutProperty methodsFor: 'printing'!

printCssOn: aStream
	aStream << 'top:50%;'.
	aStream << 'margin-top:' << self marginTop asMokaCssString
! !

!Number methodsFor: '*Moka-Layouts'!

asMokaCssString
	^ self abs > 1 	
		ifTrue: [ self asMokaPixelString ]
		ifFalse: [ self asMokaPercentString ]
!

asMokaPercentString
	^ (self * 100) asString, '%'
!

asMokaPixelString
	^ self asString, 'px'
! !

!String methodsFor: '*Moka-Layouts'!

asMokaCssString
	^ self
! !

