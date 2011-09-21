Widget subclass: #Tweet
	instanceVariableNames: 'json'
	category: 'Examples'!

!Tweet methodsFor: 'not yet classified'!

renderOn: tr

| tdUser tdMessage img a pMessage pDate |
tdUser := HTMLCanvas new td.
tdUser element id: 'user'.
tdMessage := HTMLCanvas new td.
tdMessage element id: 'messageBox'.

tr append: tdUser.
tr append: tdMessage.

img := HTMLCanvas new img src: (json at: 'profile_image_url') .
img element title: (json at: 'from_user').
img element longDesc: ('http://twitter.com/', (json at: 'from_user')).

a := HTMLCanvas new a href: ('http://twitter.com/', (json at: 'from_user')).
a append: img.

tdUser append: a.

pMessage := HTMLCanvas new p.
pMessage element id: 'message'.
pMessage append: (json at: 'text').
tdMessage append: pMessage.

pDate := HTMLCanvas new p.
pDate element id: 'date'.
pDate append: (json at: 'created_at').
tdMessage append: pDate.
!

json
^json
!

json: aJson
json := aJson
! !

!Tweet class methodsFor: 'not yet classified'!

openAt: tr with: aJson
| tweet |
tweet := self new.
tweet json: aJson.
tweet renderOn: tr.
^tr
! !
