require.config({
	shim: {
		'amber_lib/codemirror/lib/codemirror': {
			deps: [ 'css!amber_lib/codemirror/lib/codemirror' ]
		},
		'amber_lib/codemirror/mode/smalltalk/smalltalk': {
			deps: [ '../../lib/codemirror' ]
		},
		'amber_lib/codemirror/addon/hint/show-hint': {
			deps: [ '../../lib/codemirror' ]
		}
	}
});

define(['./codemirror-inner']);
