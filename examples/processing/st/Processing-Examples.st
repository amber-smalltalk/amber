Smalltalk current createPackage: 'Processing-Examples' properties: #{}!
Object subclass: #ProcessingClock
	instanceVariableNames: 'processing centerX centerY maxArmLength'
	package: 'Processing-Examples'!

!ProcessingClock methodsFor: 'not yet classified'!

draw
| drawBlock |

drawBlock := [
  | now hoursPosition minutesPosition secondsPosition |  
  processing background: 224.
  
  now := Date new.
  
  "Moving hours arm by small increments"
   hoursPosition := now hours \\ 12 + now minutes / 60 / 12.
   self drawArm: hoursPosition lengthScale: 0.5 weight: 5.
   
   "Moving minutes arm by small increments"
    minutesPosition := now minutes + now seconds / 60 / 60.
    self drawArm: minutesPosition lengthScale: 0.80 weight: 3.

    "Moving hour arm by second increments"
    secondsPosition := now seconds / 60.
    self drawArm: secondsPosition lengthScale: 0.90 weight: 1.
  ].

^drawBlock
!

drawArm: aPosition lengthScale: aLengthScale weight: aWeight
| myDX myDY |
processing strokeWeight: aWeight.
myDX := centerX 
			+ ((Math sin: (aPosition * 2 * Math PI))
			* aLengthScale * maxArmLength).
myDY := centerY 
			- ((Math cos: (aPosition * 2 * Math PI))
			* aLengthScale * maxArmLength).

processing line: centerX y: centerY dX: myDX dy: myDY.
!

initialize
processing := <Processing.instances[0]>.
centerX := processing width / 2.
centerY := processing height / 2.
maxArmLength := Math min: centerX or: centerY.
!

processing
^processing
! !

!ProcessingClock class methodsFor: 'not yet classified'!

init
| clock processing block |
clock := ProcessingClock new .
processing := clock processing.
block := clock draw.
<processing.draw=block>
! !

