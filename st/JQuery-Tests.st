TestCase subclass: #JQueryTest
	instanceVariableNames: 'document'
	category: 'JQuery-Tests'!

!JQueryTest methodsFor: 'running'!

setUp
	document := '<div class="person">
				<ul>
					<li class="firstname">James</li>
					<li class="lastname">Bond</li>
				</ul>
			</div>'.
! !

!JQueryTest methodsFor: 'tests'!

testFind
	self 
		assert: 'James' 
		equals: (document asJQuery find: 'li.firstname') html.
!

testEach
	|classes|
	classes := Array new.

	(document asJQuery find: 'li') each: [:index :element|   
                                              		  	classes add: ((JQuery fromElement:element) attr: 'class')].
	self 
		assert: #('firstname' 'lastname') printString
		equals: classes printString
! !

