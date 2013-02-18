Smalltalk current createPackage: 'Canvas-Snippet' properties: #{}!
Object subclass: #HtmlSnippet
	instanceVariableNames: 'snippets'
	package: 'Canvas-Snippet'!

!HtmlSnippet methodsFor: 'accessing'!

addSnippet: anAssociation
	| snippet |
	(snippets ifNil: [ snippets := #{} ]) add: anAssociation.
    snippet := anAssociation value.
    ClassBuilder new
    	installMethod: ([ :htmlReceiver | htmlReceiver snip: snippet ] currySelf asCompiledMethod: anAssociation key)
        forClass: HTMLCanvas
        category: '**snippets'
!

addSnippets: aCollection
	aCollection associationsDo: [ :each | self addSnippet: each ]
!

at: aString
	^ snippets at: aString
!

at: aString ifAbsent: aBlock
	^ snippets at: aString ifAbsent: aBlock
! !

HtmlSnippet class instanceVariableNames: 'current'!

!HtmlSnippet class methodsFor: 'action'!

digFromJQuery: aJQuery
	"Finds and takes out all snippets out of aJQuery"
    | result |
    result := #{}.
	'[data-snippet]' asJQuery toArray do: [ :each |
    	| jq name |
        jq := each asJQuery.
        name := jq attr: 'data-snippet'.
        name = '*' ifFalse: [
        	('^\*' asRegexp test: name) ifTrue: [ name := name allButFirst. jq attr: 'data-snippet' put: '*' ]
          		ifFalse: [ jq removeAttr: 'data-snippet' ].
            result at: name put: (jq detach get: 0) ]].
	^result
! !

!HtmlSnippet class methodsFor: 'initialization'!

initialize
	super initialize.
	self current
! !

!HtmlSnippet class methodsFor: 'instance creation'!

current
	^ current ifNil: [
		current := self new addSnippets: (self digFromJQuery: document asJQuery); yourself ]
! !

!CharacterArray methodsFor: '*Canvas-Snippet'!

asSnippet
	^ HtmlSnippet current at: self asString
! !

!HTMLCanvas methodsFor: '*Canvas-Snippet'!

snip: anElement
	"Adds clone of anElement, finds [data-snippet=""*""] subelement
    and returns TagBrush as if that subelement was just added.
    
    Use with asSnippet -- (html snip: #mySnip asSnippet) with: [...]"
    | clone caret |
    clone := anElement asJQuery clone.
    self with: (TagBrush fromJQuery: clone canvas: self).
    caret := clone find: '[data-snippet="*"]'.
    caret toArray isEmpty ifTrue: [ caret := clone ].
    ^TagBrush fromJQuery: (caret removeAttr: 'data-snippet') canvas: self
! !

