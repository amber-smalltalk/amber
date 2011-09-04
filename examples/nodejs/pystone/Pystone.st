Object subclass: #PyStoneRecord
	instanceVariableNames: 'ptrComp discr enumComp intComp stringComp'
	category: 'Pystone'!
!PyStoneRecord commentStamp!
Record class used in Pystone benchmark.!

!PyStoneRecord methodsFor: 'accessing'!

discr
	^discr
!

discr: p
	discr := p
!

enumComp
	^enumComp
!

enumComp: p
	enumComp := p
!

intComp
	^intComp
!

intComp: p
	intComp := p
!

ptrComp
	^ptrComp
!

ptrComp: p
	ptrComp := p
!

stringComp
	^stringComp
!

stringComp: p
	stringComp := p
! !

!PyStoneRecord methodsFor: 'copying'!

copy
	^PyStoneRecord ptrComp: ptrComp discr: discr enumComp: enumComp intComp: intComp stringComp: stringComp
! !

!PyStoneRecord methodsFor: 'initialize-release'!

ptrComp: p discr: d enumComp: e intComp: i stringComp: s

	ptrComp := p.
	discr := d.
	enumComp := e.
	intComp := i.
	stringComp := s
! !

!PyStoneRecord class methodsFor: 'instance-creation'!

new

	^self ptrComp: nil discr: 0 enumComp: 0 intComp: 0 stringComp: 0
!

ptrComp: p discr: d enumComp: e intComp: i stringComp: s

	^super new ptrComp: p discr: d enumComp: e intComp: i stringComp: s
! !

Object subclass: #Pystone
	instanceVariableNames: 'nulltime ptrGlbNext ptrGlb ident1 ident3 ident2 ident4 ident5 ident6 intGlob boolGlob char1Glob char2Glob array1Glob array2Glob func3 func2 func1'
	category: 'Pystone'!
!Pystone commentStamp!
This is a straight translation of pystone 1.1 from Python to Squeak. Procedures have been mapped to instance side methods, functions have been mapped to blocks. Open a transcript and run:

Pystone run!

!Pystone methodsFor: 'as yet unclassified'!

defineFunctions
	"Functions have been mapped to blocks, since that
	would be natural."
	
	func1 := [:charPar1 :charPar2 |
		| charLoc1 charLoc2 |
		charLoc1 := charPar1.
		charLoc2 := charLoc1.
		(charLoc2 = charPar2) ifTrue: [ident2] ifFalse: [ident1]].

	func2 := [:strParI1 :strParI2 |
		| intLoc charLoc |
		intLoc := 1.
		[intLoc <= 1] whileTrue: [
			((func1 value: (strParI1 at: intLoc) value: (strParI1 at: intLoc + 1)) = ident1)
				ifTrue: [
					charLoc := 'A'.
					intLoc := intLoc + 1]].
		(charLoc >= 'W' and: [charLoc <= 'Z']) ifTrue: [
			intLoc := 7].
		(charLoc = 'X') ifTrue: [true] ifFalse: [
			(strParI1 > strParI2) ifTrue: [
				intLoc := intLoc + 7.
				true]
			ifFalse: [
				false]]].
	
	func3 := [:enumParIn |
		| enumLoc |
		enumLoc := enumParIn.
		enumLoc = ident3]
!

main: loops
	"Adaption of pystone.py version 1.9 from Python."

	ident1 := 1. ident2 := 2. ident3 := 3. ident4 := 4. ident5 := 5. ident6 := 6.
	intGlob := 0.
	boolGlob := false.
	char1Glob := String value: 0.
	char2Glob := String value: 0.
	array1Glob := Array new.
        51 timesRepeat: [ array1Glob add: 0].
	array2Glob := ((1 to: 51) collect: [:i | array1Glob copy]) asArray.

	self defineFunctions.

	self pystones: loops block: [:benchtime :stones |
		self log: 'Pystone(1.1) time for ', loops asString, ' passes = ', benchtime asString.
		self log: 'This machine benchmarks at ',
			((stones / 0.1) rounded * 0.1) asString, ' pystones/second']
!

