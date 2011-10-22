EnyoFriend subclass: #HelloAmber
        instanceVariableNames: 'count popup'
        category: 'HelloAmber'!

!HelloAmber methodsFor: 'accessing'!
count
	^count
! !

!HelloAmber methodsFor: 'actions'!
buttonClicked
	count := count + 1.
	self dollar input setValue: (self dollar input getValue, 'You clicked the button ', count asString, ' times so far').

	"Okidoki, why not throw up a popup?"
	popup openAtCenter
!

popupSelected: value
	"The user picked a value in the popup."
	self dollar input setValue: (self dollar input getValue, ' ', value)
! !

!HelloAmber methodsFor: 'initialization'!
initialize
	"Create Enyo stuff and hook in callback blocks calling our action methods,
	very similar to how Seaside does it.
	Creating the templates for component construction
	is clearly simpler to do in js. Yes, we can use
	method temps inside the js code and ivars are accessed
	using this syntax:

		this['@ivarname']

	We can not easily mix in arbitrary Amber expressions in the js code, thus
	we use method temps for holding the blocks instead of embedding the blocks
	directly. Blocks are js functions which is really neat. And we can use:

		this._amberMessage()

	to send messages to self for embedding the result."

	| props block block2 |
	super initialize.
	count := 0.

	"Create a callback block to embed below."
	block := [self buttonClicked].

	"We need to go through a method temp (props) for doing js, just inlining it
	after 'enyo create:' does not work so js escaping is on the statement level
	and not on the expression level."
	<props = {
		kind: 'VFlexBox',
		components: [
			{kind: 'PageHeader', content: 'Amber Live'},
 			{kind: "RowGroup", caption: "Rock on", components: [
				{kind: 'Input', components: [
					{kind: 'Button', caption: 'Click me', onclick: 'ablock'}]
				}]
			}],
		ablock: block}>.
	self ui: (enyo create: props).

	"If we like we can create a kind for the UI (then the props need a name EnyoHelloAmber),
	but we do not have to in this case so this is commented out."
	"self kind: (enyo kind: props).
	<this['@ui'] = new EnyoHelloAmber()>"

	"This Enyo popup instance is created and held in an ivar for later use."
	block2 := [:sender :value :old | self popupSelected: value].

	<props = {kind: "Popup", components: [
	    		{content: "Pick something you like a lot"},
	    		{kind: "ListSelector", onChange: "popupSelected", value: "Foo", items: ["Foo", "Bar", "Bot"]
			}],
		popupSelected: block2}>.
	popup := enyo create: props
	
! !

!HelloAmber class methodsFor: 'initialization'!
initialize

	enyo log: 'Class initialized'
! !
