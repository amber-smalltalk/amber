Object subclass: #Hello
        instanceVariableNames: ''
        category: 'Hello'!

!Hello class methodsFor: 'main'!

main
	{'console.log(smalltalk.Hello._new()._hello());'}
! ! 

!Hello methodsFor: 'printing'!

hello
        ^'Hello world from JTalk in Node.js'
! !
