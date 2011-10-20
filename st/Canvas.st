Smalltalk current createPackage: 'Canvas' properties: #{}!
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
!

pre
    ^self tag: 'pre'
!

code
    ^self tag: 'code'
!

br
    ^self tag: 'br'
!

script
    ^self tag: 'script'
!

link
    ^self tag: 'link'
!

style
	^self tag: 'style'
!

p: anObject
    ^self p with: anObject
!

h1: anObject
    ^self h1 with: anObject
!

iframe
    ^self tag: 'iframe'
!

iframe: aString
    ^self iframe src: aString
!

h2: anObject
    ^ self h2 with: anObject
!

h3: anObject
    ^self h3 with: anObject
!

h4: anObject
    ^self h4 with: anObject
!

h5: anObject
    ^self h5 with: anObject
!

h6: anObject
    ^self h6 with: anObject
!

img: aString
    ^self img src: aString
!

ol: anObject
    ^self ol with: anObject
!

li: anObject
    ^self li with: anObject
!

ul: anObject
    ^self ul with: anObject
!

span: anObject
    ^self span with: anObject
!

style: aString
	^ self style with: aString; yourself
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
    self 
	empty;
   	append: anObject
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
	"In IE7 and IE8 appendChild fails on several node types. So we need to check" 
 	<var element=self['@element'];
 	if (null == element.canHaveChildren || element.canHaveChildren) {
		element.appendChild(anElement);
 	} else {
 		element.text = String(element.text) +  anElement.innerHTML;
 	} >
!

appendString: aString
    self appendChild: (self createTextNodeFor: aString)
!

empty
	self asJQuery empty
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
!

type: aString
    self at: 'type' put: aString
!

media: aString
    self at: 'media' put: aString
!

rel: aString
    self  at: 'rel' put: aString
!

width: aString
    self  at: 'width' put: aString
!

height: aString
    self  at: 'height' put: aString
!

value: aString
    self  at: 'value' put: aString
! !

!TagBrush methodsFor: 'converting'!

asJQuery
    ^window jQuery: self element
! !

!TagBrush methodsFor: 'events'!

onKeyDown: aBlock
    self asJQuery bind: 'keydown' do: aBlock
!

onKeyPress: aBlock
    self asJQuery bind: 'keypress' do: aBlock
!

onKeyUp: aBlock
    self asJQuery bind: 'keyup' do: aBlock
!

onFocus: aBlock
    self asJQuery bind: 'focus' do: aBlock
!

onBlur: aBlock
    self asJQuery bind: 'blur' do: aBlock
!

onChange: aBlock
    self asJQuery bind: 'change' do: aBlock
!

onClick: aBlock
    self asJQuery bind: 'click' do: aBlock
! !

!TagBrush methodsFor: 'initialization'!

initializeFromString: aString canvas: aCanvas
    element := self createElementFor: aString.
    canvas := aCanvas
!

initializeFromJQuery: aJQuery canvas: aCanvas
    element := aJQuery get: 0.
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
	instanceVariableNames: ''
	category: 'Canvas'!

!Widget methodsFor: 'adding'!

appendToBrush: aTagBrush
    self appendToJQuery: aTagBrush asJQuery
!

appendToJQuery: aJQuery
   self renderOn: (HTMLCanvas onJQuery: aJQuery)
! !

!Widget methodsFor: 'rendering'!

renderOn: html
    self
! !

!Object methodsFor: '*Canvas'!

appendToJQuery: aJQuery
    aJQuery append: self asString
!

appendToBrush: aTagBrush
    aTagBrush append: self asString
! !

!BlockClosure methodsFor: '*Canvas'!

appendToJQuery: aJQuery
    self value: (HTMLCanvas onJQuery: aJQuery)
!

appendToBrush: aTagBrush
    aTagBrush appendBlock: self
! !

!String methodsFor: '*Canvas'!

asJQuery
    <return jQuery(String(self))>
!

appendToJQuery: aJQuery
    aJQuery append: self
!

appendToBrush: aTagBrush
    aTagBrush appendString: self
! !

