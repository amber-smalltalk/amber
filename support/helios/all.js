require.config({
	paths: {
        'amber_lib/bootstrap': require.toUrl('amber_lib') + '/bootstrap2.3.2/bootstrap',
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
	'amber/helpers', // pre-fetch, dep of amber/deploy
	'amber/deploy', // pre-fetch, dep of amber/lang
	'amber/lang',
	'amber/codemirror',
	'amber/devel-inner', // pre-fetch, dep of ./all-inner
	'./resources/all-inner',
    'css!./resources/helios',
	'css!./resources/helios-niflheim',
    'css!./resources/niflheim'
], function (smalltalk) { return smalltalk; });
