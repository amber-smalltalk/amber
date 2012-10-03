Smalltalk current createPackage: 'Helios-Layout' properties: #{}!
Widget subclass: #HLContainer
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
    	id: 'container'; 
        with: self splitter.
        
   (window jQuery: window) bind: 'resize' do: [ self splitter resize ]
! !

!HLContainer class methodsFor: 'instance creation'!

with: aSplitter
	^ self new 
    	splitter: aSplitter; 
        yourself
! !

Widget subclass: #HLPane
	instanceVariableNames: ''
	package: 'Helios-Layout'!

HLPane subclass: #HLHorizontalPane
	instanceVariableNames: ''
	package: 'Helios-Layout'!

HLPane subclass: #HLVerticalPane
	instanceVariableNames: ''
	package: 'Helios-Layout'!

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
        
	self 
    	setupSplitter;
        resize
!

resize
	self firstWidget isHeliosSplitter ifTrue: [ self firstWidget resize ].
    self secondWidget isHeliosSplitter ifTrue: [ self secondWidget resize ]
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
	| container position |
    
    container := firstPane asJQuery parent.
    position := splitter asJQuery offset top - container offset top.
    
	firstPane asJQuery height: ((position min: container height - 100) max: 100).
    secondPane asJQuery height: (((container height - position) min: container height - 100) max: 100) - 6.
    
   "Put the splitter div back to a relative position" 
    splitter asJQuery css: 'top' value: 0.
    
    super resize
! !

!HLHorizontalSplitter methodsFor: 'rendering'!

setupSplitter
	splitter asJQuery draggable: #{ 'axis' -> 'y'. 'stop' -> [ self resize ] }
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
	| container position |
    
    container := firstPane asJQuery parent.
    position := splitter asJQuery offset left - container offset left.
    
	firstPane asJQuery width: ((position min: container width - 100) max: 100).
    secondPane asJQuery width: (((container width - position) min: container width - 100) max: 100) - 6.
    
   "Put the splitter div back to a relative position" 
    splitter asJQuery css: 'left' value: 0.
    
    super resize
! !

!HLVerticalSplitter methodsFor: 'rendering'!

setupSplitter
	splitter asJQuery draggable: #{ 'axis' -> 'x'. 'stop' -> [ self resize ] }
! !

!Object methodsFor: '*Helios-Layout'!

isHeliosSplitter
	^ false
! !

