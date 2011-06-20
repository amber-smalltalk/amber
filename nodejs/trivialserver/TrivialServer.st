Object subclass: #TrivialServer
        instanceVariableNames: 'counter'
        category: 'TrivialServer'!

!TrivialServer methodsFor: 'initializing'!
initialize
        counter := 0
! !

!TrivialServer methodsFor: 'processing'!
process: aRequest

        | hostname httpVersion stream |
	counter := counter + 1.

        "Calling a method in a js module"
	hostname := {'os.hostname()'}.

        "Accessing a property of js HTTP request object"
        httpVersion := {'aRequest.httpVersion'}.

        stream := String new writeStream.
	stream
		nextPutAll: '<html><p>Request HTTP version: ', httpVersion, '</p>';
		nextPutAll: '<p>OS hostname: ', hostname, '</p>';
		nextPutAll: '<p>Number of requests: ', counter asString, '</p></html>'.
	^stream contents
! !

!TrivialServer class methodsFor: 'initialization'!
initialize
	{'os = require(''os'');'}
! !
