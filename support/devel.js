define([
	'amber_vm/smalltalk', // pre-fetch, dep of ./deploy
	'./deploy', // pre-fetch, dep of ./lang
	'./lang',
	'jquery-ui',
	'amber_lib/jquery-tabby/jquery.textarea',
	'amber_lib/codemirror/lib/codemirror',
	'amber_inc/CodeMirror/smalltalk',
	'amber_lib/codemirror/addon/hint/show-hint',
	'css!amber_lib/codemirror/theme/ambiance',
	'css!amber_lib/codemirror/lib/codemirror',
	'css!amber_lib/codemirror/addon/hint/show-hint',
	'css!amber_inc/CodeMirror/amber',
	'css!amber_css/amber',
	'amber_core/IDE',
	'amber_core/Examples',
	'amber_core/Benchfib'
], function (smalltalk) { return smalltalk; });
