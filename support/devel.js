define([
	'./helpers', // pre-fetch, dep of ./deploy
	'./deploy', // pre-fetch, dep of ./lang
	'./lang',
    'codemirror3/lib/codemirror',
    'codemirror3/mode/smalltalk/smalltalk',
    'codemirror3/addon/hint/show-hint',
    'css!codemirror3/theme/ambiance',
    'css!codemirror3/lib/codemirror',
    'css!codemirror3/addon/hint/show-hint',
    'jquery-ui',
    'amber_core/IDE',
    'amber_core/Examples',
    'amber_core/Benchfib',
	'css!amber/resources/amber'
], function (amber) { return amber; });
