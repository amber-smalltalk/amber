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
	^ root addBrush:  (StyleTag canvas: self)
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
!

audio
    ^self tag: 'audio'
!

fieldset
    ^self tag: 'fieldset'
!

footer
    ^self tag: 'footer'
!

header
    ^self tag: 'header'
!

hr
    ^self tag: 'hr'
!

section
    ^self tag: 'section'
!

tbody
    ^self tag: 'tbody'
!

tfoot
    ^self tag: 'tfoot'
!

thead
    ^self tag: 'thead'
!

video
    ^self tag: 'video'
!

label
	^self tag: 'label'
!

title
	^self tag: 'title'
!

time
	^self tag: 'time'
!

sup
	^self tag: 'sup'
!

summary
	^self tag: 'summary'
!

sub
	^self tag: 'sub'
!

strong
	^self tag: 'strong'
!

strong: anObject
	^self strong with: anObject
!

source
	^self tag: 'source'
!

small
	^self tag: 'small'
!

progress
	^self tag: 'progress'
!

param
	^self tag: 'param'
!

output
	^self tag: 'output'
!

optgroup
	^self tag: 'optgroup'
!

object
	^self tag: 'object'
!

noscript
	^self tag: 'noscript'
!

nav
	^self tag: 'nav'
!

meta
	^self tag: 'meta'
!

menu
	^self tag: 'menu'
!

mark
	^self tag: 'mark'
!

map
	^self tag: 'map'
!

legend
	^self tag: 'legend'
!

html
	^self tag: 'html'
!

hgroup
	^self tag: 'hgroup'
!

head
	^self tag: 'head'
!

figure
	^self tag: 'figure'
!

figcaption
	^self tag: 'figcaption'
!

embed
	^self tag: 'embed'
!

em
	^self tag: 'em'
!

dt
	^self tag: 'dt'
!

dl
	^self tag: 'dl'
!

details
	^self tag: 'details'
!

del
	^self tag: 'del'
!

dd
	^self tag: 'dd'
!

datalist
	^self tag: 'datalist'
!

command
	^self tag: 'command'
!

colgroup
	^self tag: 'colgroup'
!

col
	^self tag: 'col'
!

cite
	^self tag: 'cite'
!

caption
	^self tag: 'caption'
!

body
	^self tag: 'body'
!

blockquote
	^self tag: 'blockquote'
!

base
	^self tag: 'base'
!

aside
	^self tag: 'aside'
!

article
    ^self tag: 'article'
!

area
	^self tag: 'area'
!

address
	^self tag: 'address'
!

abbr
	^self tag: 'abbr'
! !

!HTMLCanvas class methodsFor: 'instance creation'!

onJQuery: aJQuery
	^self basicNew
		initializeFromJQuery: aJQuery;
		initialize;
		yourself
!

isMSIE
	^((jQuery at: #browser) at: #msie) notNil
!

isOpera
	^((jQuery at: #browser) at: #opera) notNil
!

isMozilla
	^((jQuery at: #browser) at: #mozilla) notNil
!

isWebkit
	^((jQuery at: #browser) at: #webkit) notNil
!

browserVersion
	^(jQuery at: #browser) version
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
      <self['@element'].className = aString>
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
!

for: aString
	self at: 'for' put: aString
!

placeholder: aString
	self at: 'placeholder' put: aString
!

accesskey: aString
	self at: 'accesskey' put: aString
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

hidden
	self at: 'hidden' put: 'hidden'
!

tabindex: aNumber
	self at: 'tabindex' put: aNumber
!

target: aString
	self at: 'target' put: aString
!

align: aString
	self at: 'align' put: aString
!

alt: aString
	self at: 'alt' put: aString
!

name: aString
	self at: 'name' put: aString
!

valign: aString
	self at: 'valign' put: aString
!

method: aString
	self at: 'method' put: aString
!

action: aString
	self at: 'action' put: aString
!

rows: aString
	self at: 'rows' put: aString
!

cols: aString
	self at: 'cols' put: aString
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
!

onSubmit: aBlock
	self asJQuery bind: 'submit' do: aBlock
!

onDblClick: aBlock
	self asJQuery bind: 'dblclick' do: aBlock
!

onHover: aBlock
	self asJQuery bind: 'hover' do: aBlock
!

onFocusIn: aBlock
	self asJQuery bind: 'focusin' do: aBlock
!

onFocusOut: aBlock
	self asJQuery bind: 'focusout' do: aBlock
!

onMouseDown: aBlock
	self asJQuery bind: 'mousedown' do: aBlock
!

onMouseUp: aBlock
	self asJQuery bind: 'mouseup' do: aBlock
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

onSelect: aBlock
	self asJQuery bind: 'select' do: aBlock
!

onUnload: aBlock
	self asJQuery bind: 'unload' do: aBlock
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

TagBrush subclass: #StyleTag
	instanceVariableNames: 'canvas element'
	category: 'Canvas'!
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

