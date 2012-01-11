Smalltalk current createPackage: 'Examples' properties: #{}!
Widget subclass: #Counter
	instanceVariableNames: 'count header'
	category: 'Examples'!

!Counter methodsFor: 'actions'!

increase
    count := count + 1.
    header contents: [:html | html with: count asString]
!

decrease
    count := count - 1.
    header contents: [:html | html with: count asString]
! !

!Counter methodsFor: 'initialization'!

initialize
    super initialize.
    count := 0
! !

!Counter methodsFor: 'rendering'!

renderOn: html
    header := html h1 
	with: count asString;
	yourself.
    html button
	with: '++';
	onClick: [self increase].
    html button
	with: '--';
	onClick: [self decrease]
! !

