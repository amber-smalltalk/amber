Smalltalk current createPackage: 'Helios-Layout'!
HLWidget subclass: #HLContainer
	instanceVariableNames: 'splitter'
	package: 'Helios-Layout'!

!HLContainer methodsFor: 'accessing'!

splitter
	^ splitter
!

splitter: aSplitter
	splitter := aSplitter
! !

!HLContainer methodsFor: 'rendering'!

renderOn: html
	html div 
    	class: 'tool_container'; 
        with: self splitter
! !

!HLContainer class methodsFor: 'instance creation'!

with: aSplitter
	^ self new 
    	splitter: aSplitter; 
        yourself
! !

Widget subclass: #HLSplitter
	instanceVariableNames: 'firstWidget secondWidget firstPane secondPane splitter'
	package: 'Helios-Layout'!

!HLSplitter methodsFor: 'accessing'!

cssClass
	^ 'splitter'
!

firstWidget
	^ firstWidget
!

firstWidget: aWidget
	firstWidget := aWidget
!

secondWidget
	^ secondWidget
!

secondWidget: aWidget
	secondWidget := aWidget
! !

!HLSplitter methodsFor: 'rendering'!

panesCssClass
	^ 'panes'
!

renderOn: html
	html div class: self panesCssClass; with: [
		firstPane := html div class: 'pane'; with: self firstWidget.
    	splitter := html div class: self cssClass.
    	secondPane := html div class: 'pane'; with: self secondWidget ].
        
	self setupSplitter
!

resize
!

setupSplitter
! !

!HLSplitter methodsFor: 'testing'!

isHeliosSplitter
	^ true
! !

!HLSplitter class methodsFor: 'instance creation'!

with: aWidget with: anotherWidget
	^ self new
    		firstWidget: aWidget;
            secondWidget: anotherWidget;
            yourself
! !

HLSplitter subclass: #HLHorizontalSplitter
	instanceVariableNames: ''
	package: 'Helios-Layout'!

!HLHorizontalSplitter methodsFor: 'accessing'!

cssClass
	^ super cssClass, ' horizontal'
!

panesCssClass
	^ super panesCssClass, ' horizontal'
! !

!HLHorizontalSplitter methodsFor: 'actions'!

resize
	self resize: (splitter asJQuery css: 'top')
!

resize: anInteger
	| container size offset percentage |
    
    container := firstPane asJQuery parent.
	offset := firstPane asJQuery offset top.
    size := container height.
	
	percentage := (size - (anInteger - offset)) / size * 100.
	percentage := 80 min: (percentage max: 20).
	
    firstPane asJQuery css: 'bottom' put: percentage asString, '%'.
	
	splitter asJQuery css: 'top' put: (100 - percentage) asString, '%'.
	secondPane asJQuery css: 'top' put: (100 - percentage) asString, '%'
!

startResizing: aSplitter
	aSplitter width: splitter asJQuery width
! !

!HLHorizontalSplitter methodsFor: 'rendering'!

setupSplitter
	splitter asJQuery draggable: #{ 
    	'axis' -> 'y'. 
        'containment' -> splitter asJQuery parent.
        'helper' -> 'clone'.
        'start' -> [ :e :ui | self startResizing: ui helper ].
        'drag' -> [ :e :ui | self resize: ui offset top ] }
! !

HLSplitter subclass: #HLVerticalSplitter
	instanceVariableNames: ''
	package: 'Helios-Layout'!

!HLVerticalSplitter methodsFor: 'accessing'!

cssClass
	^ super cssClass, ' vertical'
!

panesCssClass
	^ super panesCssClass, ' vertical'
! !

!HLVerticalSplitter methodsFor: 'actions'!

resize
	self resize: (splitter asJQuery css: 'left')
!

resize: anInteger
	| container size offset percentage |
    
    container := firstPane asJQuery parent.
	offset := firstPane asJQuery offset left.
    size := container width.
	
	percentage := (size - (anInteger - offset)) / size * 100.
	percentage := 80 min: (percentage max: 20).
	
    firstPane asJQuery css: 'right' put: percentage asString, '%'.
	
	splitter asJQuery css: 'left' put: (100 - percentage) asString, '%'.
	secondPane asJQuery css: 'left' put: (100 - percentage) asString, '%'
!

startResizing: aSplitter
	aSplitter height: splitter asJQuery height
! !

!HLVerticalSplitter methodsFor: 'rendering'!

setupSplitter
	splitter asJQuery draggable: #{ 
    	'axis' -> 'x'. 
        'containment' -> splitter asJQuery parent.
        'helper' -> 'clone'.
        'start' -> [ :e :ui | self startResizing: ui helper ].
        'drag' -> [ :e :ui | self resize: (ui offset left) ] }
! !

!Object methodsFor: '*Helios-Layout'!

isHeliosSplitter
	^ false
! !

