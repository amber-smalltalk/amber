define([
	'./helpers', // pre-fetch, dep of ./deploy
	'./deploy', // pre-fetch, dep of ./lang
	'./lang',
	'./codemirror',
    'jquery-ui',
    'amber_lib/jquery-tabby/jquery.textarea',
    'amber_core/IDE',
    'amber_core/Examples',
    'amber_core/Benchfib',
	'css!amber/resources/amber'
], function (smalltalk) { return smalltalk; });
