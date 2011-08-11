
Dictionary subclass: #EKind
        instanceVariableNames: ''
        category: 'HelloJtalk'!

Dictionary subclass: #EComponent
        instanceVariableNames: ''
        category: 'HelloJtalk'!

EKind subclass: #HelloJtalk
        instanceVariableNames: ''
        category: 'HelloJtalk'!

!HelloJtalk class methodsFor: 'initializing'!
initialize
        | me control button input popup myInput pageHeader arr field children |
	pageHeader := EComponent new.
	pageHeader at: 'kind' put: 'PageHeader'; at: 'content' put: 'JTalk Live'.
	button := EComponent new.
	<popup = {kind: "Popup", components: [
    		{content: "Pick something you like"},
    		{kind: "ListSelector", value: "Foo", items: ["Foo", "Bar", "Bot"]}]}>.
	button at: 'kind' put: 'Button';
		at: 'caption' put: 'Click here please';
		at: 'onclick' put: 'buttonClick'.
	input := EComponent new.
	input at: 'kind' put: 'Input'.
	me := self new.
	arr := Array new.
	arr add: pageHeader; add: button; add: input; add: popup.
	me at: 'components' put: arr; 
             at: 'name' put: 'jtalk.HelloJtalk';
	     at: 'kind' put: 'VFlexBox';
	     at: 'buttonClick' put: [
		children := <this.$>.

		field := children input.

"This next line works fine"

		<field.setValue('Yo')>.

"But for some reason I can not get this next line to do anything"

		field setValue: 'Yowza'.

"But this line works fine, but has no arguments... ?"
		children popup openAtCenter].

	enyo kind: me.
	enyo log: 'Done initializing.'

! !

