Smalltalk current createPackage: 'Canvas' properties: #{}!
Object subclass: #HTMLCanvas
	instanceVariableNames: 'root'
	package: 'Canvas'!

!HTMLCanvas methodsFor: 'accessing'!

root
    ^root
!

root: aTagBrush
    root := aTagBrush
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

a
    ^self tag: 'a'
!

abbr
	^self tag: 'abbr'
!

address
	^self tag: 'address'
!

area
	^self tag: 'area'
!

article
    ^self tag: 'article'
!

aside
	^self tag: 'aside'
!

audio
    ^self tag: 'audio'
!

base
	^self tag: 'base'
!

blockquote
	^self tag: 'blockquote'
!

body
	^self tag: 'body'
!

br
    ^self tag: 'br'
!

button
    ^self tag: 'button'
!

canvas
	^self tag: 'canvas'
!

caption
	^self tag: 'caption'
!

cite
	^self tag: 'cite'
!

code
    ^self tag: 'code'
!

col
	^self tag: 'col'
!

colgroup
	^self tag: 'colgroup'
!

command
	^self tag: 'command'
!

datalist
	^self tag: 'datalist'
!

dd
	^self tag: 'dd'
!

del
	^self tag: 'del'
!

details
	^self tag: 'details'
!

div
    ^self tag: 'div'
!

div: aBlock
    ^self div with: aBlock
!

dl
	^self tag: 'dl'
!

dt
	^self tag: 'dt'
!

em
	^self tag: 'em'
!

embed
	^self tag: 'embed'
!

fieldset
    ^self tag: 'fieldset'
!

figcaption
	^self tag: 'figcaption'
!

figure
	^self tag: 'figure'
!

footer
    ^self tag: 'footer'
!

form
    ^self tag: 'form'
!

h1
    ^self tag: 'h1'
!

h1: anObject
    ^self h1 with: anObject
!

h2
    ^self tag: 'h2'
!

h2: anObject
    ^ self h2 with: anObject
!

h3
    ^self tag: 'h3'
!

h3: anObject
    ^self h3 with: anObject
!

h4
    ^self tag: 'h4'
!

h4: anObject
    ^self h4 with: anObject
!

h5
    ^self tag: 'h5'
!

h5: anObject
    ^self h5 with: anObject
!

h6
    ^self tag: 'h6'
!

h6: anObject
    ^self h6 with: anObject
!

head
	^self tag: 'head'
!

header
    ^self tag: 'header'
!

hgroup
	^self tag: 'hgroup'
!

hr
    ^self tag: 'hr'
!

html
	^self tag: 'html'
!

iframe
    ^self tag: 'iframe'
!

iframe: aString
    ^self iframe src: aString
!

img
    ^self tag: 'img'
!

img: aString
    ^self img src: aString
!

input
    ^self tag: 'input'
!

label
	^self tag: 'label'
!

legend
	^self tag: 'legend'
!

li
    ^self tag: 'li'
!

li: anObject
    ^self li with: anObject
!

link
    ^self tag: 'link'
!

map
	^self tag: 'map'
!

mark
	^self tag: 'mark'
!

menu
	^self tag: 'menu'
!

meta
	^self tag: 'meta'
!

nav
	^self tag: 'nav'
!

newTag: aString
    ^TagBrush fromString: aString canvas: self
!

noscript
	^self tag: 'noscript'
!

object
	^self tag: 'object'
!

ol
    ^self tag: 'ol'
!

ol: anObject
    ^self ol with: anObject
!

optgroup
	^self tag: 'optgroup'
!

option
    ^self tag: 'option'
!

output
	^self tag: 'output'
!

p
    ^self tag: 'p'
!

p: anObject
    ^self p with: anObject
!

param
	^self tag: 'param'
!

pre
    ^self tag: 'pre'
!

progress
	^self tag: 'progress'
!

script
    ^self tag: 'script'
!

section
    ^self tag: 'section'
!

select
    ^self tag: 'select'
!

small
	^self tag: 'small'
!

source
	^self tag: 'source'
