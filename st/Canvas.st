Object subclass: #CanvasRenderingContext
	instanceVariableNames: ''
	category: 'Canvas'!

!CanvasRenderingContext methodsFor: 'drawing arcs'!

arcTo: aPoint radius: aNumber startAngle: aNumber2 endAngle: aNumber3 anticlockwise: aBoolean
	<self.arc(aPoint._x(), aPoint._y(), aNumber, aNumber2, aNumber3, aBoolean)>
!

arcTo: aPoint radius: aNumber
	self arcTo: aPoint radius: aNumber startAngle: 0 endAngle: Number pi * 2 anticlockwise: false
! !

!CanvasRenderingContext methodsFor: 'drawing paths'!

fillStyle: aString
	<self.fillStyle = String(aString)>
!

beginPath
	<self.beginPath()>
!

closePath
	<self.closePath()>
!

fill
	<self.fill()>
!

stroke
	<self.stroke()>
!

moveTo: aPoint
	<self.moveTo(aPoint._x(), aPoint._y())>
!

lineTo: aPoint
	<self.lineTo(aPoint._x(), aPoint._y())>
!

strokeStyle: aString
	<self.strokeStyle = String(aString)>
!

lineWidth: aNumber
	<self.lineWidth = aNumber>
! !

!CanvasRenderingContext methodsFor: 'drawing rectangles'!

fillRectFrom: aPoint to: anotherPoint
	<self.fillRect(aPoint._x(), aPoint._y(), anotherPoint._x(), anotherPoint._y())>
!

strokeRectFrom: aPoint to: anotherPoint
	<self.strokeRect(aPoint._x(), aPoint._y(), anotherPoint._x(), anotherPoint._y())>
!

clearRectFrom: aPoint to: anotherPoint
	<self.fillRect(aPoint._x(), aPoint._y(), anotherPoint._x(), anotherPoint._y())>
! !

!CanvasRenderingContext class methodsFor: 'instance creation'!

tagBrush: aTagBrush
	<return aTagBrush._element().getContext('2d')>
! !

Object subclass: #HTMLCanvas
	instanceVariableNames: 'root'
	category: 'Canvas'!

!HTMLCanvas methodsFor: 'accessing'!

root: aTagBrush
    root := aTagBrush
!

root
    ^root
! !

!HTMLCanvas methodsFor: 'adding'!

with: anObject
    ^self root with: anObject
! !

!HTMLCanvas methodsFor: 'initialization'!

initialize
    super initialize.
    root ifNil: [root := TagBrush fromString: 'div' canvas: self]
!

initializeFromJQuery: aJQuery
    root := TagBrush fromJQuery: aJQuery canvas: self
! !

!HTMLCanvas methodsFor: 'tags'!

newTag: aString
    ^TagBrush fromString: aString canvas: self
!

tag: aString
    ^root addBrush: (self newTag: aString)
!

h1
    ^self tag: 'h1'
!

h2
    ^self tag: 'h2'
!

h3
    ^self tag: 'h3'
!

h4
    ^self tag: 'h4'
!

h5
    ^self tag: 'h5'
!

h6
    ^self tag: 'h6'
!

p
    ^self tag: 'p'
!

div
    ^self tag: 'div'
!

span
    ^self tag: 'span'
!

img
    ^self tag: 'img'
!

ul
    ^self tag: 'ul'
!

ol
    ^self tag: 'ol'
!

li
    ^self tag: 'li'
!

table
    ^self tag: 'table'
!

tr
    ^self tag: 'tr'
!

td 
    ^self tag: 'td'
!

th
    ^self tag: 'th'
!

form
    ^self tag: 'form'
!

input
    ^self tag: 'input'
!

button
    ^self tag: 'button'
!

select
    ^self tag: 'select'
!

option
    ^self tag: 'option'
!

textarea
    ^self tag: 'textarea'
!

a
    ^self tag: 'a'
!

canvas
	^self tag: 'canvas'
! !

!HTMLCanvas class methodsFor: 'instance creation'!

onJQuery: aJQuery
	^self basicNew
		initializeFromJQuery: aJQuery;
		initialize;
		yourself
! !

Object subclass: #TagBrush
	instanceVariableNames: 'canvas element'
	category: 'Canvas'!

!TagBrush methodsFor: 'accessing'!

element
    ^element
! !

!TagBrush methodsFor: 'adding'!

contents: anObject
    self asJQuery empty.
    self append: anObject
!

addBrush: aTagBrush
    self appendChild: aTagBrush element.
    ^aTagBrush
!

with: anObject
    self append: anObject
!

