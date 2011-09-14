EnyoFriend subclass: #Eris
        instanceVariableNames: ''
        category: 'Eris'!

!Eris methodsFor: 'actions'!

doIt
    | result |
    [ result := self eval: self dollar richText getValue ]
	on: Error
	do: [:ex |
		^self warn: ex messageText title: 'Error' button: 'Ooops...'].
    ^result
!

clear
	self dollar richText setValue: ''
!

eval: aString
    | compiler node |
    compiler := Compiler new.
    node := compiler parseExpression: aString.
    node isParseFailure ifTrue: [
	^self warn: 'Ehrm, you are a Smalltalk n00b, right? That is not valid syntax.' title: 'Parsing Error' button: 'Okidoki...'].
    ^compiler loadExpression: aString.
!

printString
	^''
!

warn: aString title: aTitle button: caption
	| block popup |
	block := [popup close].
	<props = {kind: 'ModalDialog', caption: aTitle, components: [
			{kind: 'Control', content: aString, className: 'enyo-text-error warning-icon'},
			{kind: 'Button', caption: caption, onclick: 'closePopup', style: 'margin-top:10px'}],
		 closePopup: block}>.
	popup := enyo create: props.
	popup openAtCenter
!

print: aString
    self dollar richText setValue: (self dollar richText getValue), ' ', aString
!

quack
	"(self kind: 'Sound'; src: 'DuckQwaq.wav'; create) play"
	(enyo create: (Dictionary new at: 'kind' put: 'Sound'; at: 'src' put: 'DuckQwaq.wav'; yourself)) play
!

printIt
    self print: self doIt printString
! !

!Eris methodsFor: 'initialization'!
initialize
	| props doItBlock printItBlock quackBlock clearBlock |
	super initialize.
	doItBlock := [self doIt].
	printItBlock := [self printIt].
	quackBlock := [self quack].
	clearBlock := [self clear].

	<props = {kind: 'VFlexBox', components: [
			{kind: 'PageHeader', content: 'Eris'},
 			{kind: 'RowGroup', caption: 'Workspace', components: [
				{kind: 'RichText', richContent: false,
					value: 'Put some funky Amber code here...',
					autoWordComplete: false, spellcheck: false, autocorrect: false,
					autoCapitalize: 'lowercase', alwaysLooksFocused: true
				},
				{kind: 'Toolbar', components: [
					{caption: 'Do it', onclick: 'doit'},
					{caption: 'Print it', onclick: 'printit'},
					{caption: 'Clear', onclick: 'clear'},
					{kind: 'Spacer'},
					{caption: 'Quack!!', onclick: 'quack'}]}]}],
		doit: doItBlock,
		printit: printItBlock,
		quack: quackBlock,
		clear: clearBlock}>.
	ui := enyo create: props.
! !