!

span
    ^self tag: 'span'
!

span: anObject
    ^self span with: anObject
!

strong
	^self tag: 'strong'
!

strong: anObject
	^self strong with: anObject
!

style
	^ root addBrush:  (StyleTag canvas: self)
!

style: aString
	^ self style with: aString; yourself
!

sub
	^self tag: 'sub'
!

summary
	^self tag: 'summary'
!

sup
	^self tag: 'sup'
!

table
    ^self tag: 'table'
!

tag: aString
    ^root addBrush: (self newTag: aString)
!

tbody
    ^self tag: 'tbody'
!

td 
    ^self tag: 'td'
!

textarea
    ^self tag: 'textarea'
!

tfoot
    ^self tag: 'tfoot'
!

th
    ^self tag: 'th'
!

thead
    ^self tag: 'thead'
!

time
	^self tag: 'time'
!

title
	^self tag: 'title'
!

tr
    ^self tag: 'tr'
!

ul
    ^self tag: 'ul'
!

ul: anObject
    ^self ul with: anObject
!

video
    ^self tag: 'video'
! !

!HTMLCanvas class methodsFor: 'instance creation'!

browserVersion
	^(jQuery at: #browser) version
!

isMSIE
	^((jQuery at: #browser) at: #msie) notNil
!

isMozilla
	^((jQuery at: #browser) at: #mozilla) notNil
!

isOpera
	^((jQuery at: #browser) at: #opera) notNil
!

isWebkit
	^((jQuery at: #browser) at: #webkit) notNil
!

onJQuery: aJQuery
	^self basicNew
		initializeFromJQuery: aJQuery;
		initialize;
		yourself
! !

Object subclass: #TagBrush
	instanceVariableNames: 'canvas element'
	package: 'Canvas'!

!TagBrush methodsFor: 'accessing'!

element
    ^element
! !

!TagBrush methodsFor: 'adding'!

addBrush: aTagBrush
    self appendChild: aTagBrush element.
    ^aTagBrush
!

append: anObject
    anObject appendToBrush: self
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

appendToBrush: aTagBrush
    aTagBrush addBrush: self
!

contents: anObject
    self 
	empty;
   	append: anObject
!

empty
	self asJQuery empty
!

with: anObject
    self append: anObject
! !

!TagBrush methodsFor: 'attributes'!

accesskey: aString
	self at: 'accesskey' put: aString
!

action: aString
	self at: 'action' put: aString
!

align: aString
	self at: 'align' put: aString
!

alt: aString
	self at: 'alt' put: aString
!

at: aString put: aValue
    <self['@element'].setAttribute(aString, aValue)>
!

class: aString
      <self['@element'].className = aString>
!

cols: aString
	self at: 'cols' put: aString
!

contenteditable: aString
	self at: 'contenteditable' put: aString
!

contextmenu: aString
	self at: 'contextmenu' put: aString
!

draggable: aString
	self at: 'draggable' put: aString
!

for: aString
	self at: 'for' put: aString
!

height: aString
    self  at: 'height' put: aString
!

hidden
	self at: 'hidden' put: 'hidden'
!

href: aString
    self at: 'href' put: aString
!

id: aString
    self at: 'id' put: aString
!

media: aString
    self at: 'media' put: aString
!

method: aString
	self at: 'method' put: aString
!

name: aString
	self at: 'name' put: aString
!

placeholder: aString
	self at: 'placeholder' put: aString
!

rel: aString
    self  at: 'rel' put: aString
!

removeAt: aString
    <self['@element'].removeAttribute(aString)>
!

rows: aString
	self at: 'rows' put: aString
!

src: aString
    self  at: 'src' put: aString
!

style: aString
    self at: 'style' put: aString
!

tabindex: aNumber
	self at: 'tabindex' put: aNumber
!

target: aString
	self at: 'target' put: aString
!

title: aString
    self at: 'title' put: aString
!

type: aString
    self at: 'type' put: aString
!

valign: aString
	self at: 'valign' put: aString
!

value: aString
    self  at: 'value' put: aString
!

width: aString
    self  at: 'width' put: aString
! !

!TagBrush methodsFor: 'converting'!

asJQuery
    ^window jQuery: self element
! !

!TagBrush methodsFor: 'events'!

onBlur: aBlock
    self asJQuery bind: 'blur' do: aBlock
!

onChange: aBlock
    self asJQuery bind: 'change' do: aBlock
!

onClick: aBlock
    self asJQuery bind: 'click' do: aBlock
!

onDblClick: aBlock
	self asJQuery bind: 'dblclick' do: aBlock
!

onFocus: aBlock
    self asJQuery bind: 'focus' do: aBlock
!

onFocusIn: aBlock
	self asJQuery bind: 'focusin' do: aBlock
!

onFocusOut: aBlock
	self asJQuery bind: 'focusout' do: aBlock
!

onHover: aBlock
	self asJQuery bind: 'hover' do: aBlock
!

onKeyDown: aBlock
    self asJQuery bind: 'keydown' do: aBlock
!

onKeyPress: aBlock
    self asJQuery bind: 'keypress' do: aBlock
!

onKeyUp: aBlock
    self asJQuery bind: 'keyup' do: aBlock
!

onMouseDown: aBlock
	self asJQuery bind: 'mousedown' do: aBlock
!

onMouseEnter: aBlock
	self asJQuery bind: 'mouseenter' do: aBlock
!

onMouseLeave: aBlock
	self asJQuery bind: 'mouseleave' do: aBlock
!

onMouseMove: aBlock
	self asJQuery bind: 'mousemove' do: aBlock
!

onMouseOut: aBlock
	self asJQuery bind: 'mouseout' do: aBlock
!

onMouseOver: aBlock
	self asJQuery bind: 'mouseover' do: aBlock
!

onMouseUp: aBlock
	self asJQuery bind: 'mouseup' do: aBlock
!

onSelect: aBlock
	self asJQuery bind: 'select' do: aBlock
!

onSubmit: aBlock
	self asJQuery bind: 'submit' do: aBlock
!

onUnload: aBlock
	self asJQuery bind: 'unload' do: aBlock
! !

!TagBrush methodsFor: 'initialization'!

initializeFromJQuery: aJQuery canvas: aCanvas
    element := aJQuery get: 0.
    canvas := aCanvas
!

initializeFromString: aString canvas: aCanvas
    element := self createElementFor: aString.
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

fromJQuery: aJQuery canvas: aCanvas
    ^self new
	initializeFromJQuery: aJQuery canvas: aCanvas;
	yourself
!

fromString: aString canvas: aCanvas
    ^self new
	initializeFromString: aString canvas: aCanvas;
	yourself
! !

TagBrush subclass: #StyleTag
	instanceVariableNames: 'canvas element'
	package: 'Canvas'!
!StyleTag commentStamp!
I'm a <style> tag use to inline CSS or load a stylesheet.

For inlining handle IE compatibility problems.!

!StyleTag methodsFor: 'adding'!

with: aString
	HTMLCanvas isMSIE
		ifTrue: [self element styleSheet cssText: aString ]
		ifFalse: [super with: aString ].
! !

!StyleTag class methodsFor: 'instance creation'!

canvas: aCanvas
    ^self new
	initializeFromString: 'style' canvas: aCanvas;
	yourself
! !

Object subclass: #Widget
	instanceVariableNames: ''
	package: 'Canvas'!

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

appendToBrush: aTagBrush
    aTagBrush append: self asString
!

appendToJQuery: aJQuery
    aJQuery append: self asString
! !

!BlockClosure methodsFor: '*Canvas'!

appendToBrush: aTagBrush
    aTagBrush appendBlock: self
!

appendToJQuery: aJQuery
    self value: (HTMLCanvas onJQuery: aJQuery)
! !

!String methodsFor: '*Canvas'!

appendToBrush: aTagBrush
    aTagBrush appendString: self
!

appendToJQuery: aJQuery
    aJQuery append: self
!

asJQuery
    <return jQuery(String(self))>
! !

