Object subclass: #TwitterSearch
	instanceVariableNames: ''
	category: 'Examples'!

!TwitterSearch methodsFor: 'not yet classified'!

query: aQueryString
| result |
result := jQuery 
			ajax: 'http://search.twitter.com/search.json?rpp=5&q=', aQueryString
			options: #{
				'type' -> 'GET'.
				'success' -> [ :tmp | self success: (tmp results)].
				'error' -> [window alert: 'error'].
				'dataType' -> 'jsonp'
			}.
!

success: tweets
| wall table tr |
wall := '#playground'.
table := (HTMLCanvas onJQuery: (wall asJQuery))  table.
table element id: 'twitterwall'.

tweets do: [ :tweet | 
           tr := HTMLCanvas new tr.
           table append: tr.
           Tweet openAt: tr with: tweet
           ].
! !