append: anObject
    anObject appendToBrush: self
!

appendToBrush: aTagBrush
    aTagBrush addBrush: self
!

appendBlock: aBlock
    | root |
    root := canvas root.
    canvas root: self.
    aBlock value: canvas.
    canvas root: root
!

appendChild: anElement
    <self['@element'].appendChild(anElement)>
!

appendString: aString
    self appendChild: (self createTextNodeFor: aString)
! !

!TagBrush methodsFor: 'attributes'!

at: aString put: aValue
    <self['@element'].setAttribute(aString, aValue)>
!

removeAt: aString
    <self['@element'].removeAttribute(aString)>
!

class: aString
    self at: 'class' put: aString
!

id: aString
    self at: 'id' put: aString
!

src: aString
    self  at: 'src' put: aString
!

href: aString
    self at: 'href' put: aString
!

title: aString
    self at: 'title' put: aString
!

style: aString
    self at: 'style' put: aString
! !

!TagBrush methodsFor: 'converting'!

asJQuery
	<return smalltalk.JQuery._from_(jQuery(self['@element']))>
!

asJQueryDo: aBlock
    aBlock value: self asJQuery
! !

!TagBrush methodsFor: 'events'!

onKeyDown: aBlock
    self asJQuery on: 'keydown' do: aBlock
!

onKeyPress: aBlock
    self asJQuery on: 'keypress' do: aBlock
!

onKeyUp: aBlock
    self asJQuery on: 'keyup' do: aBlock
!

onFocus: aBlock
    self asJQuery on: 'focus' do: aBlock
!

onBlur: aBlock
    self asJQuery on: 'blur' do: aBlock
!

onChange: aBlock
    self asJQuery on: 'change' do: aBlock
!

onClick: aBlock
    self asJQuery on: 'click' do: aBlock
! !

!TagBrush methodsFor: 'initialization'!

initializeFromString: aString canvas: aCanvas
    element := self createElementFor: aString.
    canvas := aCanvas
!

initializeFromJQuery: aJQuery canvas: aCanvas
    element := aJQuery jquery get: 0.
    canvas := aCanvas
! !

!TagBrush methodsFor: 'private'!

createElementFor: aString
	<return document.createElement(String(aString))>
!

createTextNodeFor: aString
	<return document.createTextNode(String(aString))>
! !

!TagBrush class methodsFor: 'instance creation'!

fromString: aString canvas: aCanvas
    ^self new
	initializeFromString: aString canvas: aCanvas;
	yourself
!

fromJQuery: aJQuery canvas: aCanvas
    ^self new
	initializeFromJQuery: aJQuery canvas: aCanvas;
	yourself
! !

Object subclass: #Widget
	instanceVariableNames: 'root'
	category: 'Canvas'!

!Widget methodsFor: 'accessing'!

root
    ^root
! !

!Widget methodsFor: 'actions'!

alert: aString
    <alert(aString)>
!

confirm: aString
    <return window.confirm(aString)>
!

prompt: aString
    ^self prompt: aString default: ''
!

prompt: aString default: anotherString
    <return window.prompt(aString, anotherString)>
!

update
    | canvas |
    canvas := HTMLCanvas new.
    canvas root: self root.
    self root asJQuery empty.
    self renderOn: canvas
! !

!Widget methodsFor: 'adding'!

appendToBrush: aTagBrush
    self appendToJQuery: aTagBrush asJQuery
!

appendToJQuery: aJQuery
   self renderOn: (HTMLCanvas onJQuery: aJQuery)
! !

!Widget methodsFor: 'rendering'!

render
    | canvas |
    canvas := HTMLCanvas new.
    root := canvas root.
    self renderOn: canvas
!

renderOn: html
    self
! !

TagBrush subclass: #CanvasBrush
	instanceVariableNames: ''
	category: 'Canvas'!

!CanvasBrush methodsFor: 'initialization'!

initializeWithCanvas: aCanvas
	canvas := aCanvas
! !

!CanvasBrush methodsFor: 'private'!

createElement
	<return document.createElement('canvas')>
! !

!CanvasBrush class methodsFor: 'instance creation'!

canvas: aCanvas
	^self new
		initializeWithCanvas: aCanvas;
		yourself
! !

!Object methodsFor: '*Canvas'!

appendToBrush: aTagBrush
    aTagBrush append: self asString
! !

!BlockClosure methodsFor: '*Canvas'!

appendToBrush: aTagBrush
    aTagBrush appendBlock: self
! !

!String methodsFor: '*Canvas'!

appendToBrush: aTagBrush
    aTagBrush appendString: self
! !