log: aString
	(smalltalk at: #Transcript)
		ifNotNil: [
			Transcript show: aString;cr]
		ifNil: [
			console log: aString]
!		

proc0: loops block: aBlock
	| string1Loc starttime intLoc1 intLoc2 string2Loc enumLoc intLoc3 charIndex benchtime |

	loops timesRepeat: [].

	benchtime := Date millisecondsToRun: [
	ptrGlbNext := PyStoneRecord new.
	ptrGlb := PyStoneRecord new.
	ptrGlb ptrComp: ptrGlbNext.
	ptrGlb discr: ident1.
	ptrGlb enumComp: ident3.
	ptrGlb intComp: 40.
	ptrGlb stringComp: 'DHRYSTONE PROGRAM, SOME STRING'.
	string1Loc := 'DHRYSTONE PROGRAM, 1''ST STRING'.
	
	(array2Glob at: 8) at: 7 put: 10.
	"1 to: loops - 1 do: [:i |       Changed this to use timesRepeat: since i is not used at all in the loop"
	loops timesRepeat: [
		self proc5; proc4.
		intLoc1 := 2.
		intLoc2 := 3.
		string2Loc := 'DHRYSTONE PROGRAM, 2''ND STRING'.
		enumLoc := ident2.
		boolGlob := (func2 value: string1Loc value: string2Loc) not.
		[intLoc1 < intLoc2] whileTrue: [
			intLoc3 := 5 * intLoc1 - intLoc2.
			intLoc3 := self proc7: intLoc1 with: intLoc2.
			intLoc1 := intLoc1 + 1].
	 	self proc8:array1Glob with: array2Glob with: intLoc1 with: intLoc3.
		ptrGlb := self proc1: ptrGlb.
		charIndex := 'A'.
		[charIndex <= char2Glob] whileTrue: [
			(enumLoc = (func1 value: charIndex value: 'C'))
					ifTrue: [enumLoc := self proc6: ident1].
			charIndex := String value: (charIndex asciiValue + 1)].
		intLoc3 := intLoc2 * intLoc1.
		intLoc2 := intLoc3 / intLoc1.
		intLoc2 := 7 * (intLoc3 - intLoc2) - intLoc1.
		intLoc1 := self proc2: intLoc1]].
    ^ aBlock value: (benchtime / 1000) value: (loops / benchtime) * 1000
!

proc1: ptrParIn
	| nextRecord tmp |
	tmp := ptrParIn.
	nextRecord := ptrGlb copy.
	ptrParIn ptrComp: nextRecord.
	ptrParIn intComp: 5.
	nextRecord intComp: ptrParIn intComp.
	nextRecord ptrComp: ptrParIn ptrComp.
	nextRecord ptrComp: (self proc3: nextRecord ptrComp).
	(nextRecord discr = ident1) ifTrue: [
		nextRecord intComp: 6.
		nextRecord enumComp: (self proc6: ptrParIn enumComp).
		nextRecord ptrComp: ptrGlb ptrComp.
		nextRecord intComp: (self proc7: nextRecord intComp with: 10) ]
	ifFalse: [
		tmp := nextRecord copy].
	nextRecord ptrComp: nil.
	^tmp
!

proc2: intParIO
	| tmp intLoc enumLoc |
	tmp := intParIO.
	intLoc := intParIO + 10.
	[true] whileTrue: [
		(char1Glob = 'A') ifTrue: [
			intLoc := intLoc - 1.
			tmp := intLoc - intGlob.
			enumLoc := ident1].
		(enumLoc = ident1) ifTrue: [
			^ tmp]]
!

proc3: ptrParOut
	| tmp |
	tmp := ptrParOut.
	ptrGlb ifNotNil: [
		tmp := ptrGlb ptrComp]
	ifNil: [
		intGlob := 100].
	ptrGlb intComp: (self proc7: 10 with: intGlob).
	^tmp
!

proc4
	| boolLoc |
	boolLoc := char1Glob = 'A'.
	boolLoc := boolLoc | boolGlob.
	char2Glob := 'B'
!

proc5
	char1Glob := 'A'.
	boolGlob := false
!

proc6: enumParIn
	| enumParOut |
	enumParOut := enumParIn.
	(func3 value: enumParIn) ifFalse: [
		enumParOut := ident4].
	(enumParIn = ident1) ifTrue: [
		enumParOut := ident1] ifFalse: [
	(enumParIn = ident2) ifTrue: [
			intGlob > 100 ifTrue: [
				enumParOut := ident1]
			ifFalse: [
				enumParOut := ident4]] ifFalse: [
	(enumParIn = ident3) ifTrue: [
		enumParOut := ident2] ifFalse: [
	(enumParIn = ident4) ifTrue: [] ifFalse: [
	(enumParIn = ident5) ifTrue: [
		enumParOut := ident3]]]]].
	^enumParOut
!

proc7: intParI1 with: intParI2
	| intLoc intParOut |
	intLoc := intParI1 + 2.
	intParOut := intParI2 + intLoc.
	^ intParOut
!

proc8: array1Par with: array2Par with: intParI1 with: intParI2
	| intLoc |
	intLoc := intParI1 + 5.
	array1Par at: intLoc put: intParI2.
	array1Par at: intLoc + 1 put: (array1Par at: intLoc).
	array1Par at: intLoc + 30 put: intLoc.
	intLoc to: intLoc + 1 do: [:intIndex |
		(array2Par at: intLoc) at: intIndex put: intLoc.
		(array2Par at: intLoc) at: intLoc - 1 put: ((array2Par at: intLoc) at: intLoc - 1) + 1.
		(array2Par at: intLoc + 20) at: intLoc put: (array1Par at: intLoc)].
	intGlob := 5
!

pystones: loops block: aBlock
	^self proc0: loops block: aBlock
! !

Pystone class instanceVariableNames: 'nulltime'!

!Pystone class methodsFor: 'as yet unclassified'!

main
	"self main"
	
	self run: 50000
!

run: loops
	"self run: 50000"
	
	self new main: loops
! !

