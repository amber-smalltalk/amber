require.config({
	paths: {
		'jquery-ui': require.toUrl('amber_lib/jquery-ui/ui/minified/jquery-ui.min')
	},
	shim: {
		'jquery-ui': {
			deps: [ 'jquery' ]
		},
		'amber_lib/bootstrap/js/bootstrap': {
			deps: [ 'jquery', 'css!amber_lib/bootstrap/css/bootstrap' ]
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
	'./devel-inner', // pre-fetch, dep of ./helios-inner
	'./helios-inner',
    'css!helios/res/helios',
	'css!helios/res/helios-niflheim'
], function (smalltalk) { return smalltalk; });
