define([
	'./helpers', // pre-fetch, dep of ./deploy
	'./deploy', // pre-fetch, dep of ./lang
	'./lang',
    'codemirror/lib/codemirror',
    'codemirror/mode/smalltalk/smalltalk',
    'codemirror/addon/hint/show-hint',
    'css!codemirror/theme/ambiance',
    'css!codemirror/lib/codemirror',
    'css!codemirror/addon/hint/show-hint',
    'jquery-ui',
    'amber_core/IDE',
    'amber_core/Examples',
    'amber_core/Benchfib',
	'css!amber/resources/amber'
], function (amber) { return amber; });
