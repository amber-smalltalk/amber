Object subclass: #Benchfib
	instanceVariableNames: ''
	category: 'Benchfib'!

!Benchfib class methodsFor: 'not yet classified'!

main

	| result |
	result := 0 tinyBenchmarks.
	console log: '0 tinyBenchmarks => ' , result asString.
	result := 0 jstinyBenchmarks.
	console log: '0 jstinyBenchmarks => ' , result asString
! !

!Number methodsFor: '*Benchfib'!

benchFib
	"Handy send-heavy benchmark"
	"(result // seconds to run) = approx calls per second"
	" | r t |
	  t := Time millisecondsToRun: [r := 26 benchFib].
	  (r * 1000) // t"
	"138000 on a Mac 8100/100"
	^ self < 2
		ifTrue: [1] 
		ifFalse: [(self-1) benchFib + (self-2) benchFib + 1]
!

benchmark  "Handy bytecode-heavy benchmark"
	"(500000 // time to run) = approx bytecodes per second"
	"5000000 // (Time millisecondsToRun: [10 benchmark]) * 1000"
	"3059000 on a Mac 8100/100"
    | size flags prime k count |
    size := 8190.
    1 to: self do:
        [:iter |
        count := 0.
        flags := Array new.
        size timesRepeat: [ flags add: true].
        1 to: size do:
            [:i | (flags at: i) ifTrue:
                [prime := i+1.
                k := i + prime.
                [k <= size] whileTrue:
                    [flags at: k put: false.
                    k := k + prime].
                count := count + 1]]].
    ^ count
!

tinyBenchmarks
	"Report the results of running the two tiny Squeak benchmarks.
	ar 9/10/1999: Adjusted to run at least 1 sec to get more stable results"
	"0 tinyBenchmarks"
	"On a 292 MHz G3 Mac: 22727272 bytecodes/sec; 984169 sends/sec"
	"On a 400 MHz PII/Win98:  18028169 bytecodes/sec; 1081272 sends/sec"
	| t1 t2 r n1 n2 |
	n1 := 1.
	[t1 := Date millisecondsToRun: [n1 benchmark].
	t1 < 1000] whileTrue:[n1 := n1 * 2]. "Note: #benchmark's runtime is about O(n)"

	n2 := 28.
	[t2 := Date millisecondsToRun: [r := n2 benchFib].
	t2 < 1000] whileTrue:[n2 := n2 + 1]. 
	"Note: #benchFib's runtime is about O(k^n),
		where k is the golden number = (1 + 5 sqrt) / 2 = 1.618...."

	^ ((n1 * 500000 * 1000) / t1) printString, ' bytecodes/sec; ',
	  ((r * 1000) / t2) printString, ' sends/sec'
!

jsbenchFib
 
	<if (this < 2) {
return 1;
} else {
return (this-1)._jsbenchFib() + (this-2)._jsbenchFib() + 1;}>
!

jsbenchmark

<
var size = 8190;
var count;
for (var z=0;z<this;z++) {
  count = 0;
  var flags = new Array();
  for (var p=0; p<size; p++) {
    flags[p] = true;
  }
  for (var i=1;i<=size;i++) {
    if (flags[i-1]) {
      var prime = i+1;
      var k = i + prime;
      while (k <= size) {
        flags[k-1] = false;
        k = k + prime;
      }
      count = count + 1;
    }
  }
}
return count>
!

jstinyBenchmarks
	"0 jstinyBenchmarks"

	| t1 t2 r n1 n2 |
	n1 := 1.
	[t1 := Date millisecondsToRun: [n1 jsbenchmark].
	t1 < 1000] whileTrue:[n1 := n1 * 2]. "Note: #benchmark's runtime is about O(n)"

	n2 := 28.
	[t2 := Date millisecondsToRun: [r := n2 jsbenchFib].
	t2 < 1000] whileTrue:[n2 := n2 + 1]. 
	"Note: #jsbenchFib's runtime is about O(k^n),
		where k is the golden number = (1 + 5 sqrt) / 2 = 1.618...."

	^ ((n1 * 500000 * 1000) / t1) printString, ' bytecodes/sec; ',
	  ((r * 1000) / t2) printString, ' sends/sec'
! !

