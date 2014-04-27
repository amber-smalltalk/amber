require.config({
	paths: {
		'jquery-ui': require.toUrl('amber_lib/jquery-ui/ui/minified/jquery-ui.min')
	},
	shim: {
		'jquery-ui': {
			deps: [ 'jquery' ]
		},
		'amber_lib/jquery-tabby/jquery.textarea': {
			deps: [ 'jquery' ]
		}
	}
});

define([
	'./helpers', // pre-fetch, dep of ./deploy
	'./deploy', // pre-fetch, dep of ./lang
	'./lang',
	'./codemirror',
	'./devel-inner',
	'css!amber_css/amber'
], function (smalltalk) { return smalltalk; });
