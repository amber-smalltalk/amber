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
	hostname := os hostname.

        "Accessing a property of js HTTP request object"
        httpVersion := aRequest httpVersion.

        stream := String new writeStream.
	stream
		nextPutAll: '<html><p>Request HTTP version: ', httpVersion, '</p>';
		nextPutAll: '<p>OS hostname: ', hostname, '</p>';
		nextPutAll: '<p>Number of requests: ', counter asString, '</p></html>'.
	^stream contents
!

start
        | block obj |
        block := [:req :res || headers |
	    headers := Dictionary with: 'content-type' -> 'text/html'.
	    res writeHead: (Array with: 200 with: headers).
	    res end: (self process: req)].

        (http createServer: block)
                listen: 1337 host: '127.0.0.1'.
        console log: 'TrivialServer running at http://127.0.0.1:1337/'
! !


!TrivialServer class methodsFor: 'initialization'!
initialize
        "We require these Node modules."
    os := require value: 'os'.
    http := require value: 'http'.
!

main
	self new start
! !
