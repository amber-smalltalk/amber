define([
	'./helpers', // pre-fetch, dep of ./deploy
	'./deploy', // pre-fetch, dep of ./lang
	'./lang',
	'jquery-ui',
	'mousewheel',
	'amber_lib/jquery-tabby/jquery.textarea',
	'./codemirror',
	'css!amber_css/amber',
	'amber_core/IDE',
	'amber_core/Examples',
	'amber_core/Benchfib'
], function (smalltalk) { return smalltalk; });
