Smalltalk current createPackage: 'Helios-Workspace' properties: #{}!
Object subclass: #HLWorkspaceModel
	instanceVariableNames: 'announcer environment'
	package: 'Helios-Workspace'!

!HLWorkspaceModel methodsFor: 'accessing'!

announcer
	^ announcer ifNil: [ self initializeAnnouncer ]
!

environment
	^ environment ifNil: [ self initializeEnvironment]
!

environment: anEnvironment
	environment := anEnvironment
! !

!HLWorkspaceModel methodsFor: 'actions'!

subscribe: aWidget
	aWidget subscribeTo: self announcer
! !

!HLWorkspaceModel methodsFor: 'initialization'!

initializeAnnouncer
	^ announcer := Announcer new
!

initializeEnvironment
	^ environment := Smalltalk current
! !

!HLWorkspaceModel methodsFor: 'reactions'!

onKeyDown: anEvent

	<if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 80) { //ctrl+p
			self._printIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 68) { //ctrl+d
			self._doIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 73) { //ctrl+i
			self._inspectIt();
			anEvent.preventDefault();
			return false;
		}
	}>
! !

!HLWorkspaceModel class methodsFor: 'actions'!

on: anEnvironment

	^ self new
    	environment: anEnvironment;
        yourself
! !

