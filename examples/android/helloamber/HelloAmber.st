Object subclass: #HelloAmber
    instanceVariableNames: ''
    package: 'HelloAmber'!

!HelloAmber methodsFor: 'accessing'!
begin
    "Makes me say hello to the user."

    | msg button |
    msg := 'Hello world.'.
    button := window jQuery: '#sayHello'.
    button click: [button after: '<p>' , msg , '</p>'].
! !
