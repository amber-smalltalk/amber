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

!HTMLCanvas methodsFor: 'initialization'!

initialize
    super initialize.
    root := TagBrush fromString: 'div' canvas: self
! !

!HTMLCanvas methodsFor: 'adding'!

with: anObject
    ^self root with: anObject
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
! !


!HTMLCanvas methodsFor: '*JQuery'!

appendToJQuery: aJQuery
    aJQuery appendElement: root element
! !


Object subclass: #TagBrush
	instanceVariableNames: 'element'
	category: 'Canvas'!

!TagBrush class methodsFor: 'instance creation'!

fromString: aString canvas: aCanvas
    ^self new
	initializeFromString: aString canvas: aCanvas;
	yourself
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
    {'self[''@element''].appendChild(anElement)'}
!

appendString: aString
    self appendChild: (self createTextNodeFor: aString)
! !

!TagBrush methodsFor: 'attributes'!

at: aString put: aValue
    {'self[''@element''].setAttribute(aString, aValue)'}
!

removeAt: aString
    {'self[''@element''].removeAttribute(aString)'}
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

!TagBrush methodsFor: 'initialization'!

initializeFromString: aString canvas: aCanvas
    element := self createElementFor: aString.
    canvas := aCanvas
! !

!TagBrush methodsFor: 'accessing'!

element
    ^element
! !

!TagBrush methodsFor: 'converting'!

asJQuery
    ^{'return smalltalk.JQuery._from_(jQuery(self[''@element'']))'}
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

!TagBrush methodsFor: 'private'!

createElementFor: aString
    ^{'return document.createElement(String(aString))'}
!

createTextNodeFor: aString
    ^{'return document.createTextNode(String(aString))'}
! !



Object subclass: #Widget
	instanceVariableNames: 'root'
	category: 'Canvas'!

!Widget methodsFor: 'accessing'!

root
    ^root
! !

!Widget methodsFor: 'adding'!

appendToBrush: aTagBrush
    self appendToJQuery: aTagBrush asJQuery
!

appendToJQuery: aJQuery
    self render.
    aJQuery append: self root asJQuery
! !

!Widget methodsFor: 'actions'!

alert: aString
    {'alert(aString)'}
!

confirm: aString
    ^{'return window.confirm(aString)'}
!

prompt: aString
    ^self prompt: aString default: ''
!

prompt: aString default: anotherString
    ^{'return window.prompt(aString, anotherString)'}
!

update
    | canvas |
    canvas := HTMLCanvas new.
    canvas root: self root.
    self root asJQuery empty.
    self renderOn: canvas
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

Widget subclass: #Counter
	instanceVariableNames: 'count'
	category: 'Canvas'!

!Counter methodsFor: 'initialization'!

initialize
    super initialize.
    count := 0
! !

!Counter methodsFor: 'rendering'!

renderOn: html
    html h1 with: count asString.
    html button
	with: '++';
	onClick: [self increase].
    html button
	with: '--';
	onClick: [self decrease]
! !

!Counter methodsFor: 'actions'!

increase
    count := count + 1.
    self update
!

decrease
    count := count - 1.
    self update
! !
